const express = require('express');
const User = require('../core/user');
const router = express.Router();

// crée un objet à partir de la classe User dans le fichier core / user.js
const user = new User();

// Récupère la page d'index
router.get('/', (req, res, next) => {
    let user = req.session.user;
   // S'il y a une session nommée user, cela signifie que l'utilisation est connectée. Nous le redirigeons donc vers la page d'accueil en utilisant / home route ci-dessous
    if(user) {
        res.redirect('src/bienvenue.html');
        return;
    }
   // SI non, nous envoyons simplement la page d'index.
    res.render('src/index.html', {title:"My application"});
})

// Get home page
router.get('src/bienvenue.html', (req, res, next) => {
    let user = req.session.user;

    if(user) {
        res.render('src/bienvenue.html', {opp:req.session.opp, name:user.fullname});
        return;
    }
    res.redirect('/');
});

// Post login data
router.post('src/index.html', (req, res, next) => {
    // The data sent from the user are stored in the req.body object.
    // call our login function and it will return the result(the user data).
    user.login(req.body.username, req.body.password, function(result) {
        if(result) {
            // Store the user data in a session.
            req.session.user = result;
            req.session.opp = 1;
            // redirect the user to the home page.
            res.redirect('src/bienvenue.html');
        }else {
            // if the login function returns null send this error message back to the user.
            res.send('Email/Password incorrect!');
        }
    })

});


// Post inscription.html data
router.post('src/inscription.html', (req, res, next) => {
    // prepare an object containing all user inputs.
    let userInput = {
        username: req.body.username,
        fullname: req.body.fullname,
        password: req.body.password
    };
    // call create function. to create a new user. if there is no error this function will return it's id.
    user.create(userInput, function(lastId) {
        // if the creation of the user goes well we should get an integer (id of the inserted user)
        if(lastId) {
            // Get the user data by it's id. and store it in a session.
            user.find(lastId, function(result) {
                req.session.user = result;
                req.session.opp = 0;
                res.redirect('src/bienvenue.html');
            });

        }else {
            console.log('Error creating a new user ...');
        }
    });

});


// Get loggout page
router.get('/src/bienvenue.html', (req, res, next) => {
    // Check if the session is exist
    if(req.session.user) {
        // destroy the session and redirect the user to the index page.
        req.session.destroy(function() {
            res.redirect('/');
        });
    }
});

module.exports = router;
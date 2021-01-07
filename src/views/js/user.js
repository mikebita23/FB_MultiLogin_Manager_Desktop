
const { ipcRenderer } = require('electron');
const request = require('request-promise');
const API_URL = "https://gls-login.herokuapp.com";

var firstName = document.getElementById("prenom")
var lastName =document.getElementById("nom")
var email=  document.getElementById("inputEmail");
var  phoneNumber= document.getElementById("tel");
var  passWord= document.getElementById("inputPassword")
const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlicmFAaWJyYS5jb20iLCJ1c2VySWQiOjQxLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTAwMjUwNzMsImV4cCI6MTYxMDAyODY3M30.Xu_lxtv_jZQGZSRqvKvTrFOVUSspvyO6q-OIedrBJ6s"
}
var data;

function getData() {
    return request({
        method: 'POST',
        url: `${API_URL}/users/get`,
        auth: Auth,
        json: true
    }).then(res => {
       
        data=res;
        return data;
    }).catch(err => {
        console.log(err.error);
        return err;
    })
}

data= getData()

    $('#modification').on('click', _ =>{
        console.log(data.firstName, data.lastName);
        if(!email.value && !passWord.value && !phoneNumber.value
            && !lastName.value && !firstName.value ){
            ipcRenderer.send('update-user', { 
                email: (data.email),
                passWord:  (data.passWord),
                phoneNumber: (data.phoneNumber),
                lastName: (data.lastName),
                firstName: (data.firstName)
                })//; 
            
                console.log("mail vide");
          }
      else {     
            ipcRenderer.send('update-user', { 
                firstName: $(firstName).val(),
                lastName: $(lastName).val(),
                email: $(email).val(),
                phoneNumber: $(phoneNumber).val(),
                passWord: $(passWord).val()
                })//;           
    }
    });

    
ipcRenderer.on('update-user-reply', (_, res) => {
    if (res) {
        console.log(data)
        window.location.href = '../html/bienvenue.html'
    } 
});

/// Get user 

$("#menu-toggle").on('click', function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

// assuming $ is jQuery
$(document).on('click', 'a[href^="http"]', function (event) {
    event.preventDefault();
    shell.openExternal(this.href);
});

$("#menu-toggle").on('click', function (e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

const shell = require('electron').shell;

// assuming $ is jQuery
$(document).on('click', 'a[href^="http"]', function (event) {
    event.preventDefault();
    shell.openExternal(this.href);
});




const request1 = require('request-promise');

var emailValue;
var prenom;
var tel;

var __API_URL, __token;

function getEmail() {
    return request1({
        method: 'POST',
        url: `${__API_URL}/users/get`,
        auth: {
            'bearer': __token
        },
        json: true
    }).then(res => {
        emailValue = res.email;
        console.log("Ma data", emailValue);
        return document.getElementById('inputEmail').setAttribute('value', emailValue)

    }).catch(err => {
        console.log(err.error);
        return err;
    })
}
function getNom() {
    return request1({
        method: 'POST',
        url: `${__API_URL}/users/get`,
        auth: {
            'bearer': __token
        },
        json: true
    }).then(res => {
        nom = res.lastName;
        console.log("Ma data", nom);
        return document.getElementById('nom').setAttribute('value', nom)

    }).catch(err => {
        console.log(err.error);
        return err;
    })
}
function getPrenom() {
    return request1({
        method: 'POST',
        url: `${__API_URL}/users/get`,
        auth: {
            'bearer': __token
        },
        json: true
    }).then(res => {
        prenom = res.firstName;
        console.log("Ma data", prenom);
        return document.getElementById('prenom').setAttribute('value', prenom)

    }).catch(err => {
        console.log(err.error);
        return err;
    })
}
function getTel() {
    return request1({
        method: 'POST',
        url: `${__API_URL}/users/get`,
        auth: {
            'bearer': __token
        },
        json: true
    }).then(res => {
        tel = res.phoneNumber;
        console.log("Ma data", tel);
        return document.getElementById('tel').setAttribute('value', tel)

    }).catch(err => {
        console.log(err.error);
        return err;
    })
}


ipcRenderer.send('get-api-cred')

ipcRenderer.on('get-api-cred-reply', (_ , res)=>{
    __API_URL = res.apiUrl;
    __token = res.token
    console.log(__API_URL, __token);
    // Appel des methodes
    getNom();
    getPrenom();
    getEmail();
    getTel();
})






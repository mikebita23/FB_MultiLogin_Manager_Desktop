const request1 = require('request-promise');
const API_URL1 = "http://api.infinite-scale.fr";
    const Auth1 = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRhbmlAZ21haWwuY29tIiwidXNlcklkIjoxMCwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTYxMTc2MzI0MCwiZXhwIjoxNjExNzY2ODQwfQ.ecb0QtKd-gRDXETk7mrnJ9xyFidRAnaPkpIGrVs2XJg"
}
var emailValue;
var prenom; 
var tel;
var  val

function getData(id, dataValue) {
    return request1({
        method: 'POST',
        url: `${API_URL1}/users/get`,
        auth: Auth1,
        json: true
    }).then(res => {
     val=res.dataValue;
        console.log("Ma data", val);
        const test = document.getElementById(id);
        console.log(res.lastName,' eeeeee')
        return test.setAttribute('value', res.dataValue)

    }).catch(err => {
        console.log(err.error);
        return err;
    })
}
function getEmail() {
    return request1({
        method: 'POST',
        url: `${API_URL1}/users/get`,
        auth: Auth1,
        json: true
    }).then(res => {
        emailValue=res.email;
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
        url: `${API_URL1}/users/get`,
        auth: Auth1,
        json: true
    }).then(res => {
        nom=res.lastName;
        console.log("Ma data",nom);
        return document.getElementById('nom').setAttribute('value', nom)

    }).catch(err => {
        console.log(err.error);
        return err;
    })
}
function getPrenom() {
    return request1({
        method: 'POST',
        url: `${API_URL1}/users/get`,
        auth: Auth1,
        json: true
    }).then(res => {
        prenom=res.firstName;
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
        url: `${API_URL1}/users/get`,
        auth: Auth1,
        json: true
    }).then(res => {
        tel=res.phoneNumber;
        console.log("Ma data", tel);
        return document.getElementById('tel').setAttribute('value', tel)

    }).catch(err => {
        console.log(err.error);
        return err;
    })
}

// Appel des methodes
 getNom();
 getPrenom();
 getEmail();
 getTel();
 
 

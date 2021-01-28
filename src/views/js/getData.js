const request1 = require('request-promise');
const API_URL1 = "http://api.infinite-scale.fr";
    const Auth1 = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa2lAbWlraS5jb20iLCJ1c2VySWQiOjExLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjExODIyMTgwLCJleHAiOjE2MTE4MjU3ODB9.IrrvTNTBRid6_PpwuFRta4ax6Qx5Hbp6HE_IuhlYEDI"
}
var emailValue;
var passValue;
var prenom; 
var tel;
var  val


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
function getMotPasse() {
    return request1({
        method: 'POST',
        url: `${API_URL1}/users/get`,
        auth: Auth1,
        json: true
    }).then(res => {
        passValue=res.passWord;
        console.log("Ma data", passValue);
        return document.getElementById('inputPassword').setAttribute('value', passValue)

    }).catch(err => {
        console.log(err.error);
        return err;
    })
}
 getEmail();
 getNom();
 getPrenom();
 getTel();
 //getMotPasse();
 

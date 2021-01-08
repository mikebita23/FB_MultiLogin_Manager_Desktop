
const { ipcRenderer } = require('electron');
const request = require('request-promise');
const API_URL = "https://gls-login.herokuapp.com";

var firstName = document.getElementById("prenom")
var lastName =document.getElementById("nom")
var email=  document.getElementById("inputEmail");
var  phoneNumber= document.getElementById("tel");
var  passWord= document.getElementById("inputPassword")
var  passWordConf= document.getElementById("inputConfirmPassword")

const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlicmFAaWJyYS5jb20iLCJ1c2VySWQiOjQxLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjEwMTEyNjE5LCJleHAiOjE2MTAxMTYyMTl9.aGOFh-59PpGHLPO61P8ThwADjdob9S6Y0r7f92iD-I0"
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
        if((!passWord.value && !passWordConf.value)  ){
           alert("Veuillez sair le mot de passe")
            

          }else if((passWord.value && passWordConf.value) &&(passWord.value != passWordConf.value)){
              alert("Les mots ne correspondent pas");
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
        window.location.href = './html/bienvenue.html'
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




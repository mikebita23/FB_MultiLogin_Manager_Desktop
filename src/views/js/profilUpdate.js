
const { ipcRenderer } = require('electron');
const request = require('request-promise');
const API_URL = "http://api.infinite-scale.fr";

var firstName = document.getElementById("prenom")
var lastName =document.getElementById("nom")
var email=  document.getElementById("inputEmail");
var  phoneNumber= document.getElementById("tel");
var  passWord= document.getElementById("inputPassword")
var  passWordConf= document.getElementById("inputConfirmPassword")

const Auth = {
    'bearer': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pa2lAbWlraS5jb20iLCJ1c2VySWQiOjExLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2MTE4MjE4OTksImV4cCI6MTYxMTgyNTQ5OX0.UPf3faaOKaXrpeb2_EQB6o971XYOft-9V7XzdkBXfko"
}


    $('#modification').on('click', _ =>{
        if((!passWord.value && !passWordConf.value)  ){
           alert("Veuillez sair le mot de passe")
            

          }
          else if((passWord.value && passWordConf.value) &&(passWord.value != passWordConf.value)){
              alert("Les mots de passe ne correspondent pas");
              $("#modification").prop("disabled", false);
          }
      else {     
            ipcRenderer.send('update-user', { 
                firstName: $(firstName).val(),
                lastName: $(lastName).val(),
                email: $(email).val(),
                phoneNumber: $(phoneNumber).val(),
                passWord: $(passWord).val()
                })//;     
                window.location.href = '../html/bienvenue.html'      
    }
    });

    
ipcRenderer.on('update-user-reply', (_, res) => {
    if (res) {
        console.log(res)
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




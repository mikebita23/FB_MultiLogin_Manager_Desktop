
const { ipcRenderer } = require('electron');
const request = require('request-promise');
const API_URL = "http://api.infinite-scale.fr";

var firstName = document.getElementById("prenom")
var lastName =document.getElementById("nom")
var email=  document.getElementById("inputEmail");
var  phoneNumber= document.getElementById("tel");
var  passWord= document.getElementById("inputPassword")
var  passWordConf= document.getElementById("inputConfirmPassword")


    $('#modification').on('click', _ =>{
        if((passWord.value && !passWordConf.value)  ){
            $("#inputConfirmPassword").next().text("Invalid format !")
            return
           }else if((!passWord.value && passWordConf.value)  ){
            $("#inputConfirmPassword").next().text("Invalid format !")
            return
           }else
        if((!passWord.value && !passWordConf.value)  ){
            $("#inputConfirmPassword").next().text("Invalid format !")
            return
          }
          else if((passWord.value && passWordConf.value) &&(passWord.value != passWordConf.value)){
            $("#inputConfirmPassword").next().text("Invalid format !")
            return
              
          }
      else {     
            ipcRenderer.send('update-user', { 
                firstName: $(firstName).val(),
                lastName: $(lastName).val(),
                email: $(email).val(),
                phoneNumber: $(phoneNumber).val(),
                passWord: $(passWord).val()
                })
                // //Redirige vers Bienvenue    
                window.location.href = '../html/bienvenue.html'  
    }
    });

    
ipcRenderer.on('update-user-reply', (_, res) => {
    if (res) {
      console.log(res)
    } else{
       console.log('un champ non saisi')  
    }
});



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




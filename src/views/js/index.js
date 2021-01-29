const { ipcRenderer } = require('electron');
window.$ = window.jQuery = require("../../../node_modules/jquery/dist/jquery");


const emailRgex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/

$('#submitButton').on('click', _ =>{

    let Cred = {
        email : $('#inputEmail').val().toLowerCase(),
        passWord : $('#inputPassword').val()
    }
    console.log(Cred);
    if(emailRgex.test(Cred.email) && Cred.passWord){
        $("#submitButton").prop("disabled", true);
        ipcRenderer.send('ask-for-auth', Cred)
    }else{
        console.log("invalide format");
        $("#connectionError").text("Invalide Format !")
    }

});

ipcRenderer.on('ask-for-auth-reply', (_, reply, error) => {
    if(!reply){
        $("#connectionError").text(error)
        $("#submitButton").prop("disabled", false);
    }else{
        window.location.href = '../html/bienvenue.html'
    }
})

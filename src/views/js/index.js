const { ipcRenderer } = require('electron');
const { BrowserWindow } = require('electron/main');
window.$ = window.jQuery = require("../vendor/jquery/jquery.min.js");



$('#submitButton').on('click', _ =>{
    console.log($('#inputEmail').val(), $('#inputPassword').val());
    $("#submitButton").prop("disabled", true);
    ipcRenderer.send('ask-for-auth', { email: $('#inputEmail').val(), passWord: $('#inputPassword').val() })
    window.location.href = '../html/bienvenue.html'
});

ipcRenderer.on('ask-for-auth-reply', (_, res) => {
    console.log(res);
    if (res) {
        console.log('3awdha lkarek ghadi nredericti');
        window.location.href = '../html/bienvenue.html'
    } else {
        $("#submitButton").prop("disabled", false);
    }
})


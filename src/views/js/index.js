<<<<<<< HEAD
const { ipcRenderer } = require('electron');
window.$ = window.jQuery = require("../vendor/jquery/jquery.min.js");

$('#submitButton').on('click', _ =>{
    console.log($('#inputEmail').val(), $('#inputPassword').val());
    $("#submitButton").prop("disabled", true);
    ipcRenderer.send('ask-for-auth', { email: $('#inputEmail').val(), passWord: $('#inputPassword').val() })
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
=======
// const { ipcRenderer } = require('electron');
// window.$ = window.jQuery = require("../vendor/jquery/jquery.min.js");

// $('#submitButton').on('click', _ =>{
//     console.log($('#inputEmail').val(), $('#inputPassword').val());
//     $("#submitButton").prop("disabled", true);
//     ipcRenderer.send('ask-for-auth', { email: $('#inputEmail').val(), passWord: $('#inputPassword').val() })
// });

// ipcRenderer.on('ask-for-auth-reply', (_, res) => {
//     window.location.href = '../html/bienvenue.html'
//     // console.log(res);
//     // if (res) {
//     //     console.log('3awdha lkarek ghadi nredericti');
//     //     window.location.href = '../html/bienvenue.html'
//     // } else {
//     //     $("#submitButton").prop("disabled", false);
//     // }
// })
>>>>>>> dev

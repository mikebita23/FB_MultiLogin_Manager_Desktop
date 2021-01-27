const {
    ipcRenderer
} = require('electron');
window.$ = window.jQuery = require("../vendor/jquery/jquery.min.js");

$('#submitButton').on('click', _ => {
    //console.log($('#inputEmail').val(), $('#inputPassword').val());
// onClick="document.location.href='bienvenue.html'"
    $("#submitButton").prop("disabled", true);
    ipcRenderer.send('ask-for-auth', {
        email: $('#inputEmail').val(),
        passWord: $('#inputPassword').val()
    })
});

ipcRenderer.on('ask-for-auth-reply', (_, res) => {
    //console.log(res);
    if (res) {
        console.log('3awdha lkarek ghadi nredericti');
        // onClick="document.location.href='bienvenue.html'"
        window.document.location.href = 'bienvenue.html'
    } else {
        $("#submitButton").prop("disabled", false);
    }
})







// // const {
// //     ipcRenderer
// // } = require('electron');
// // window.$ = window.jQuery = require("../vendor/jquery/jquery.min.js");

// // $('#submitButton').on('click', _ => {
// //     console.log($('#inputEmail').val(), $('#inputPassword').val());
// //     $("#submitButton").prop("disabled", true);
// //     ipcRenderer.send('ask-for-auth', {
// //         email: $('#inputEmail').val(),
// //         passWord: $('#inputPassword').val()
// //     })
// // });

// // ipcRenderer.on('ask-for-auth-reply', (_, res) => {
// //     console.log(res);
// //     if (res) {
// //         console.log('3awdha lkarek ghadi nredericti');
// //         window.location.href = '../html/bienvenue.html'
// //     } else {
// //         $("#submitButton").prop("disabled", false);
// //     }
// // })









// const {
//     ipcRenderer
// } = require('electron');



// $('#submitButton').on('click', _ => {
//     console.log($('#inputEmail').val(), $('#inputPassword').val())
//     ipcRenderer.send('add-user', {

//         email: $('#inputEmail').val(),

//         passWord: $('#inputPassword').val(),

//     })
// });



// ipcRenderer.on('add-user-reply', (_, res) => {
//     if (res) {
//         console.log(data)
//     } else {

//     }
// });






// $("#menu-toggle").on('click', function(e) {
//     e.preventDefault();
//     $("#wrapper").toggleClass("toggled");
// });



// // assuming $ is jQuery
// $(document).on('click', 'a[href^="http"]', function(event) {
//     event.preventDefault();
//     shell.openExternal(this.href);
// });







// $("#menu-toggle").on('click', function(e) {
//     e.preventDefault();
//     $("#wrapper").toggleClass("toggled");
// });

// const shell = require('electron').shell;

// // assuming $ is jQuery
// $(document).on('click', 'a[href^="http"]', function(event) {
//     event.preventDefault();
//     shell.openExternal(this.href);
// });
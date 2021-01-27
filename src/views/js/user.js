const {
    ipcRenderer
} = require('electron');



$('#save').on('click', _ => {
    console.log($('#prenom').val(), $('#nom').val())
    ipcRenderer.send('add-user', {
        firstName: $('#prenom').val(),
        lastName: $('#nom').val(),
        email: $('#inputEmail').val(),
        phoneNumber: "0749024336", //$('#tel').val(),
        passWord: $('#inputPassword').val(),
        role: "CLIENT",
        forfaitId: null
    }) //
});



ipcRenderer.on('add-user-reply', (_, res) => {
    if (res) {
        console.log(data)
    } else {

    }
});






$("#menu-toggle").on('click', function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});



// assuming $ is jQuery
$(document).on('click', 'a[href^="http"]', function(event) {
    event.preventDefault();
    shell.openExternal(this.href);
});







$("#menu-toggle").on('click', function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
});

const shell = require('electron').shell;

// assuming $ is jQuery
$(document).on('click', 'a[href^="http"]', function(event) {
    event.preventDefault();
    shell.openExternal(this.href);
});
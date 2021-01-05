
const { ipcRenderer } = require('electron');



    $('#modification').on('click', _ =>{
        $("#modification").prop("disabled", true);
        ipcRenderer.send('update-user', { 
            firstName: $('input[name=flexRadioDefault]:checked').val(),
            lastName: $('#areaContenu').val(),
            email: $('#areaContenu').val(),
            phoneNumber: $('#areaContenu').val(),
            passWord: $('#areaContenu').val(),
            role: $('#areaContenu').val(),
            forfaitId: $('#areaContenu').val(),
            
            })//
    });


ipcRenderer.on('update-user-reply', (_, res) => {
    if (res) {
        window.location.href = '../html/bienvenue.html'
    } else {
        $("#messageButton").prop("disabled", false);
    }
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




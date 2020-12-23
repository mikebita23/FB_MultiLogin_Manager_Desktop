const { ipcRenderer } = require('electron');
window.$ = window.jQuery = require("../vendor/jquery/jquery.min.js");

$('#messageButton').on('click', _ =>{
    console.log($('#areaContenu').val());
    $("#messageButton").prop("disabled", true);
    ipcRenderer.send('send-message', { Objet: $('').val(), Content: $('#areaContenu').val(), senderId: $('').val()})
});

ipcRenderer.on('send-message-reply', (_, res) => {
    
    console.log(res);
    if (res) {
        console.log('Redirection vers la page bienvenue');
        window.location.href = '../html/bienvenue.html'
    } else {
        $("#messageButton").prop("disabled", false);
    }
})

window.$ = window.jQuery = require("../vendor/jquery/jquery.min.js");
const { ipcRenderer } = require('electron');
var myApp = angular.module('myApp', []);
console.log('Bienvue.js ........')
myApp.controller('sessionController', function ($scope, $http) {
    $scope.openSession = id => {
        ipcRenderer.send('open-session', id);
    }
    $http({
        method: 'GET',
        url: './sessions.json'
    })
        .then(function successCallback(response) {
            $scope.sessions = response.data;
        }, function errorCallback(response) {
            console.log('Un problème est survenu.');
        });
});

//S'il est coché, on récupère la valeur du bouton radio.
var valeur;
if (document.getElementById('aide').checked) {
 valeur = document.getElementById('aide').value;
}
 if (document.getElementById('blocage').checked) {
    valeur = document.getElementById('blocage').value;
   }
$.when($.ready).then(_ =>{

    $('#messageButton').on('click', _ =>{
        console.log('Button cliquer Send')
        console.log( $( '#areaContenu').val(), valeur);
        $("#messageButton").prop("disabled", true);
        ipcRenderer.send('send-message', { Objet: valeur, Content: $('#areaContenu').val(), senderId: $('').val()})
    });
})

ipcRenderer.on('send-message-reply', (_, res) => {
    
    console.log(res);
    if (res) {
        console.log('Redirection vers la page bienvenue');
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
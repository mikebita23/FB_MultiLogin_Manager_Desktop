const { ipcRenderer } = require('electron');
window.$ = window.jQuery = require("../../../node_modules/jquery/dist/jquery");

var myApp = angular.module('myApp', []);



myApp.controller('sessionController', function ($scope, $http) {
    
    $scope.openSession = id => {
        ipcRenderer.send('open-session', id);
    }

    $scope.exportSession = id =>{
        ipcRenderer.send('export-session', id);
    }

    ipcRenderer.send('get-sessions')
    ipcRenderer.on('get-sessions-reply', ( _ , sessions) => {
        console.log("sessions : ", sessions);
    })
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

$.when($.ready).then(_ =>{ 
    $('#messageButton').on('click', _ =>{
        $("#messageButton").prop("disabled", true);
        ipcRenderer.send('send-message', { Object: $('input[name=flexRadioDefault]:checked').val(), Content: $('#areaContenu').val()})//
    });
}),

ipcRenderer.on('send-message-reply', (_, res) => {
    if (res) {
        console.log(res)
        window.location.href = '../html/bienvenue.html'
    } else {
        console.log('Message non envoyé')
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


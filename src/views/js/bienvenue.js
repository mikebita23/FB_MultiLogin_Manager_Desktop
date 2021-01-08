
const { ipcRenderer } = require('electron');
var myApp = angular.module('myApp', []);

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

$.when($.ready).then(_ =>{ 
    $('#messageButton').on('click', _ =>{
        $("#messageButton").prop("disabled", true);
        ipcRenderer.send('send-message', { Object: $('input[name=flexRadioDefault]:checked').val(), Content: $('#areaContenu').val()})//
    });
}),

ipcRenderer.on('send-message-reply', (_, res) => {
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




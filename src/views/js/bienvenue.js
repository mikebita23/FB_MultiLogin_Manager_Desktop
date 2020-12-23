window.$ = window.jQuery = require("../vendor/jquery/jquery.min.js");

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

const { ipcRenderer } = require('electron');


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
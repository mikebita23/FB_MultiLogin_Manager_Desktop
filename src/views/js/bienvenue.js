const { ipcRenderer } = require('electron');
window.$ = window.jQuery = require("../../../node_modules/jquery/dist/jquery");

var myApp = angular.module('myApp', []);

// ipcRenderer.send('get-sessions')

myApp.controller('sessionController',['$scope', function ($scope, $http) {
    

    // $scope.openForm = (action) => {
    //     var modalInstance = $modal.open({
    //         emplateUrl: '../html/modals/session.html',
    //         controller: ($scope, $modalInstance, uId) => {
    //             $scope.UserId = uId;
    //           },
    //         resolve: {
    //             uId: function () {
    //               return id;
    //             }
    //         }
    //     })
    // }

    // var ModalInstanceCtrl = function 

    $scope.openSession = id => {
        console.log(id);
        // ipcRenderer.send('open-session', id);
    }

    ipcRenderer.send('get-sessions')

    $scope.exportSession = id =>{
        ipcRenderer.send('export-session', id);
    }
        
    ipcRenderer.on('get-sessions-reply', ( _ , sessions) => {
        $scope.sessions = sessions
        $scope.$apply()
    })
    

    $scope.isAdmin = false
}]);

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



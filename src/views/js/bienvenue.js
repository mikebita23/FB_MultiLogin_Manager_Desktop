const { ipcRenderer, app } = require('electron');
window.$ = window.jQuery = require("../../../node_modules/jquery/dist/jquery");

var myApp = angular.module('myApp', ['ui.bootstrap']);

var sessionDialog = function () {
    this.visible = false;
}


sessionDialog.prototype.open = (session) => {
    this.session = session
    this.visible = true
}

sessionDialog.prototype.close = () => {
    this.visible = false;
}


// ipcRenderer.send('get-sessions')

// myApp.controller('sessionFormCtrl', ['$scope', '$uibModal', ($scope, $uibModal) => {
//     console.log('all good');
// } ])

myApp.controller('sessionController',['$scope', '$uibModal', function ($scope, $uibModal) {
    
    
    $scope.SessionDialog = new sessionDialog()


    // $scope.openForm = (action) => {
    //     var modalInstance = $uibModal.open({
    //         templateUrl: 'sessionForm.html',
    //         controller: 'sessionFormCtrl',
    //         resolve: {
    //             action: function () {
    //               return action;
    //             }
    //         }
    //     })
    // }

    // var ModalInstanceCtrl = function 

    $scope.openSession = id => {
        console.log(id);
        ipcRenderer.send('open-session', id);
    }

    ipcRenderer.send('get-sessions')

    $scope.exportSession = id =>{
        ipcRenderer.send('export-session', id);
    }
        
    ipcRenderer.on('get-sessions-reply', ( _ , sessions) => {
        $scope.sessions = sessions
        $scope.$apply()
    })
    

    $scope.isAdmin = true
}]);

myApp.directive('sessionDialog', [() =>{
    return {
        restrict: 'E',
        scope: {
          model: '=',
        },
        link: function(scope, element, attributes) {
          scope.$watch('model.visible', function(newValue) {
            var modalElement = element.find('.modal');
            modalElement.modal(newValue ? 'show' : 'hide');
          });
          
          element.on('shown.bs.modal', function() {
            scope.$apply(function() {
              scope.model.visible = true;
            });
          });
    
          element.on('hidden.bs.modal', function() {
            scope.$apply(function() {
              scope.model.visible = false;
            });
          });
          
        },
        templateUrl: '../html/modals/sessionDialog.html',
      };
}])


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



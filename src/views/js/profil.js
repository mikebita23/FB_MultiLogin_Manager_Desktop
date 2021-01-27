var application = angular.module('app', ['ngRoute']);

const API_URL_D = "http://api.infinite-scale.fr";
let token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF6ZXJ0eUBnbWFpbC5jb20iLCJ1c2VySWQiOjUsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2MTE3NDA2MTEsImV4cCI6MTYxMTc0NDIxMX0.4Ah_hnlccvT-6PhnWyZC8qCNXbPMcpqyXii7f5yiHYg'
 
//CREATION DE SERVICE UserCRUDService
application.service('UserCRUDService',['$http', function($http) {
  
    this.getUser = function getUser() {
        return $http({
            method : 'GET',
            url: `${API_URL}/users/get`,
            headers: {
                //'Authorization': `Bearer ${token_D}`  ,
                'Authorization': `Bearer ${token}` ,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
    };

//service UPDATE
this.updateUser = function updateUser(firstName,lastName,
    email,phoneNumber,passWord) {
    return $http({
        method : 'POST',
        url: `${API_URL}/users/edit`,
        headers: {
            //'Authorization': `Bearer ${token_D}`  ,
            'Authorization': `Bearer ${token}` ,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        data : {
            firstName:firstName,
            lastName:  lastName,
             email: email,
            phoneNumber: phoneNumber,
            passWord: passWord,
            role: "ADMIN",
            forfaitId: null
          }
    });
};
//service DELETE



    
}]);

///Creation de controller MsgReadCtrl

    // Creation de controller UserCRUDCtrl
    //USER

    application.controller('UserCRUDCtrl',['$scope','UserCRUDService',
    function ($scope,UserCRUDService) {
    
    
    
    //Mes Variables globales
    
        // //get-User
        //   $scope.getUser = function () {
        //       UserCRUDService.getUser()
        //         .then(function success(response) {
        //             $scope.user = response.data;
        //             $scope.message='User get';
        //             $scope.errorMessage = '';
        //             console.log( $scope.message);
                    
        //         },
        //         function error (response) {
        //             $scope.message = '';
        //             if (response.status === 404){
        //                 $scope.errorMessage = 'User not found!';
        //                 console.log( $scope.errorMessage);
        //             }
        //             else {
        //                 $scope.errorMessage = "Error getting user!";
        //                 console.log( $scope.errorMessage);
        //             }
        //         });
        //   };
        //   $scope.getAllUsers = function () {
        //     UserCRUDService.getAllUsers()
        //       .then(function success(response) {
        //           $scope.users = response.data;
        //           $scope.message='get All';
        //           $scope.errorMessage = '';
        //           console.log($scope.message)
        //       },
        //       function error (response) {
        //           $scope.message='';
        //           $scope.errorMessage = 'Error getting users!';
        //           console.log( $scope.errorMessage)
        //       });
        // }
          
    
    
    $scope.updateUser = function () {
        UserCRUDService.updateUser($scope.user.firstName,
            $scope.user.lastName,
            $scope.user.email,$scope.user.phoneNumber,
            $scope.user.passWord)
          .then(function success(response) {
              $scope.message = 'User data updated!';
              console.log( $scope.message)
              $scope.errorMessage = '';
          },
          function error(response) {
              $scope.errorMessage = 'Error updating user!';
              $scope.message = '';
              console.log( $scope.errorMessage)
          });
    }
 
    
    
    application.controller('userGetController', function getDataUsers($scope, UserCRUDService,$http) {
        UserCRUDService.getUser()
                .then(function success(response) {
                    $scope.user = response.data;
                    $scope.message='User get';
                    $scope.errorMessage = '';
                    console.log( $scope.message);
                    
                },
                function error (response) {
                    $scope.message = '';
                    if (response.status === 404){
                        $scope.errorMessage = 'User not found!';
                        console.log( $scope.errorMessage);
                    }
                    else {
                        $scope.errorMessage = "Error getting user!";
                        console.log( $scope.errorMessage);
                    }
                });
                
    }) 
}]);
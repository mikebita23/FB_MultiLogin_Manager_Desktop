

  

//Reuperation de data
var app = angular.module('MyApp', []);

  
    
app.controller('sessionController', function($scope, $http) {                    
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

app.controller('messageController', function($scope, $http) {  
    
    $scope.messages=null;
    $http({
            method: 'GET',
            url: 'https://gls-login.herokuapp.com/Msg/all'
        })
        .then(function successCallback(response) {
            $scope.messages = response.data;
        }, function errorCallback(response) {
            console.log('Un problème est survenu.');
        });       
});
//Test_Visuel_Affichage apres ajout

$scope.modeForm= function(){
    $scope.message={ objet:"", content:"", senderId:"" };
    $scope.mode=0;
}
//Ajout Message
app.controller('NewMessage', function($scope, $http){

    $scope.message={};
    $scope.message={ objet:"", contenu:""};
    $scope.mode=0;
console.log("YESY")
    $scope.resultant= function(){
        $http.post('https://gls-login.herokuapp.com/Msg/add', $scope.message)
        .successCallback(function(data){
            alert(data);
            $scope.message=data;
            $scope.mode=1;

        }).errorCallback(function(err){
            console.log(err);
        })
    }


});



var myApp = angular.module('MyApp', []);
myApp.controller('prospectController', function($scope, $http) {  
  $scope.pageMessage=null;                  
      $http({
              method: 'GET',
              url: 'http://localhost:3003/prospect/all'
          })
          .then(function successCallback(data) {
              $scope.pageMessage = data;
          }, function errorCallback(data) {
              console.log('Un problème est survenu.');
          });       
  });


//editable form of runner's information
(function() {
angular.module('editableform', [])
  .controller('FormController', ['$scope', function($scope) {
    $scope.user = { name: '', height: '', weight:'', age: ''};
  }]);
})


//weather

// angular.module('myApp',[]).controller("MyCtrl", MyCtrl);
//
// function MyCtrl($scope, $http) {
//
//     $scope.location = "";
//
//     $scope.findWeather = function(){
//     $http.get("http://api.openweathermap.org/data/2.5/weather?q=" + $scope.location).success(function(data){
//     $scope.weatherLocation = data.name;
//     $scope.windSpeed = data.wind.speed;
//     $scope.windDegree = data.wind.deg;
//
//     })
//     }
// }
//dropdown
var app = angular.module('myApp', []);
app.controller('dateCtrl', function($scope) {
    $scope.names = ["Date", "Date", "Date"];
});

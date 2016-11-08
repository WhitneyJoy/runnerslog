//editable form of runner's information
(function() {
angular.module('editableform', [])
  .controller('FormController', ['$scope', function($scope) {
    $scope.user = { name: '', height: '', weight:'', age: ''};
  }]);
})


//weather


//dropdown
// var app = angular.module('app', []);
// app.controller('myCtrl', function($scope) {
//     $scope.cars = {
//         car01 : {brand : "Ford", model : "Mustang", color : "red"},
//         car02 : {brand : "Fiat", model : "500", color : "white"},
//         car03 : {brand : "Volvo", model : "XC90", color : "black"}
//     }
// });

//runners json information to display
// myApp=angular.module('app', [])
// app.controller('FormController', function($scope,$http){
//   $http.get('runners.json').success(function($data){
//     $scope.myData = response;
//   });
// });

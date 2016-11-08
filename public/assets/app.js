

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
// app.controller('dateCtrl', function($scope) {
//     $scope.names = ["Date", "Date", "Date"];
// });

//runners json information to display
myApp=angular.module('app', [])
app.controller('FormController', function($scope,$http){
  $http.get('runners.json').success(function($data){
    $scope.myData = response;
  });
});

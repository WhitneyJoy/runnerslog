//weather API display
// angular.module('runnersLog', ['dark-sky']);
//setting up app and telling it to use dark sky
// app.config(['darkSkyProvider', function(darkSkyProvider) {
  //can inject methods in here
//     darkSkyProvider
//         .setApiKey('2b16fdb93fb0f82bded5f1bddf47c1c7');
// }]);
//configuring dark sky provider to do stuff (this is a directive service)
//interface to get to methods and functions that dark sky has

// darkSky.getCurrent(43.0667, 89.4000);

//make a controller and put functions inside of the controller
//spicy arguments example is what we need

// var mikeIsCool = function(lat, log) {
//   var response = darkSkyProvider.getCurrent(lat, log);
//   return response;
// }
//parse the information based on whatever they return you
//make a parser that gets data for get current and puts it in to an easier format
//div where the search and button is that will ahve the controller on it
//inside div is going to be input and button, underneath button will be another div or display
//input will have ng-modal on it (lat, lon)
//button will have ng-click with method and inside parenthese are going to be modal (lat, lon)

// myApp.controller('SpicyController', ['$scope', function($scope){
//   $scope.zipCode = '';
//   $scope.temp = '0';
//
//   $scope.mikeIsNotCool = function(zip) {
//     $scope.temp = '90';
//   };
// }]);

//editable form of runner's information
(function() {
angular.module('editableform', [])
  .controller('FormController', ['$scope', function($scope) {
    $scope.user = { name: '', height: '', weight:'', age: ''};
  }]);
})

//weather

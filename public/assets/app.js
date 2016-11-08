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
//chart
angular.module("app", ["chart.js"]).controller("LineCtrl", function ($scope) {

  $scope.labels = ["1 mile", "2 miles", "3 miles", "4 miles", "5 miles", "6 miles", "7 miles"];
  $scope.series = ['Miles', 'Time'];
  $scope.data = [
    [5, 3, 6, 4, 4.5, 3.6, 7],
    [30, 20, 45, 35, 38, 27, 57]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
  $scope.options = {
    scales: {
      yAxes: [
        {
          id: 'y-axis-1',
          type: 'linear',
          display: true,
          position: 'left'
        },
        {
          id: 'y-axis-2',
          type: 'linear',
          display: true,
          position: 'right'
        }
      ]
    }
  };
});

// angular.module('myModule', ['chart.js']);

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

//runners information chart compilation -->

// { meta { timestamp: date,
//          location: {
//            long: #;
//            lat: #}
//         },
// data: [{
//         timestamp: date,
//         location: {long: #, lat: #}
//         elevation: #,
//         heartrate: #,
//       },
//       ...include more objects and use for loop to create a new timestamp every ten seconds (i * 10)
//     ],
// runner: {
//   dob:
//   height:
//   weight:
// }
// }

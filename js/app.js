"use strict"
angular.module("myApp", ["ng-fusioncharts"])

app.controller('MyController', function($scope) {
    //Define the `myDataSource` scope variable.
    $scope.myDataSource = {
        chart: {
            //Define the chart attributes.
        },
        data: [
            //Define the data labels and data values for the data plots.
        ]
    };
});


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
//       ...include more objects and use for loop to create a new timestamp every ten seconds
//     ],
// runner: {
//   dob:
//   height:
//   weight:
// }
// }

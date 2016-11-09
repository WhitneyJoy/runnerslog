
//dropdown
var app = angular.module('app', ["chart.js"]);

//runners information
// var runners = JSON.stringify(runners);
// document.body.innerHTML = runners;


//chart
app.controller("LineCtrl", function ($scope) {

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

//google maps API
function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

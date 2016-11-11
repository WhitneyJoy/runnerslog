var app = angular.module('app', ["chart.js"]);

// printing JSON runner information
app.controller('RunnerCtrl', function($scope, $http) {
  $http.get('runners.json').success(function(data) {
    $scope.name = data;
  });
});

//printin JSON run information
app.controller('RunCtrl', function($scope, $http) {
  $http.get('runs.json').success(function(data) {
    $scope.data = data;
  });
});



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

//weather
app.controller('DemoCtrl', function($http) {
  var wc = this;
  var URL = 'http://api.openweathermap.org/data/2.5/forecast/daily';
  var request = {
    method: 'GET',
    url: URL,
    params: {
       q: 'Milwaukee',
      mode: 'json',
      appid: '6d534f8ba8079ed126e70eebeaab328b'
    }
  };

  $http(request)
    .then(function(response) {
      wc.data = response.data;
    }).
    catch(function(response) {
      wc.data = response.data;
    });
});

//printing phones to the page


//google maps API and key found at https://console.developers.google.com/apis/credentials?project=valid-pagoda-149019
function initMap() {
        var uluru = {lat:43.0731, lng:89.4012};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

app.filter('prettyJSON', function () {
  function prettyPrintJson(json) {
      return JSON ? JSON.stringify(json, null, '  ') : 'your browser doesnt support JSON so cant pretty print';
  }
      return prettyPrintJson;
});

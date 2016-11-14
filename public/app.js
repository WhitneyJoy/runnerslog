var app = angular.module('app', ["chart.js"]);

// printing JSON runner information
// app.controller('RunnerCtrl', function($scope, $http) {
//   $http({
//     method:'GET',
//     url:'runners.json'
//   }).then(function successCallback(response){
//     $scope.name = response.data[0].name;
//     $scope.age = response.data[0].age;
//     $scope.height = response.data[0].height;
//     $scope.weight = response.data[0].weight;
//   }, function errorCallback(response){
//     console.log('An error occurred.');
//   })
// });

app.controller('UserInputCtrl', function($scope, $http, $httpParamSerializerJQLike){
    $scope.userName = "";
    $scope.userAge = "";
    $scope.userHeight = "";
    $scope.userWeight = "";
    $scope.changeUserData = function() {
      var userData = {
          json: JSON.stringify({
          name: $scope.userName,
          age: $scope.userAge,
          height: $scope.userHeight,
          weight: $scope.userWeight
        })};
      $http({
        url: '/runners.json',
        method: 'POST',
        data: $httpParamSerializerJQLike(userData),
      }).then(function successCallback(response, status){
        $scope.name = data[0].name;
        $scope.age = data[0].age;
        $scope.height = data[0].height;
        $scope.weight = data[0].weight;
      })
    }
})
//printin JSON run information
app.controller('RunCtrl', function($scope, $http) {
  $http.get('runs.json').success(function(data) {
    $scope.runOneDate = data[0].date;
    $scope.runTwoDate = data[1].date;
    $scope.runThreeDate = data[2].date;
    $scope.runFourDate = data[3].date;
    $scope.runFiveDate = data[4].date;
    $scope.runOneTime = data[0].run[5].timesix;
    $scope.runOneDistance = data[0].run[5].markersix;
    $scope.runOneBpm = data[0].run[5].bpmsix;
    $scope.runTwoTime = data[1].run[4].timefive;
    $scope.runTwoDistance = data[1].run[4].markerfive;
    $scope.runTwoBpm = data[1].run[4].bpmfive;
    $scope.runThreeTime = data[2].run[3].timefour;
    $scope.runThreeDistance = data[2].run[3].markerfour;
    $scope.runThreeBpm = data[2].run[3].bpmfour;
    $scope.runFourTime = data[3].run[5].timethree;
    $scope.runFourDistance = data[3].run[5].markerthree;
    $scope.runFourBpm = data[3].run[5].bpmthree;
    $scope.runFiveTime = data[4].run[6].timetwo;
    $scope.runFiveDistance = data[4].run[6].markertwo;
    $scope.runFiveBpm = data[4].run[6].bpmtwo;
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
app.controller('DemoCtrl', function($http, $scope) {
  $scope.searchCity = function(){
    var city = $scope.usersCity;
    var URL = 'http://api.openweathermap.org/data/2.5/forecast?q=' + city + ',us&units=imperial';
    var request = {
      method: 'GET',
      url: URL,
      params: {
        appid: '6d534f8ba8079ed126e70eebeaab328b'
      }
    };

    $http(request)
      .then(function(response) {
         console.log(response.data);
         $scope.city = response.data.city.name;
         $scope.dayOneTemp = response.data.list[4].main.temp;
         $scope.dayTwoTemp = response.data.list[12].main.temp;
         $scope.dayThreeTemp = response.data.list[20].main.temp;
         $scope.dayFourTemp = response.data.list[28].main.temp;
         $scope.dayFiveTemp = response.data.list[36].main.temp;
         $scope.dayOneForecast = response.data.list[4].weather[0].description;
         $scope.dayTwoForecast = response.data.list[12].weather[0].description;
         $scope.dayThreeForecast = response.data.list[20].weather[0].description;
         $scope.dayFourForecast = response.data.list[28].weather[0].description;
         $scope.dayFiveForecast = response.data.list[36].weather[0].description;
      }).
      catch(function(response) {
        // wc.data = response.data;
      });
  }
});


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

//pretty printing JSON
app.filter('prettyJSON', function () {
  function prettyPrintJson(json) {
      return JSON ? JSON.stringify(json, null, '  ') : 'your browser doesnt support JSON so cant pretty print';
  }
      return prettyPrintJson;
});

var request = require('request');
var app = express()

app.get('/getWeather', function (req,res) {
  var request = require('request');
request('http://api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid=6d534f8ba8079ed126e70eebeaab328b', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    req.body
  } else {
    console.log(error);
  }
});
})

// app.get("/weather...")
// var data,
// request(...),
// resp.send(data),
// }


var fs = require('fs');
fs
var obj = require("runners.json");
//editable runner content
// var config = require('./runners.json');
// console.log(config.firstName + ' ' + config.lastName);


// function getWeather() {
//
// api.openweathermap.org/data/2.5/weather?zip=94040,us=6d534f8ba8079ed126e70eebeaab328b
//
// };

//express on the back end and display on the front end with AngularJS

//use model to bind data and explain it (editable)

//use fs and store runner information in JSON file (10-12 lines of code to do that)
//download fs
//reading and writing to JSON through Express

//2 JSON files one for runs and one for runner
//won't have to update the runs, but will update runner information

//runner.JSON will use fs to write to it
//won't need fs to write to the runs (fetch using request)

//runner is an object in JSON file with all the attributes
//fs load the file in to your application (now you have that object)
//use write file to write it back
//runs will have
//ng-model for the graph- pick a new run to display new data on the SAME graph
//array of data points for each run that need to match up with each openweathermap
//array of objects with time, distance BPM for the runs (data points)
//search for weather API
//fs for runner and request (download) for runs
//dropdown should use ng-modal to make it dynamic

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

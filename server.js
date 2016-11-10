var request = require('request');
var express = require("express");
var app = express();
var fs = require('fs');
var http = require('http');

app.use(express.static('public'));

var runs = require("./runs.json");
console.log(runs);

var runners = require("./runners.json");
console.log(runners);



// var fs = require('fs');
// fs
// var obj = require("runners.json");
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


app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
})

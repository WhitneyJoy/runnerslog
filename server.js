var request = require('request');
var express = require("express");
var app = express();
var fs = require('fs');
var http = require('http');

app.use(express.static('public'));



// var runs = require("./runs.json");
// console.log(runs);

// var runners = require("./runners.json");
// console.log(runners);


// var mysql = require('mysql');
//
// var connection = mysql.createConnection({
//      host: 'localhost'
// });
// connection.connect();
//
// app.post('/api/weather', function(req, res, next){
//    var cope = req.body.params;
//    var query = connection.query('insert into cope set ?', cope, function(err, result) {
//      if (err) {
//        console.error(err);
//        return res.send(err);
//      } else {
//        return res.send('Ok');
//      }
// });

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


app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
})

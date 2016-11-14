var request = require('request');
var express = require("express");
var app = express();
var fs = require('fs');
var http = require('http');

app.use(express.static('public'));




app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
})

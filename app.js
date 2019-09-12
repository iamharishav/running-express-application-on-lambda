const express = require('express');
var app = express();
app.get('/', function(req, res, next){
  res.status(200).json({message: " Welcome Express App: Running on AWS Lambda "});
});
module.exports = app;
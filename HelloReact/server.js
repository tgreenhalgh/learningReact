/* global require, __dirname */
var express = require('express');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(3000, function() {
  console.log('Express server is running on port 3000');
});

var express = require('express');
var app = express();

var inicio = require('./index');
var opiniones = require('./opiniones');


// API access points:
app.get('/', inicio);
app.get('/guarda_opinion', opiniones);

module.exports = app;
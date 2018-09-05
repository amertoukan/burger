require('dotenv');
require('./config/orm.js');
var express = require ('express');
var app = express(); 
var PORT = process.env.PORT || 8000;
var bodyParser = require('body-parser');

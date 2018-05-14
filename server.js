var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');

var server = app.listen(8080, listening);

function listening(){
	console.log("Listening on Port 8080")
}

app.use(express.static('public'));
app.use(morgan('dev')); //morgan logs to the console everytime a user send a request
app.use(bodyParser.urlencoded({extended: true}));
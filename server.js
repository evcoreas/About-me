var express = require('express');
var app = express();
var bodyParser = require('body-parser');


//=================
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

//======sever
app.listen(8080, listening);
function listening(){
	console.log("Listening on Port 8080")
}
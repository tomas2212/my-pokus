/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello New York\n');
}).listen(3001);
console.log('Server running at http://localhost:3001/');
*/

var express = require('express');
var fs = require('fs');
var app = express();
app.get('/', function(req, res) {
	
	res.send('Hello Seattle and Pobrezie Slonoviny \n');
  
});

app.get('/abc', function(req, res) {
	
	fs.readFile(__dirname + '/abc.json', function (err, data) {
	if (err) {
		throw err; 
	}
	//console.log(data.toString());
	res.send(data.toString());
	});  
});

app.get('/asdf', function(req, res) {
	
	fs.readFile(__dirname + '/asdf.json', function (err, data) {
	if (err) {
		throw err; 
	}
	//console.log(data.toString());
	res.send(data.toString());
	});  
});


app.listen(3001);
console.log('Listening on port 3001...');
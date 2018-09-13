//Lesson 16 node.js
//Pipes Order: Read Stream, buffer, read stream, write stream 

var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');
    var myWriteStream = fs.createWriteStream(__dirname + '/writeMe.txt');

myReadStream.pipe(myWriteStream);

});

server.listen(3000, '127.0.0.1');
console.log('yo dawgs, now listening to port 3000');
//Lesson 14 Node.js 
//Streams:
//Writable streams: allow node js to write data to a strem 
//readable streams: allow node js to read data from a stream 
//duplex: can read and write to a stream

var http = require('http');
var fs = require('fs');


var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf8');

myReadStream.on('data', function(chunk){
    console.log('new chunk received:');
    console.log(chunk);
});
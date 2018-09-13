//Lesson 12 Node.js
//Creating a server 

var http = require('http');

var server = http.createServer(function(req, res){
    console.log('request was made: ' + req.url)  //saves the url of the request 
    res.writeHead(200, {'Content_Type': 'text/plain'})  //so the browswer knows what to do with its content
    res.end('Hey ninjas');
}); 


server.listen(3000, '127.0.0.1'); //the local server/ip address
console.log('yo dawgs, now listening to port 3000');
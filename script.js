//Lesson 20 node.js
//The Node Package Manager (npm)
//Helps to create web applciations in node, much faster thatn lesson 19 
//3rd party packages on modules 
//You load the package, and use its functionality 


var http = require('http');
var fs = require('fs');


var server = http.createServer(function(req, res) {
    console.log('request was made: ' + req.url);

     if(req.url === '/home' || req.url === '/') {
         res.writeHead(200, {'Content-Type' : 'text/html'});
         fs.createReadStream(__dirname + '/index.html').pipe(res);   //The homepage is grabbing the index file that you made 
     } else if (req.url === '/contact'){
         res.writeHead(200, {'Content-Type' : 'text/html'});
         fs.createReadStream(__dirname + '/index.html').pipe(res);  
     } else if (req.url === '/api/ninjas'){
         var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}]; //send this json data to the browser
         res.writeHead(200, {'Content-Type': 'application/json'});
         res.end(JSON.stringify(ninjas));
     } else { //creating a catch all 404 page if data is not found 
              res.writeHead(404, {'Content-Type' : 'text/html'});
         fs.createReadStream(__dirname + '/404.html').pipe(res);  
     }

    });
    


server.listen(process.env.PORT, process.env.IP, 3000); // A request is made to the port type set PORT=3000 and then node script.js 
console.log('yo dawgs, now listening to port 3000');

//https://<workspacename>-<username>.c9users.io
// https://github-surazova.c9users.io
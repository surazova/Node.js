//Lesson 9 node.js 
//Reading and Writing Files 

var fs = require('fs');

var readMe = fs.readFileSync('readME.txt', 'utf8' );  //This is blocking code-it will read first before starting anything else. When you read a file, it is in binary 
//utf8 changes the code to binary, so the computer can read it
console.log(readMe); //You are retrieving the variable, so that you can read it 


//second method: 
var readMe = fs.readFileSync('readME.txt', 'utf8');
fs.writeFileSync('writeME.txt', readMe);

//third method: 
fs.readFile('readME.txt', 'utf8', function(err, data){  //This is better because it is non-blocking 
    console.log(data);
});
    
    console.log('test');  //Test will run first, because non-blocking (or asynchronous) good for if you have mutlipel requests on your website
    
    
//Writing, non-blocking: 
fs.readFile('readME.txt', 'utf8', function(err, data){
    fs.writeFile('writeME.txt', data);
});


//Lesson 10 Node.js 
//Creating and moving directories 

var fs = require('fs');

//fs.unlink('writeME.txt'); //deletes the file 


//creating directories 

//synchronously 

//fs.mkdirSync('stuffB');  //creates the directory

//fs.rmdirSync('stuffB'); //deletes the directory

//asynchronously 
//fs.mkdir('stuffB', function(){
//    fs.readFile('readME.txt', 'utf8', function(err, data) {
//        fs.writeFile('./stuffB/writeME.txt', data);
//    });
//});   //when you push asynchronously, you need a function 


fs.unlink('./stuffB/writeME.txt', function(){
    fs.rmdir('stuffB');

});

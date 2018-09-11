//Lesson 4 of Node.js 
//The global object is the window object in the browser 
console.log('hello');
//types node script to run the application 
setTimeout(function(){
    console.log('3 seconds have passed');
    
}, 3000);
//Save, run, and then type "node script"

var time = 0;
var timer = setInterval(function(){
    time += 2;
    console.log(time + '2 seconds have passed');
    if (time > 5){
        clearInterval(timer); //This sets when the time is going to clear 
    }
    
}, 2000);
//Save, run, and then type "node script"
//"click COMMAND + C" to stop the application from running 

console.log(__dirname); //tells you which directory you are in 
console.log(__filename); //tells you the filename that you are in 
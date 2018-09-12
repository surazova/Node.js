//Lesson 7 node.js 
//Modeule patterns 
//There are three module patterns that you can use to export modules and run them 


var stuff = require('./stuff');  //changed the name of the file to "stuff"

console.log(stuff.counter(['shawn', 'crystal', 'ryu']));
console.log(stuff.adder(5, 6));
console.log(stuff.adder(stuff.pi, 5)); //you need to access pi, so you write stuff.pi
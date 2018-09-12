var counter = function(arr) {
    return 'There are ' + arr.length + " elements in this array";
};


var adder = function(a, b) {
    return `The sum of the two numbers is ${a+b}`; //uses back key, without concatinating (called a template string) 
};

var pi = 3.142
module.exports = counter; //the counter module will be available in script.js


module.exports.counter = counter; //the counter module will be available in script.js
module.exports.adder = adder; 
module.exports.pi = pi; 





//The above is the complicated way of doing this, you can also export like so: 
module.exports.counter = function(arr) {
    return 'There are ' + arr.length + " elements in this array";
};


module.exports.adder = function(a, b) {
    return `The sum of the two numbers is ${a+b}`; //uses back key, without concatinating (called a template string) 
};

module.exports.pi = 3.142
module.exports = counter; //the counter module will be available in script.js


//3rd way of exporting: 
var counter = function(arr) {
    return 'There are ' + arr.length + " elements in this array";
};


var adder = function(a, b) {
    return `The sum of the two numbers is ${a+b}`; //uses back key, without concatinating (called a template string) 
};

var pi = 3.142
module.exports = counter; //the counter module will be available in script.js


module.exports = {  //called literal notation 
    counter: counter; 
    adder: adder;
    pi: pi;
};
//Lesson 6 Node.js
//Modules and Require()
//You split your code up into logical modules 
//A module is another javascript file 


var counter = function(arr) {
    return 'There are ' + arr.length + " elements in this array";
};

module.exports = counter; //the counter module will be available in script.js



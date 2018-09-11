//Lesson 5 Node.js
//Modules

//normal function statement 

function sayHi(){
    console.log('Hi');
}

sayHi(); //invokes the function 

//Different:

function callFunction(fun) {
    fun();
}

//function expression 
var sayBye = function() {
    console.log('bye');
};

callFunction(sayBye);
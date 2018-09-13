//Lesson 8 node.js 
//The Event module 

var events = require('events');  //require a core module, you only need the name of it. Whatever is returned, will be stored in events

//you can create a custom emmiter 

var myEmitter = new events.EventEmitter(); //EventEmitter is capital!

myEmitter.on('someEvent', function(mssg){
    console.log(mssg);
});

myEmitter.emit('someEvent', 'the event was emitted');


//second example:

var events = require('events');

var util = require('util');


var Person = function(name) {
    this.name = name; 
};

util.inherits(Person, events.EventEmitter);

var james = new Person ('james');
var mary = new Person('mary');
var bob = new Person('Bob');
var people = [james, mary, bob];

people.forEach(function(person){
   person.on('speak', function(mssg){
       console.log(person.name + ' said: ' + mssg);
   }); 
});

james.emit('speak', 'hey dudes');
mary.emit('speak', 'wassap');

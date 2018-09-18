//Lesson 36 node.js 
//Crate and connect to NoSQL database
//install mongoose 

var express = require('express');
var todoController = require('./Controllers/todoController');

var app = express();

//set up template engine
app.set('view engine', 'ejs');


//static files 
app.use('/assets', express.static('assets'));   //middleware


//fire controllers 
todoController(app);

//listen to port 
app.listen(process.env.PORT, process.env.IP, 3000);
console.log('You are listening to port 3000');

// MVC structure:
//Model: data (todo, users)
    //Controller: Controls the app (sections, todoController, userController)
    //View: Template files (todo.ejs, account, ejs)
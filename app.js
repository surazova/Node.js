//Lesson 32 node.js
//Express module

var express = require('express');
var todoController = require('./controllers/todoController')

var app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files 
app.use(express.static('./todo-list'));


//fire controllers 
todoController();

//listen to port 
app.listen(process.env.PORT, process.env.IP, 3000);
console.log('You are listening to port 3000');

// MVC structure:
//Model: data (todo, users)
    //Controller: Controls the app (sections, todoController, userController)
    //View: Template files (todo.ejs, account, ejs)
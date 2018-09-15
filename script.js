//Lesson 24 node.js 
//ROute Parameters


var express = require('express');

var app = express();
app.get('/', function(req,res){
   res.send('this is the homepage'); //express figures out the content type automatically 
});
app.get('/contact', function(req,res){
   res.send('this is the contact page'); 
});

app.get('/profile/:id', function(req,res){  //you can access this parameter id is a number 
    res.send('You requested to see a profile with the id of ' + req.params.id);
});


app.listen(process.env.PORT, process.env.IP, 3000);





//HTTP Methods: types of requests that you can make. They each have specific info attached to them 
//GET -app.get('route', fn)
//POST -app.post('route', fn)
//DELETE -app.delete('route', fn)
//PUT


//the site: https://github-surazova.c9users.io/
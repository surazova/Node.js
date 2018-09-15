//Lesson 27 node.js 
//Partial Views 
//Make a partial template for the navigation 

var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res){
   res.render('index'); //change send file to render because you already created the partial views
});
app.get('/contact', function(req,res){
   res.render('contact');
});

app.get('/profile/:name', function(req,res){  //you can access this parameter id is a number 
var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
res.render('profile', {person: req.params.name, data: data});
});


app.listen(process.env.PORT, process.env.IP, 3000);





//HTTP Methods: types of requests that you can make. They each have specific info attached to them 
//GET -app.get('route', fn)
//POST -app.post('route', fn)
//DELETE -app.delete('route', fn)
//PUT


//the site: https://github-surazova.c9users.io/
//to restartd nodemon, type 'rs'
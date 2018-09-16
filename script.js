//Lesson 29 node.js 
//Query Strings 
//Additional data added to HTTP requests 

var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets')); //exoress knows to use the file that is inside assets 

app.get('/', function(req,res){
   res.render('index'); //change send file to render because you already created the partial views
});

app.get('/contact', function(req,res){
  //type: https://github-surazova.c9users.io/contact?dept=marketing&person=joe (into the browser)
   res.render('contact', {qs: req.query});
});

app.get('/profile/:name', function(req,res){  
var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
res.render('profile', {person: req.params.name, data: data});
});


app.listen(process.env.PORT, process.env.IP, 3000);




//the site: https://github-surazova.c9users.io/
//to restartd nodemon, type 'rs'
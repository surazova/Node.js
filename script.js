//Lesson 31 node.js 
//Making a To-do app (part 1) 


var express = require('express');
var bodyParser = require('body-parser'); //Added the module in 
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false }) //middleware


app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));  

app.get('/', function(req,res){
   res.render('index'); 
});

app.get('/contact', function(req,res){
  //type: https://github-surazova.c9users.io/contact?dept=marketing&person=joe (into the browser)
   res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser, function(req,res){ //Added the post request 
console.log(req.body); //the data that you submit in the form is logged into the console
   res.render('contact-success', {data: req.body});  
});


app.get('/profile/:name', function(req,res){  
var data = {age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
res.render('profile', {person: req.params.name, data: data});
});


app.listen(process.env.PORT, process.env.IP, 3000);




//the site: https://github-surazova.c9users.io/
//to restartd nodemon, type 'rs'

//install body-parser middleware 
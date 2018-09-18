var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to mlab database, add quotes and the username and password
mongoose.connect('mongodb://test:testing1@ds261342.mlab.com:61342/todo', { useNewUrlParser: true });

//create a schema (blueprint for your data)
var todoSchema = new mongoose.Schema({
    item: String     
    
});

//create a model (or collection) to base the todo out of
var Todo = mongoose.model('Todo', todoSchema);

//var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false }); //middleware for post request

module.exports = function(app){ 
    
    
app.get('/todo', function(req,res){
    //get data from mongodb and pass it to the view 
    Todo.find({}, function(err, data){  //retrieves all the items in the todo collection
        if (err) throw err;
        res.render('todo', {todos: data});
    }); 
});


app.post('/todo', urlencodedParser, function(req,res){
    //get data from the view and add it to mongodb
    var newTodo = Todo(req.body).save(function(err, data){
        if (err) throw err;
        res.json(data);
    });
});


app.delete('/todo/:item', function(req, res){
    //delete the requested item from mongodb
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove(function(err, data){
       if (err) throw err;
       res.json(data);
    }); //replacing hyphens with a space and then removes them. 
});

};



//future:
//mongodb
//MEAN stack app (mongoDB, express, angular, node)
//Unit testing with Mocha
//websockets
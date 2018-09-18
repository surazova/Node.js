var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to mlab database, add quotes and the username and password
mongoose.connect('mongodb://test:testing1@ds261342.mlab.com:61342/todo', { useNewUrlParser: true });

//create a schema (blueprint for your data)
var todoSchema = new mongoose.Schema({
    item: String     
    
});

//create a model to base the todo out of
var Todo = mongoose.model('Todo', todoSchema);
var itemOne = Todo({item: 'buy flowers'}).save(function(err){
    if (err) throw err;
    console.log('item saved');
});


var data = [{item: 'get milk'}, {item: 'walk dog'}, {item: 'kick some coding ass'}];
var urlencodedParser = bodyParser.urlencoded({ extended: false }); //middleware for post request

module.exports = function(app){ 
    
    
app.get('/todo', function(req,res){
    res.render('todo', {todos: data});
});

app.post('/todo', urlencodedParser, function(req,res){
    data.push(req.body); //new item added
    res.json(data); //data sent back as json
    
});

app.delete('/todo/:item', function(req, res){
    data = data.filter(function(todo){
        return todo.item.replace(/ /g, '-') !== req.params.item; //global request not equal to request.params
    //if true-remains in the array. if the item is false, it comes out of the array
    //replace any spaces with hyphens  
    });
    res.json(data);
});
};
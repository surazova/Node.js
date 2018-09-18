//using body-parser
var bodyParser = require('body-parser');

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
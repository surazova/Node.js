module.exports = function(app){ //sets up the request handlers 
    
    
app.get('/todo', function(req,res){
    res.render('todo');
    
});

app.post('/todo', function(req,res){
    
    
});

app.delete('/todo', function(req, res){
    
    
});
};
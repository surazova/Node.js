 /* global $ */
//controls the ajax request
$(document).ready(function(){

  $('form').on('submit', function(){ //when you submit

      var item = $('form input');
      var todo = {item: item.val()}; //create a todo

      $.ajax({    //jquery axaj request to server 
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){  //updated data
          //do something with the data via front-end framework
          location.reload();  //page is reloaded and refelcted on the html
        }
      });

      return false;

  });


//delete request 
  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-"); //replace spaces with hyphens
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item, //the url you are deleting to
        success: function(data){
          //do something with the data via front-end framework
          location.reload();   //new items
        }
      });
  });

});
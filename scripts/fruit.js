console.log('sourced');

var inventory = [];
var fruit = {
  name:'',
  price:''
};

$(document).ready(function (){
  $('#orange').on('click', function(){
    console.log('clicked orange');
    createFruit();

  });
  console.log(fruit);
});

var createFruit = function(){
  console.log('in createFruit');
  fruit.name = $(this).id;
};

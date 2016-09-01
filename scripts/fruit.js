console.log('sourced');

var inventory = [];
var fruit = {
  name: '',
  price: 0,
};

var userMoney = 100;

function randomNum(min, max) {
  return Number((Math.random() * (max - min) + min).toFixed(2));
}

var orange = {
  name: 'orange',
  price: randomNum(0.5, 9.99),
};

var apple = {
  name: 'apple',
  price: randomNum(0.5, 9.99),
};

var banana = {
  name: 'banana',
  price: randomNum(0.5, 9.99),
};

var grape = {
  name: 'grape',
  price: randomNum(0.5, 9.99),
};

var arrayOfPrices = [orange, apple, banana, grape];

$(document).ready(function (){
  setInterval(function(){
    for (var i = 0; i < arrayOfPrices.length; i++) {
      if(arrayOfPrices[i].price >= 9.49) {
        arrayOfPrices[i].price -= randomNum(0.01, 0.5);
      } else if(arrayOfPrices[i].price <= 1) {
        arrayOfPrices[i].price += randomNum(0.01, 0.5);
      } else {
        arrayOfPrices[i].price += (-0.5, 0.5);
      }
    }
    console.log(arrayOfPrices);
  }, 15000);
  console.log(orange);

  $('.buyButton').on('click', function(){
    console.log('clicked button');

    var fruitName = $(this).data('name');
    fruit.name = fruitName;
    // fruit.price = fruitName.price;
    loopOfPrices();
    inventory.push(fruit);
    console.log(inventory);
  });
});

var loopOfPrices = function(){
  console.log('in loop price');
  for (var i = 0; i < arrayOfPrices.length; i++) {
    if(arrayOfPrices[i].name === $('.buyButton').data('name'))
      fruit.price = arrayOfPrices[i].price;
      return fruit.price;
  }
};

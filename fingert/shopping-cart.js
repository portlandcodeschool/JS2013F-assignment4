

var description = " ";
var count = 0;
var price = 0;
var tally = " ";

var array = [item1 = [description, count, price], 
  item2 = [description, count, price], 
  item3 = [description, count, price], 
  item4 = [description, count, price]];


var shoppingCart = {
  
  add: function(description, count, price) {
  	for (var i = 0; i<4; i++){
  		item1.push(1);
  	}
  
  //this.count = stuff.count;
  //this.price = stuff.price;
},

  list: function(stuff) {
  	return this.i + " X " + tally;
  },

  total: function (stuff) {
  	return array;
  },
  remove: function (stuff) {
    shoppingCart.array;
  }
};

item1 = shoppingCart.add({description: "Huggies Little Snugglers Diapers",
                              count: 4,
                              price: 19.77});

item2 = shoppingCart.add({description: "Tylenol Extra Strength Acetaminophen",
                              count: 2,
                              price: 22.38});

item3 = shoppingCart.add({description: "Flents Quiet Please Foam Ear Plugs",
                              count: 10,
                              price: 11.50});

item4 = shoppingCart.add({description: "Monsters Eat Whiny Children",
                              count: 1,
                              price: 11.07});

shoppingCart.remove(item3, 6);
shoppingCart.remove(item4, 1);

console.log(shoppingCart.list());

/* Should print:
[
'4 X Huggies Little Snugglers Diapers',
'2 X Tylenol Extra Strength Acetaminophen',
'4 X Flents Quiet Please Foam Ear Plugs',
]
*/

console.log(shoppingCart.total());

// Should print: 169.84
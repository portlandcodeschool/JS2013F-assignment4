


var array = ["item1", "item2", "item3", "item4"];


var shoppingCart = {
  
  add: function(item, description, count, price) {
    var description = " ";
    count = " ";
    price =  " ";
    array.forEach(function(description, count, price) {
      array[0] += this.description;
    });
 
  },
  remove: function (item, removeNumber) {
    shoppingCart.array;
  },

  list: function(description, count) {
  	return this.count + " X " + this.array;
  },

  total: function (count) {
  	return this.count;
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
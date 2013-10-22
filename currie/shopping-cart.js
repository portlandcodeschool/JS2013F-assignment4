var shoppingCart = {
  add: function(itemObject) {
  	this.item = itemObject;
  },
  // remove: function(itemObject, quantity) {

  // },
  list: function() {
  	if (this.length === 0) {
  		console.log("Your shopping cart is empty.")
  	} else {
  		console.log("Here are the contents of your shopping cart:")
  		
  		for (var i = this.length - 1; i >= 0; i--) {
  		console.log(this.count, "X", this.description)
  		};
  	}	
  },    
  // total: function() {
  	
  // },


};

var item1 = shoppingCart.add({description: "Huggies Little Snugglers Diapers",
                              count: 4,
                              price: 19.77});

var item2 = shoppingCart.add({description: "Tylenol Extra Strength Acetaminophen",
                              count: 2,
                              price: 22.38});

var item3 = shoppingCart.add({description: "Flents Quiet Please Foam Ear Plugs",
                              count: 10,
                              price: 11.50});

var item4 = shoppingCart.add({description: "Monsters Eat Whiny Children",
                              count: 1,
                              price: 11.07});

//shoppingCart.remove(item3, 6);
//shoppingCart.remove(item4, 1);

console.log(shoppingCart.item);
console.log(shoppingCart.list());

/* Should print:
[
'4 X Huggies Little Snugglers Diapers',
'2 X Tylenol Extra Strength Acetaminophen',
'4 X Flents Quiet Please Foam Ear Plugs',
]
*/

// console.log(shoppingCart.total());

// Should print: 169.84
var shoppingCart = {
	cart: [],
	idCounter: 0,
	
	add: function(itemObject) {
		itemObject.id = this.idCounter;
		this.idCounter ++;
		this.cart.push(itemObject);
		return itemObject.id;
  	},
	remove: function(itemId, quantity) {
		for (var i = shoppingCart.cart.length - 1; i >= 0; i--) {
				if (shoppingCart.cart[i].id === itemId && shoppingCart.cart[i].count === quantity) {
					shoppingCart.cart.splice(i, 1);
				}
				else if (shoppingCart.cart[i].id === itemId) {
				shoppingCart.cart[i].count -= quantity;
			}

		};

		// Check through all of the objects in the array 'cart' (forEach)
		// then for any object that has an ID equal to 'itemId' remove the quantity from its count property
		// if quantity removed equals or excceeds the count delete the object.

  	},
  	list: function() {
	  	if (this.cart.length === 0) {
	  		return "Your shopping cart is empty.";
	  	} else {
	  		console.log("Here are the contents of your shopping cart:");
	  		
	  		var listArray = [];
	  		
	  		for (var i = this.cart.length - 1; i >= 0; i--) {
	  			listArray[i] = this.cart[i].count + " X " + this.cart[i].description;	
	  		};
	  	return listArray;
	  	}	
  	},    
  	total: function() {
  		var total = 0;
  		for (var i = this.cart.length - 1; i >= 0; i--) {
  			total += this.cart[i].price * this.cart[i].count;
  		};
  		return total.toFixed(2);
  	},

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
var shoppingCart = {
  // implement me!

//var items = ["item1", "item2", "item3", "item4"],
//count: 0,
//price: 0,
//ID: 0,




add: function (description, count, price) {

//this.description = description[];

this.description = new.shoppingCart.description

//this.description = description;
this.count = count;
this.price = price;
ID = Math.floor(1000 * Math.random());

},

remove: function (amount) {
	if(amount <= this.count) {
		description = "";
		count = 0;
		price = 0;
	} else {
		count = this.count - amount;
	}
},

list: function () {
return shoppingCart;
},


total: function () {
}


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


var shoppingCart = {
  
  newArray: [],
  idCounter: 0,

  add: function(item) {
    item.id = this.idCounter;
    this.idCounter++;
    this.newArray.unshift(item);

    return item.id;
  },

  remove: function (itemId, numberToRemove) {
    this.newArray.forEach(function(item, index, arr) {
      if (itemId === item.id) {
        if(numberToRemove >= item.count) {
          arr.splice(idex, 1); 
        }else {
          item.count -= numberToRemove;
        }
      }
    });
  },

  list: function() {
    var inventory = [];
    this.newArray.forEach(function (item){
      var itemStr = item.count + " X " + item.description;
      inventory.unshift(itemStr);
    });
  },

  total: function () {
    var sum = 0;
    this.newArray.forEach(function (item) {
      sum += item.price * item.count;
    });
  	return sum.toFixed(2);
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
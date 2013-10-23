var shoppingCart = {
  shoppingList : [],
  lastId : 0,

  add : function (item) {
    this.lastId += 1;
    item.id = this.lastId;
    this.shoppingList.unshift(item);

    return item.id;
  },

  remove : function (itemId, numberToRemove) {
    this.shoppingList.forEach(function (item, index, arr) {
      if (itemId === item.id) {
        if (numberToRemove >= item.count) {
          arr.splice(index, 1);
        } else {
          item.count -= numberToRemove;
        }
      }
    });
  },

  list : function () {
    inventory = [];
    this.shoppingList.forEach(function (item) {
      var itemStr = item.count + " X " + item.description;
      inventory.unshift(itemStr);
    });

    return inventory;
  },

  total : function () {
    var sum = 0;
    this.shoppingList.forEach(function (item) {
      sum += item.price * item.count;
    });
    
    return sum.toFixed(2);
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
                              count: 2,
                              price: 11.07});

shoppingCart.remove(item3, 6);
shoppingCart.remove(item4, 2);

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
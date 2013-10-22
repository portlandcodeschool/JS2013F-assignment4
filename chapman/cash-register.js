var item = 0;
var total = 0;

var cashRegister = {
  add: function (item) {
  	total = total + item;
  },

  subtract: function (item) {
  	total = total - item;
  },

  total: function () {
  	return total;
  }
}

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());
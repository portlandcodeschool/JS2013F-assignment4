var cashRegister = {
	cashBox: 0, 

	add: function (charge) {
	  this.cashBox += charge;
	},
	subtract: function (charge) {
	  this.cashBox -= charge;
	},
	total: function () {
		return this.cashBox;
	}
	
  // implement me!
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());
var cashRegister = {

	add: function(price) {
		return price + this.total = this.total;
	},

	subtract: function(price) {
		return this.total - price;
	},

	total: function() {
		return cashRegister.add + cashRegister.subtract;
	},
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());
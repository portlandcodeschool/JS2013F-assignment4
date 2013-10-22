var cashRegister = {
	add: function add (charge) {
		var cashRegisterAdd = charge + 0
	},
	subtract: function subtract (charge) {
		var cashRegisterSubtract = cashRegisterAdd - charge;
	},
	total: cashRegister.add() + cash.Register.subtract()
	
  // implement me!
}

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());
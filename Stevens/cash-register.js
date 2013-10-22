var cashRegisterAdd = "";
var cashRegisterSubtract = "";
var cashRegisterTotal = "";

var cashRegister = {
	add: function add (charge) {
		cashRegisterAdd = charge + 0;
		console.log(cashRegisterAdd);
	},
	subtract: function subtract (charge) {
		cashRegisterSubtract = cashRegisterAdd - charge;
		console.log(cashRegisterSubtract);
	},
	total: function total () {
		return cashRegisterAdd + cashRegisterSubtract
	}
  // implement me!
}

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());
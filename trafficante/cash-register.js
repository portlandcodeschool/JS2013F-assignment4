var cashRegister = {
	
	currentBalance: 0,
  
  add: function (amountToDeposit) {
  	this.currentBalance += amountToDeposit;
  },
  
  subtract: function (amountToWithdraw) {
  	this.currentBalance -= amountToWithdraw;
  },

  total: function () {
  	return this.currentBalance;
  }
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());

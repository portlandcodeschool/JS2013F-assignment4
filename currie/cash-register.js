var cashRegister = {
	credit: 0,
	debit: 0,
	balance: 0,
  
  add: function(amount) {
  	this.credit += amount;
  },
  subtract: function(amount) {
  	this.debit += amount;
  },
  total: function() {
  	this.balance += this.credit;
  	this.balance -= this.debit;
  	return this.balance;
  }
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());

//I could have just done this all with one var for total and no function.
//Although, I want the functionality of calling cashRegister.debit/credit.
//Thoughts? -curriedav
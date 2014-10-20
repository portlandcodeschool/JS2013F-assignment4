var cashRegister = {
  credit: 0,
  debit: 0,
  bal: 0, 
  add: function(number) {
    this.credit += number;
  },
  subtract: function(number) {
    this.debit -= number;
  },
  total: function(number) {
    this.bal += this.credit -= this.debit;
    return this.bal;
  }
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());

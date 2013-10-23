var cashRegister = {
  total: 0,
  add: function(price) {
    this.total += price;
  },
  subtract: function(price) {
    this.total += price;
  }
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total);

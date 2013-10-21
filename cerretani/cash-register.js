var cashRegister = {
  total: 0,
  add: function(itemCost){
    this.total += itemCost
},
  subtract: function(itemCost) {
    this.total -= itemCost
}
};

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total);
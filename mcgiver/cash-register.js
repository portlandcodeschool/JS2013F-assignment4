// Copy cash-register.js into your working directory and 
// implement the object. You're going to create a cash register
// object. It needs to have method to add to the total, to 
// subtract from the total and to return the current total. 
// It also need to keep a running track of the total within 
// the object

var tots = 0;
var receipt = [];

var cashRegister = {
     add: function (x) {
      receipt.push(x);
      return (tots += x);

    },
     subtract: function (x) {
      receipt.push("-"+ x);
      return tots -= x 
    },
    total: function () {
      return tots}
};

// newCR = new cashRegister

cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());
console.log("Here is your receipt "+ receipt)

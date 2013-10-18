




var cashRegister = {
  add: function (num) {
  	console.log(num);
  },

  subtract: function (num) {
  	
  	console.log(num - num);
  },
  total: function () {
  	console.log(cashRegister.add - cashRegister.subtract);
  }
}
  
 /* var add = new Function (num);
	
 
  function subtract (minus) {
  	return minus = num - num;
  }
  function total () {
  	return plus - minus;
  }*/

  cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());



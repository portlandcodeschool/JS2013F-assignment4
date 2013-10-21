





var cashRegister = {
   
  'totes': 0,
  add: function (x) {
    
  	this.totes += x;
  },

  subtract: function (x)  {
  	this.totes -= x;
  },

  total: function () {
    return this.totes;
  }
  	
  };

//cashRegister.total = cashRegister.num;
/*=======
//David - I can't figure out the math to apply, but I am just 
//wondering if I'm at all on the right track with the architecture.




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
>>>>>>> d1232e6afc1f9a12c4d76aba3f3255e092a5a1bd
}*/
  


cashRegister.add(1.25);
cashRegister.add(3.63);
cashRegister.add(4.99);
cashRegister.subtract(1.15);

console.log("Your total is " + cashRegister.total());







 /* var add = new Function (num);
	
 
  function subtract (minus) {
  	return minus = num - num;
  }
  function total () {
  	return plus - minus;
  }*/



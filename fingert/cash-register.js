
var cost = 0;


var cashRegister = {
  
  

  add: function (num) {
  	cost + num;
  },

  subtract: function (num)  {
  	cost - num;
  	
  },
 
   total: function () {
   	 return this.add() - this.subtract();
  } 
}
  


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



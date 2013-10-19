//David - I can't figure out the math to apply, but I am just 
//wondering if I'm at all on the right track with the architecture.


var num = 0;

var cashRegister = {
  

  var add = {
  	console.log(this.num + num);
  }

  var subtract =  {
  	
  	console.log(this.num - num);
  }
 
   var total = {
   	 console.log(this.num);
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



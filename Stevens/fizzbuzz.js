//Write a program that prints the numbers from 1 to 100. 
//But for multiples of three print “Fizz” instead of the number and 
//for the multiples of five print “Buzz”. 
//For numbers which are multiples of both three and five print “FizzBuzz”.

var numberArray = [];

  for (i = 0; i < numberArray.length; i++) {
	numberArray[i] = i + 1;
  };

  numberArray.forEach(function(item) {
  	if (item % 3 === 0);
  	  console.log("Fizz");
  	if (item % 5 === 0);
  	  console.log("Buzz");
  	if (item % 3 === 0 & item % 5 === 0);
  	  console.log("FizzBuzz");
  	} else {
  		console.log(item);
  	}
  });



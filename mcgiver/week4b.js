
// // 1.) create an object called regularPolygon.
//  Give it a property called sideLength and a 
//  method called perimeter(). perimeter should 
//  return the product of sideLength and numberOfSides
//   (which of course doesn’t exist in regularPolygon.

// 2.) Use Object.create() to create a new object 
// called triangle that inherits from regularPolygon. 
// Set triangle.numberOfSides to 3 and verify that 
// triangle.perimeter() now returns 15.

// // 3.) Use Object.create() to make another new object 
// called pentagon that also inherits from regularPolygon. 
// Set pentagon.numberOfSides to 5 and verify that 
// pentagon.perimeter() returns 25.

// 4.) profit?



var regularPolygon = {
    sideLength: 5, 
    perimeter: function () {
        return this.sideLength * this.numberOfSides
    }
};

var triangle = Object.create(regularPolygon);
triangle['numberOfSides'] = 3;
perimiterWorks = triangle.perimeter() == 15 //tdd


console.log(triangle.perimeter());
console.log("Perimiter works? " + perimiterWorks)

var pentagon = Object.create(regularPolygon);
pentagon['numberOfSides'] = 5;
perimiterWorks = triangle.perimeter() == 25 //tdd

console.log(pentagon.perimeter())
console.log("Perimiter works? " + perimiterWorks)

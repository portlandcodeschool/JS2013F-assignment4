var regularPolygon = {
  sideLength: 0,
  perimeter: function(sideLength, numberOfSides) {
  	return sideLength * numberOfSides;
  }
}

var triangle = Object.create(regularPolygon);
var pentagon = Object.create(regularPolygon);
triangle.numberOfSides = 3;
pentagon.numberOfSides = 5;

console.log(regularPolygon.perimeter(5, triangle.numberOfSides));
console.log(regularPolygon.perimeter(5, pentagon.numberOfSides));

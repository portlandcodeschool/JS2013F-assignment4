var regularPolygon = {
 sideLength: 5,
 perimeter: function(sideLength, numberOfSides) {
 	return this.sideLength * this.numberOfSides
 }
}

var triangle = Object.create(regularPolygon);
triangle.numberOfSides = 3;

var pentagon = Object.create(regularPolygon);
pentagon.numberOfSides = 5;

console.log(triangle.perimeter());
console.log(pentagon.perimeter());
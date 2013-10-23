var regularPolygon = {
	sideLength: 5,
	numberOfSides: 4,
	perimeter: function() {
		console.log(this.sideLength * this.numberOfSides)
	}
}
regularPolygon.perimeter();


var triangle = Object.create(regularPolygon)
	triangle.numberOfSides = 3;
triangle.perimeter();


var pentagon = Object.create(regularPolygon)
	pentagon.numberOfSides = 5;
pentagon.perimeter();
var regularPolygon = {
	sideLength: 0, 
	perimeter: function () {
		return this.sideLength * this.numberOfSides
	}
}

var triangle = Object.create(regularPolygon)
triangle['numberOfSides'] = 3;

console.log(triangle.perimeter);
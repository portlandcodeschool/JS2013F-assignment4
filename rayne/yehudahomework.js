var regularPolygon = {
	sideLength: 5, 
	perimeter: function () {
		return this.sideLength * this.numberOfSides
	}
};

var triangle = Object.create(regularPolygon);
triangle['numberOfSides'] = 3;

console.log(triangle.perimeter());

var pentagon = Object.create(regularPolygon);
pentagon['numberOfSides'] = 5;

console.log(pentagon.perimeter());
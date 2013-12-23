var regularPolygon = {
	polygonType: "Polygon",
	sideLength: 5,
	perimeter: function () {
		return "The perimeter of a " + this.polygonType + " is " + (this.numberOfSides * this.sideLength) + ".";
	},
};

var triangle = Object.create(regularPolygon);//, [numberOfSides = 3, polygonType = "triangle"]);
var pentagon = Object.create(regularPolygon);//, [numberOfSides: 5, polygonType: "pentagon",]);

//Is there a more efficient way of adding properties to an object with Object.create?
triangle.numberOfSides = 3;
triangle.polygonType = "triangle";
pentagon.numberOfSides = 5;
pentagon.polygonType = "pentagon";


console.log(triangle.perimeter());
console.log(pentagon.perimeter());


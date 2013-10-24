var regularPolygon = {sideLength: 5, perimeter: function(){return console.log(this.sideLength * this.numberofSides)} };


var triangle = Object.create(regularPolygon);
triangle.numberofSides = 3;

var pentagon = Object.create(regularPolygon);
pentagon.numberofSides = 5;

triangle.perimeter();
pentagon.perimeter();

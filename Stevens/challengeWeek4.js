function Order (descr, count, price, identity) {
	this.descr = descr;
	this.count = count;
	this.price = price;
	this.identity = identity;
}

Order.prototype.cost = function() {
	return this.price * this.count;
}

Order.prototype.getId = function() {
	if (this.identity) {
		return this.identity;
	} else {
		this.identity = this.descr.slice(0, 3) + Math.random().toFixed(3).slice(2);
		return this.identity;
	}
}

var funOrder = new Order("awesome", 15000, 400);

console.log(funOrder.cost());
console.log(funOrder.getId());



//when get ID method is called, check to see if id has been called, if so return it.  if not, create one and save it to 
//this.id 
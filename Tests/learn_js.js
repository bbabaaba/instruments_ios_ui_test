var a = [];
a.push(1,2,3);
a.reverse();

function abs(x){
	if (x >= 0)
	{
		return x;
	}
	else
	{
		return -x;
	}
}
abs(-1)

function Point(x,y){
	this.x = x;
	this.y = y;
}
Point.prototype.r = function() {
	return Math.sqrt(this.x*this.x +
		this.y*this.y);
};
var p = new Point(3,4)
p.r()
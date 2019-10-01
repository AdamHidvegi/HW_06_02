// const Paint = require('./Paint.js')

const Decorator = function(paint) {
  this.paint = 0;
}

Decorator.prototype.addCanOfPaint = function(numberOfCans) {
  this.paint += numberOfCans;
  return this.paint;
}

Decorator.prototype.litresOfPaintInStock = function(litresOfPaint) {
  this.paint = litresOfPaint / 5;
  return this.paint;
}




module.exports = Decorator;

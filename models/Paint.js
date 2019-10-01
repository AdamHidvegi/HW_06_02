const Paint = function(litresOfPaint) {
  this.litresOfPaint = 20;
}

Paint.prototype.checkingLitresOfPaint = function(litresOfPaint) {
  if (litresOfPaint == 0) {
    return "You are out of paint!"
  } else if (litresOfPaint < 10) {
    return "You have less than the half of the original amount of paint."
  } else if (litresOfPaint >= 10) {
    return "You have a lot of paint, no worries."
  } else if (litresOfPaint == 20) {
    return "You have the whole amount of paint!"
  }
}

Paint.prototype.lessPaint = function(numberOfCans) {
  this.litresOfPaint -= numberOfCans;
  return this.litresOfPaint;
}

Paint.prototype.empty = function() {
  this.litresOfPaint = 0;
  return this.litresOfPaint;
}

module.exports = Paint;

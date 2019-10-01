const Room = function(area, paintedArea) {
  this.area = area;
  this.paintedArea = 0;
}

Room.prototype.roomSize = function(a,b,c) {
  this.area == a*b*c;
  return this.area;
}

Room.prototype.isItPainted = function() {
  if (this.paintedArea == 0) {
    return false;
  } else {
    return true;
  }
}

Room.prototype.beingPainted = function(paintedSquaremeters) {
  this.paintedArea += paintedSquaremeters;
  return this.paintedArea;
}


module.exports = Room;

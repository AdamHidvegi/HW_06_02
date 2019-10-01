const assert = require('assert');
const Room = require('../Room.js');

describe('Room', function() {

  let room;

  beforeEach(function() {
    room = new Room(8, 0)
  });

  it('increasing the painted area', function() {
    room.beingPainted(5);
    const actual = room.paintedArea;
    assert.strictEqual(actual, 5)
  });

  it('the size of the room in square meters', function() {
    room.roomSize(2,2,2);
    const actual = room.area;
    assert.strictEqual(actual, 8)
  })

  it('is the room painted?', function() {
    const actual = room.isItPainted();
    assert.strictEqual(actual, false)
  })

});

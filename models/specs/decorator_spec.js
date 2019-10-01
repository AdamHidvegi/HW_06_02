const assert = require('assert');
const Decorator = require('../Decorator.js');
const Paint = require('../Paint.js');
const Room = require('../Room.js');

describe('Decorator', function() {

  let decorator;

  beforeEach(function() {
    decorator = new Decorator(0)
  });

  it('add cans of paint', function() {
    decorator.addCanOfPaint(20);
    const actual = decorator.paint;
    assert.deepEqual(actual, 20)
  });

  it('how many litres of paint we have', function() {
    decorator.litresOfPaintInStock(20);
    const actual = decorator.paint;
    assert.strictEqual(actual, 4)
  })
});

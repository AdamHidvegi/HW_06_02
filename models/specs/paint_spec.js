const assert = require('assert');
const Paint = require('../Paint.js');

describe('Paint', function() {

  let paint;

  beforeEach(function() {
    paint = new Paint(20)
  });

  it('checking the paint', function() {
    const actual = paint.checkingLitresOfPaint(15);
    assert.strictEqual(actual, "You have a lot of paint, no worries.")
  });

  it('get rid of the paint can by can', function() {
    const actual = paint.lessPaint(5);
    assert.strictEqual(actual, 15)
  });

  it('get rid of the paint completely', function() {
    const actual = paint.empty();
    assert.strictEqual(actual, 0)
  });

});

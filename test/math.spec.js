const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function () {
  before(function () {
    math = new Math();
  })

  it('Sum two numbers', function () {
    assert.equal(math.sum(5, 5), 10);
  });

  it('Sum two numbers async', function (done) {
    this.timeout(3000)

    math.asyncSum(5, 5, value => {
      assert.equal(value, 10);
      done();
    })
  });

  it('Multiply two numbers', function() {
    assert.equal(math.multiply(5, 5), 25);
  })
});

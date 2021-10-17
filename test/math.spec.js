const assert = require('assert');
const Math = require('../src/math.js');

describe('Math class', function () {
  it('Sum two numbers', function () {
    const math = new Math();

    assert.equal(math.sum(5, 5), 10);
  });

  it('Sum two numbers async', function (done) {
    const math = new Math();
    this.timeout(3000)

    math.asyncSum(5, 5, value => {
      assert.equal(value, 10);
      done();
    })
  });

  it('Multiply two numbers', function() {
    const math = new Math();

    assert.equal(math.multiply(5, 5), 25);
  })
});

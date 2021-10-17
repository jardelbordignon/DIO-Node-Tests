const expect = require('chai').expect;

const Math = require('../src/math.js');

describe('Math class', function () {
  before(function () {
    math = new Math();
  })

  it('Sum two numbers', function () {
    expect(math.sum(5, 5)).to.equal(10);
  });

  it('Sum two numbers async', function (done) {
    this.timeout(3000)

    math.asyncSum(5, 5, value => {
      expect(value).to.equal(10);
      done();
    })
  });

  it('Multiply two numbers', function() {
    expect(math.multiply(5, 5)).to.equal(25);
  })

  it('Assert an object example', function () {
    const userObj = { name: 'Jardel Bordignon' }

    expect(userObj)
      .to.have.property('name')
      .equal('Jardel Bordignon');
  });

  it('Assert two objects example', function () {
    const userObj = { name: 'Jardel Bordignon' }
    const userObj2 = { name: 'Jardel Bordignon' }

    // Comparando dois objetos diretamente mesmo que sejam iguais
    // vai dar erro pois será comparada a referencia de cada um
    // expect(userObj).to.equal(userObj2); //  refs não são iguais

    // usando .to.deep.equal faz uma comparação profunda dos objetos
    expect(userObj).to.deep.equal(userObj2); // params são iguais  
  });
});

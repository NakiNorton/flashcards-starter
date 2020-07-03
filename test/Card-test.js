const chai = require('chai');
const expect = chai.expect;
const Card = require('../src/Card');

describe('Card', function() {

  let card;
  beforeEach(function () {
    card = new Card(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
  });

  it('should be a function', function() {
    expect(Card).to.be.a('function');
  });

  it('should be an instance of Card', function() {
    expect(card).to.be.an.instanceof(Card);
  }); 

  it('should have all keys', function() {
    expect(card).to.have.all.keys('id', 'question', 'answers', 'correctAnswer');
  });

  it('should have a number for an id', function() {
    expect(card.id).to.equal(1);
  });  

  it('should have a question', function() {
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
  });  

  it('should have a list of possible answers', function() {
    expect(card.answers).to.be.an('array').with.lengthOf(3)
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
  });  

  it('should have the correct answer', function() {
    expect(card.correctAnswer).to.equal('object');
  });
});
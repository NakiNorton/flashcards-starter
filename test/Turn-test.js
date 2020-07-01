const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe ('Turn', function() {

  let card;
  beforeEach('flash card deck', function () {
    card = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
  });

  it('should be a function', function () {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function () {
    const turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have a guess', function() { 
    const turn = new Turn('array', card); 
    expect(typeof(turn.guess)).to.equal('string');
    // make test specific to one of the possible answers???
  }); 
    
  it('should have a card', function() {
    const turn = new Turn('array', card);
    expect(typeof(turn.card)).to.equal('object'); 
    expect(turn.card).to.equal(card);
  }); 

  it('should return the guess', function() {
    const turn = new Turn('object', card);
    expect(turn.returnGuess()).to.equal('object');
  });

  it('should return the card', function() {
    const turn = new Turn('object', card);
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return a boolean value reflecting if guess is correct', function() {
    const turn = new Turn('array', card);
    expect(turn.evaluateGuess()).to.equal(true);
    const turn1 = new Turn('object', card);
    expect(turn1.evaluateGuess()).to.equal(false);
  });

  it('should return feedback based on the guess', function() {
    const turn = new Turn('array', card);
    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.equal('correct!');
    const turn1 = new Turn('object', card);
    turn1.evaluateGuess();
    expect(turn1.giveFeedback()).to.equal('incorrect!');
  });
});
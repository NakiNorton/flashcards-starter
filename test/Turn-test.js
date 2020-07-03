const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe ('Turn', function() {

  let card;
  let turn;
  beforeEach('flash card deck', function() {
    card = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    turn = new Turn('array', card);
  });

  it('should be a function', function() {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('should have all keys', function () {
    expect(turn).to.have.all.keys('guess', 'card');
  });

  it('should have a guess', function() { 
    expect(typeof(turn.guess)).to.equal('string');
  }); 
    
  it('should have a card', function() {
    expect(turn.card).to.be.a.instanceof(Card);
  }); 

  it('should return the guess', function() {
    expect(turn.returnGuess()).to.equal('array');
  });

  it('should return the card', function() {
    expect(turn.returnCard()).to.equal(card);
  });

  it('should return a boolean reflecting if guess is correct', function() {
    expect(turn.evaluateGuess()).to.equal(true);
    const turn2 = new Turn('function', card);
    expect(turn2.evaluateGuess()).to.equal(false);
  });

  it('should return feedback based on the guess', function() {
    turn.evaluateGuess();
    expect(turn.giveFeedback()).to.equal('correct!');
    const turn2 = new Turn('function', card)
    turn2.evaluateGuess();
    expect(turn2.giveFeedback()).to.equal('incorrect!');
  });
});
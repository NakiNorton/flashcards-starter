const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Round = require('../src/Round');
const testData = require('./testData');
const testPrototypeData = testData.prototypeData;

describe('Round', function() {

  let deck;
  let round;
  beforeEach('instantiate classes with test data', function() {
    deck = new Deck(testPrototypeData);
    round = new Round(deck);
  });

  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() { 
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should have all keys', function () {
    expect(round).to.have.all.keys('deck', 'currentCard', 'turns', 'index', 'incorrectGuesses');
  });

  it('should store the deck of flash cards', function() {
    expect(round.deck).to.be.an.instanceof(Deck);
  });

  it('the currentCard should be the first card in the deck at the start of the round', function() {
    expect(round.currentCard).to.equal(round.deck.cards[0]);
  });

  it('should return the first card in the deck', function() {
    expect(round.returnCurrentCard()).to.equal(round.deck.cards[0]);
  });

  it('should increment turn count with every guess', function() {
    round.takeTurn('object');
    expect(round.turns).to.equal(1);
    round.takeTurn('array');
    expect(round.turns).to.equal(2);
  });

  it('should increment the card index with every guess', function () {
    round.takeTurn('object');
    expect(round.turns).to.equal(1);
    round.takeTurn('array');
    expect(round.turns).to.equal(2);
  });

  it('should make the next card in the deck, the current card', function() {
    expect(round.currentCard).to.equal(round.deck.cards[0]);
    round.takeTurn('object');
    expect(round.currentCard).to.equal(round.deck.cards[1]);
  });

  it('should track cards which were answered incorrectly', function() {
    expect(round.incorrectGuesses).to.be.an('array').with.lengthOf(0);
    round.takeTurn('function')
    expect(round.incorrectGuesses).to.have.lengthOf(1);
  });

  it('should return feedback on if guess is correct or not', function () {
    expect(round.takeTurn('object')).to.equal('correct!');
    expect(round.takeTurn('function')).to.equal('incorrect!');
  });

  it('should calculate and return percentage of correct guesses', function() {
    round.takeTurn('object');
    expect(round.calculatePercentCorrect()).to.equal(100);
    round.takeTurn('function');
    expect(round.calculatePercentCorrect()).to.equal(50);
  });
});


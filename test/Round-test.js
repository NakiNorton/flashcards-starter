const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Round', function () {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach('flash card deck', function () {
    card1 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    card2 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
    card3 = new Card(9, 'What does the callback function for find() return?', ['boolean', 'array', 'object'], 'boolean');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', function () {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function () { 
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should store the deck of flash cards', function () {
    expect(round.deck).to.equal(deck);
  });

  it('should have a currentcard', function () {
    expect(round.currentCard).to.equal(round.deck.cards[0]);
  });

  it('should return the first card in the deck', function () {
    expect(round.returnCurrentCard()).to.equal(round.deck.cards[0]);
  });

  it('should increment turn count with every guess', function () {
    round.takeTurn();
    expect(round.turns).to.equal(1);
  });

  it('should make the next card in the deck, the current card', function () {
    expect(round.currentCard).to.equal(round.deck.cards[0]);
    round.takeTurn();
    expect(round.currentCard).to.equal(round.deck.cards[1]);
  });

  it('should calculate and return percentage of correct guesses', function () {
    round.takeTurn('array');
    expect(round.calculatePercentCorrect()).to.equal("100%")
    round.takeTurn('join()');
    expect(round.calculatePercentCorrect()).to.equal("50%")
  });
});


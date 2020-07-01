const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Round = require('../src/Round');

describe('Round', function () {

  it('should be a function', function () {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function () { 
    const card1 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card2 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
    const card3 = new Card(9, 'What does the callback function for find() return?', ['boolean', 'array', 'object'], 'boolean');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round).to.be.an.instanceof(Round);
  }); 

  it('should store the deck of flash cards', function () {
    const card1 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card2 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
    const card3 = new Card(9, 'What does the callback function for find() return?', ['boolean', 'array', 'object'], 'boolean');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.deck).to.equal(deck);
  });

  it('should have a currentcard', function () {
    const card1 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card2 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
    const card3 = new Card(9, 'What does the callback function for find() return?', ['boolean', 'array', 'object'], 'boolean');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    expect(round.currentCard).to.equal(round.deck.cards[0]);
  });

  it('should return the first card in the deck', function () {
    const card1 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card2 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
    const card3 = new Card(9, 'What does the callback function for find() return?', ['boolean', 'array', 'object'], 'boolean');
    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.returnCurrentCard()).to.equal(round.deck.cards[0]);
  });

  it('should increment turn count with every guess', function () {
    const card1 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card2 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
    const card3 = new Card(9, 'What does the callback function for find() return?', ['boolean', 'array', 'object'], 'boolean');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    round.takeTurn();
    expect(round.turns).to.equal(1);
  });

  it('should make the next card in the deck, the current card', function () {
    const card1 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card2 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
    const card3 = new Card(9, 'What does the callback function for find() return?', ['boolean', 'array', 'object'], 'boolean');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);
    expect(round.currentCard).to.equal(round.deck.cards[0]);
    round.takeTurn();
    expect(round.currentCard).to.equal(round.deck.cards[1]);
  });

  it('should calculate and return percentage of correct guesses', function () {
    const card1 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card2 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
    const card3 = new Card(9, 'What does the callback function for find() return?', ['boolean', 'array', 'object'], 'boolean');

    const deck = new Deck([card1, card2, card3]);
    const round = new Round(deck);

    round.takeTurn('array');
    expect(round.calculatePercentCorrect()).to.equal("100%")
    round.takeTurn('join()');
    expect(round.calculatePercentCorrect()).to.equal("50%")
  });

});


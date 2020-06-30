const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function () {

  it('should be a function', function () {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function () {
    const deck = new Deck();
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should know how many cards are in the deck', function () {
    const card2 = new Card(2, 'What is a comma-separated list of related values?', ['array', 'object', 'function'], 'array');
    const card6 = new Card(6, 'What is an example of a mutator method?', ['sort()', 'map()', 'join()'], 'sort()');
    const card9 = new Card(9, 'What does the callback function for find() return?', ['boolean', 'array', 'object'], 'boolean');
    const deck = new Deck([card2, card6, card9]);
    expect(deck.countCards()).to.equal(deck.cards.length);
  });
  
});
const chai = require('chai');
const expect = chai.expect;
const Deck = require('../src/Deck');
const testData = require('./testData');
const testPrototypeData = testData.prototypeData;

describe('Deck', function() {

  let deck;
  beforeEach(function () {
    deck = new Deck(testPrototypeData);
  });

  it('should be a function', function() {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function() {
    expect(deck).to.be.an.instanceof(Deck);
  }); 

  it('should have a deck of cards', function () {
    expect(deck).to.have.property('cards');
  });

  it('should know how many cards are in the deck', function() {
    expect(deck.countCards()).to.equal(deck.cards.length);
  });
});
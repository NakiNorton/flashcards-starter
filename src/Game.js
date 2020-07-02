const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Card = require('./Card');
const Round = require('./Round');
const Deck = require('./Deck');

class Game {
  constructor() {
  this.currentRound = {};
  }

  start() {
    const cards = prototypeQuestions.map(flashCard => {
      const card = new Card(flashCard.id, flashCard.question, flashCard.answers, flashCard.correctAnswer)
      return card;
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck); 
    this.printQuestion(this.currentRound);
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;

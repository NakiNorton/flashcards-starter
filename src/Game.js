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
    const cards = prototypeQuestions.map(quizQuestion => {
      const card = new Card(quizQuestion.id, quizQuestion.question, quizQuestion.answers, quizQuestion.correctAnswer)
      return card;
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, this.currentRound);
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


// Your Game class should meet these other requirements:
// Should keep track of the currentRound
/////// updateRound method? currentRound++ after Round is instantiated?
// start: method that starts everything
////// Creates Cards
///// Puts Cards in a Deck
////// Creates a new Round using the Deck
////// invokes printMessage to display the message in the CLI
///// invokes printQuestion to kick off our helper functions that allow interaction via the CLI




// VM969: 4 Card { id: 1, question: "What allows you to define a set of related information using key-value pairs?", answers: Array(3), correctAnswer: "object" }
// VM969: 4 Card { id: 2, question: "What is a comma-separated list of related values?", answers: Array(3), correctAnswer: "array" }
// VM969: 4 Card { id: 3, question: "What type of prototype method directly modifies the existing array?", answers: Array(3), correctAnswer: "mutator method" }
// VM969: 4 Card { id: 4, question: "What type of prototype method does not modify the …returns a particular representation of the array?", answers: Array(3), correctAnswer: "accessor method" }
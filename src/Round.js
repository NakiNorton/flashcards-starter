const Turn = require("./Turn");

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.index = 0;
    this.turns = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.currentCard; 
  }

  takeTurn(guess) {
    const turn = new Turn(guess, this.currentCard);
    this.turns++;  
    this.index++; 
    this.currentCard = this.deck.cards[this.index] 
   if (!turn.evaluateGuess()) { 
     this.incorrectGuesses.push(this.currentCard.id);
   }
   turn.giveFeedback();
  }

  calculatePercentCorrect() { 
    const correctAnswers = this.turns - this.incorrectGuesses.length;
    const percentCorrect = (correctAnswers / this.turns) * 100;
    return percentCorrect + '%';
  }

  endRound() {
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()} of the questions correctly!`);
    // return process.exit();
  }   
}

module.exports = Round;

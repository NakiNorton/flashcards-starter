class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
  }  
    
  returnGuess() {
    return this.guess;   
  }
    
  returnCard() {
    return this.card; 
  }

  evaluateGuess() { 
    if (this.guess === this.card.correctAnswer) {
      console.log('true')
      return true;
    } else {
      console.log('false')
      return false;
    }
  }

  giveFeedback() {
    if (this.guess === this.card.correctAnswer) {
      console.log('correct!')
      return 'correct!';
    } else {
      console.log('incorrect!')
      return 'incorrect!';
    }
  }

}

module.exports = Turn;





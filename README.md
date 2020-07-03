# Flash Cards

## Abstract
Flash Cards is a command-line based application. The user can see the questions, take guesses, and see a final score at the end of the round. This project was built with Javascript, using Test Driven Development to drive the implementation of the code.

## Application in action:  

![Gif of a full round](assets/flashcards-fullround.gif)

The percentage of questions answered correctly will be displayed at the end of the round:

![Screenshot of the message at the end of the round](assets/Flashcards-percentage.png)

Invalid inputs will produce an error message:

![Screenshot of the invalid input message](assets/flashcards-invalid-input.png)

## Setup
* Clone repo to local depository using `git clone git@github.com:NakiNorton/flashcards-starter.git`  
* `cd` into the cloned repo  
* Run `npm install` to install the dependencies
* Run `node index.js` to start a new game
* To view the test suite, run `npm test`

## To play
1. The first question will display automatically
2. Select an answer by either:
  * Using the up/down arrow keys to select an answer, then hit enter
  * Using the number key associated with answer you would like to select, then hit enter
3. Hit enter to display the next question
4. When a guess is submitted, a message will display to let you know if it was correct or incorrect
5. The application will automatically be exited at the end of the round
6. To exit the application earlier, hold `ctrl` and hit `c` 

## Developer:
[Stephanie Norton](https://github.com/NakiNorton)

This project was built in my first week of Module 2 at Turing School of Software and Design.



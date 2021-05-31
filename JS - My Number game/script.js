'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1; // this is a random number between 1-20
let score = 10;
let highScore = 0;
// made a function within a variable so can call function variable rather than rewrite code.
let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //

  //when there is no input
  if (!guess) {
    displayMessage('No Number!⛔ - Insert number between 1-20');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('Thats the correct number! Congratulations 🎉🙌');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    // When the guess is wrong.
    //this is a shorter way using the ternary operator, rather than doing (if too high - do this) or (else if too low - then do this).
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? 'Your guess is too high! - Guess again!'
          : 'Your guess is too low! - Guess again!');
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    displayMessage('your score is 0, you lose!🤬');
    document.querySelector('.score').textContent = 0;
  }
});

//This is for the restart button functionality to restore values
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start Guessing...');
  document.querySelector('.score').textContent = score;
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

'use strict';

let secretNumber;
let score = 20;
let highscore = 0;
let guessNumber;

const checkButton = document.querySelector('.check');
const gameBody = document.querySelector('body');
const numberBox = document.querySelector('.number');

function generateSecretNumber() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
}

function checkButtonEnable() {
  checkButton.disabled = false;
  checkButton.style.backgroundColor = '#eee';
}

function checkButtonDisable() {
  checkButton.disabled = true;
  checkButton.style.backgroundColor = '#555555';
}

function reinitializeGame() {
  score = 20;
  document.querySelector('.guess').value = '';
  gameBody.style.background = '#222';
  numberBox.style.width = '15rem';
  numberBox.textContent = '?';
  generateSecretNumber();
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  checkButtonEnable();
}

generateSecretNumber();

document.querySelector('.check').addEventListener('click', function () {
  guessNumber = Number(document.querySelector('.guess').value);

  if (!guessNumber) {
    document.querySelector('.message').textContent = 'Guess A Number :/';
  } else if (secretNumber == guessNumber) {
    document.querySelector('.message').textContent = 'Correct Answer!';
    highscore = score > highscore ? score : highscore;
    document.querySelector('.highscore').textContent = highscore;
    gameBody.style.backgroundColor = '#60b347';
    numberBox.style.width = '30rem';
    numberBox.textContent = secretNumber;
    checkButtonDisable();
  } else if (score > 1) {
    score--;
    document.querySelector('.message').textContent =
      guessNumber > secretNumber ? 'Too High!' : 'Too Low!';
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'You lose!! Hahahaha :P';
    checkButtonDisable();
  }
});

document.querySelector('.again').addEventListener('click', reinitializeGame);

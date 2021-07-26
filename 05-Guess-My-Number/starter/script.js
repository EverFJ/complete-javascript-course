'use strict';

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.number').textContent = secretNumber;
// document.querySelector(".score").textContent = score;



let btn = document.querySelector('.check');
let message = document.querySelector(".message");

btn.addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);

    // When there is no input
    if (!guess) {
        message.textContent = 'No number !';

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        message.textContent = "Correct number !";

        // When guess is too high
    } else if (guess > secretNumber) {
        if (score > 1) {
            message.textContent = "Number is too high..."
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            message.textContent = "You lost the game !";
            document.querySelector(".score").textContent = 0;
        }

        // When guess is too low
    } else if (guess < secretNumber) {
        if (score > 1) {
            message.textContent = "Number is too high..."
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            message.textContent = "You lost the game !";
            document.querySelector(".score").textContent = 0;
        }
    }
});
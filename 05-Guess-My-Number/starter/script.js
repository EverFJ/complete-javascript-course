'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector(".score").textContent = score;
// document.querySelector(".number").textContent = secretNumber;


let btn = document.querySelector('.check');
let btnAgain = document.querySelector(".again");
let message = document.querySelector(".message");

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}


btn.addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess);
    console.log("guess :" + guess)
    console.log("secretNumber :" + secretNumber)

    // When there is no input
    if (!guess) {
        displayMessage("No number !");

        // When player wins
    } else if (guess === secretNumber) {
        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";
        document.querySelector('.number').textContent = secretNumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector(".highscore").textContent = highScore;
        }
        displayMessage("Correct number !")

        // When player doesn't win
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess < secretNumber ? "Too low" : "Too high")
            score--;
            document.querySelector(".score").textContent = score;
        } else {
            displayMessage("You lost the game !")
            document.querySelector(".score").textContent = 0;
        }


    }
});

btnAgain.addEventListener("click", function() {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
    document.querySelector(".guess").value = "";
    displayMessage("Start guessing...");
})
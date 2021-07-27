'use strict';

// Selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const score0El = document.querySelector("#score--0");
const score1El = document.querySelector("#score--1");
const current0El = document.querySelector("#current--0");
const current1El = document.querySelector("#current--1");
const diceEl = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnNew = document.querySelector(".btn--new");
const btnHold = document.querySelector(".btn--hold");

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add("hidden");

// Variables & Fonctions
let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
const switchPlayer = () => {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle("player--active");
    player1El.classList.toggle("player--active");
}

// Rolling dice  
btnRoll.addEventListener("click", () => {
    // 1. Generating a random dice roll
    const dice = Math.floor(Math.random() * 6 + 1);
    // 2. Display the dice
    diceEl.src = `dice-${dice}.png`;
    diceEl.classList.remove("hidden")
    // 3. Add dice to current score
    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        //  Switch to next player
    } else {
        switchPlayer();
    }
});

// Holding score
btnHold.addEventListener("click", () => {
    // 1. Add current to global score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    // score0El.textContent = scores[activePlayer];
    currentScore = 0;
    // 2. Check if score > 100, if yes, player wins, if not, switch player
    if (scores[activePlayer] > 100) {

    } else {
        switchPlayer();
    }

})
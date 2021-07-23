'use strict';

console.log(document.querySelector('.message').textContent);

let message = (document.querySelector('.message').textContent =
  'Correct number');

let number = (document.querySelector('.number').textContent = 15);
let score = (document.querySelector('.score').textContent = 15);
// let input = document.querySelector('.guess').value;
let btn = document.querySelector('.check');
console.log(btn);

btn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess);

  if (!guess) {
    console.log('No number !');
  }
});

// Remember, we're gonna use strict mode in all scripts now!
"use strict";

const one = [17, 21, 23];
const two = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let string = "";

  for (let i = 0; i < arr.length; i++) {
    string += `${arr[i]}° in ${i + 1} days... `;
  }
  return string;
};

console.log(printForecast(one));
console.log(printForecast(two));

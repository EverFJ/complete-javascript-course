'use strict';

function calcAge(birthYear) {
    const age = 2017 - birthYear;

    function printAge() {
        const output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);
        if (birthYear <= 2000 && birthYear >= 1983) {
            const str = `Oh, and you're a millenial ${firstName}`
            console.log(str);
        }
    }
    printAge();
    return age;
}

const firstName = "François";
// console.log(printAge())
calcAge(1986);
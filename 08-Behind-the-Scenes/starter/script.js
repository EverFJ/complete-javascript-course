'use strict';

// We can create several variables with the same name if they have different scopes.
// They're different variables then, even with the same names.

function calcAge(birthYear) {
    const age = 2017 - birthYear;

    function printAge() {
        let output = `${firstName}, you are ${age}, born in ${birthYear}`
        console.log(output);
        if (birthYear <= 2000 && birthYear >= 1983) {
            var millenial = true;
            // Creating NEW variable with the same name as outer's scope variable
            const firstName = "Steve";
            const str = `Oh, and you're a millenial ${firstName}`;
            console.log(str);

            function add(a, b) {
                return a + b;
            }
            add(5, 2) // functions are block scoped in strict mode, function scoped otherwise

            // Reassigning outer scope variable
            output = "NEW OUTPUT!"; // Add const at the beginning and check the result

        }
        console.log(output);
        // console.log(millenial)
        // add(5, 2);
    }
    printAge();
    return age;
}

const firstName = "François";
// console.log(printAge())
calcAge(1986);
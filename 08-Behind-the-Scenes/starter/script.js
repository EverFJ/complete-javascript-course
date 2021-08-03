'use strict';

// SCOPE
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


// HOISTING
console.clear();

// Variables
console.log(me);
// // console.log(job);
// console.log(year);

var me = "François";
let job = "developer";
const year = 1986;

// Functions
console.log(addDecl(2, 2)); // Only one we can use before declaration
console.log(addExpr(2, 2)); // Basically a variable
console.log(addArrow(2, 2)); // Basically a variable

function addDecl(a, b) {
    return a + b
}
const addExpr = function(a, b) {
    return a + b
}
const addArrow = (a, b) => a + b;
var addArrow2 = (a, b) => a + b; // is gonna be undefined


// Example
if (!numberOfProduct) {
    deleteShoppingCart()
}

var numberOfProduct = 10; // is gonna be undefined because of hoisting, so falsy...

function deleteShoppingCart() {
    console.log("All products deleted!")
}
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
// console.log(addExpr(2, 2)); // Basically a variable
// console.log(addArrow(2, 2)); // Basically a variable

function addDecl(a, b) {
    return a + b
}
const addExpr = function(a, b) {
    return a + b
}
const addArrow = (a, b) => a + b;
var addArrow2 = (a, b) => a + b; // is gonna be undefined


// Bad example
if (!numberOfProduct) {
    deleteShoppingCart()
}

var numberOfProduct = 10; // is gonna be undefined because of hoisting, so falsy...

function deleteShoppingCart() {
    console.log("All products deleted!")
}

// Best practice
let numProduct = 10;
// function declaration or assignation or arrow
if (!numProduct) deleteShoppingCart();

var x = 1; // Accessible via window object
let y = 2; //
const z = 3; //

console.clear();
console.log(x === window.x);
console.log(y === window.y);
console.log(z === window.z);

// This keyword
console.clear();
console.log("this in globla scope", this); // Window (global object)

const calcAge2 = function(birthYear) {
    console.log(2037 - birthYear)
    console.log("this in const fonction : ", this); // undefined in strict mode, global object otherwise
}
calcAge2(1986);

const calcAgeArrow = birthYear => {
    console.log(2037 - birthYear)
    console.log("this in arrow fonction : ", this); // Lexical this keyword = this keyword of the parent scope =  Window object
}
calcAgeArrow(1986);

const jonas = {
    year: 1986,
    calcAgeFunc: function() {
        console.log("this in a method : ", this) // this keyword points to the object that is calling the method
        console.log("Age en 2037 : ", 2037 - this.year)
    }
}
jonas.calcAgeFunc();

const matilda = {
    year: 2017,
}

matilda.calcAgeFunc = jonas.calcAgeFunc;
matilda.calcAgeFunc();

const f = jonas.calcAgeFunc;
// f(); // the f function does not belong to an object, therefore, the this keyword inside is gonna be undefined

// Regular functions VS Arrow funtion

console.clear();
const doe = {
    firstName: "John",
    year: 1990,
    calcAge: function() {
        console.log("This inside a method : ", this)
        console.log("The age is : ", 2037 - this.year)
    },
    greet: () => console.log(`Hello ${this.firstName}`)
}
doe.calcAge();
doe.greet();
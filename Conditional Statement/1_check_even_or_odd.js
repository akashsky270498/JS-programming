//Write a program that checks if a number is even or odd.
"use strict"

let num = 21;

if (num % 2 === 0) {
    console.log(`${num} is an Even number`);
} else {
    console.log(`${num} is an Odd number`); // => 21 is an Odd number
}


let number = 10;
// using ternary operator
number % 2 === 0 ? console.log(`${number} is an Even number`) : console.log(`${number} is an Odd number`);

//output: 10 is an Even number
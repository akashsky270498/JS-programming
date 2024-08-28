//Create a function sum that takes two numbers as arguments and returns their sum.

function sum(num1, num2) {
    return num1 + num2;
}

console.log("Sum is: ", sum(2, 6)); // => Sum is:  8

const addition = (num1, num2) => (num1 + num2);

const add = addition(7, 2);
console.log("sum = ",add) // => sum = 9

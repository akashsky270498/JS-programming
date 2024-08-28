// Write a program that takes three numbers as input and prints the largest of the three numbers.
let num1 = 10;
let num2 = 20;
let num3 = 17;

const largestNumber = Math.max(num1, num2, num3);

console.log("The largest number is: ", largestNumber); // => The largest number is:  20


if (num1 > num2 && num1 > num3) {
    console.log("The largest number is: ", num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("The largest number is: ", num2);
} else {
    console.log("The largest number is: ", num3);
}

//output: The largest number is:  20
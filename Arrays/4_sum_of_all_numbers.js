//Sum of Array Elements: Write a function that takes an array of numbers as input and returns the sum of all elements.

function sumOfAllElements(numbers) {
    let sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log("Sum of all elements of an array: ", sumOfAllElements([1, 2, 4, 5, 6, 7, 8, 9, 0, 12, 31, 54, 32, 21, 45]))
//output: Sum of all elements of an array:  237

//Using Arrow Function & forEach Loop:-
const sumOfArrayElements = (numbers) => {
    let sum = 0;
    for (const number of numbers) {
        sum = sum + number;
    }
    return sum;
}

const result = sumOfArrayElements([1, 2, 4, 5, 6, 7, 8, 9, 0, 12, 31, 54, 32, 21, 45, 5])
console.log("Sum of an elements of an Array using => fun and forEach loop:- ", result)
// output: Sum of an elements of an Array using => fun and forEach loop:-  242
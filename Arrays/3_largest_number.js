//Write a program that finds the largest number in an array.
const arr = [67, 34, 234, 67, 4, 33, 2222, 44, 95];


let largestNumber = Math.max(...arr);
console.log("Largest Number in an Array: ", largestNumber); // => 2222

let maxNumber = arr[0];

for (i = 0; i < arr.length; i++) {
    if (arr[i] > maxNumber) {
        maxNumber = arr[i];
    }
}
console.log("Max. no. in an Array: ", maxNumber); // => 2222



let smallestNumber = Math.min(...arr);
console.log("Smallest Number in an Array: ", smallestNumber); // => 2222

let minNumber = arr[0];

for (let j = 0; j < arr.length; j++) {
    if (arr[j] < minNumber) {
        minNumber = arr[j];
    }
}

console.log("Min. no. in an Array: ", minNumber); // => 4
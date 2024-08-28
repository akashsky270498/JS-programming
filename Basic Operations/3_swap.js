//Write a program to swap the values of two variables using a third variable.
let var1 = 30;
let var2 = 40;
console.log(`Before Swapping: ${var1} & ${var2}`);
let temp= var1;

var1 = var2;
var2 = temp;

console.log(`After Swapping: ${var1} & ${var2}`);
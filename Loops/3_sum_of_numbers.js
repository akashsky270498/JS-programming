//Create a program that calculates the sum of all numbers from 1 to n (where n is a number input by the user).
let n = 10;
let sum = 0;
for (let i = 1; i <= n; i++) {
    sum+=i;
}

console.log("Sum of num:",sum) // => Sum of num: 55

let m = 8;
let total = 0;
let j = 1;
while (j<=m) {
    total+=j;
    j = j + 1;
}
console.log("Total:", total) // => Total: 36

let a = 5;
let add = 0;
let init = 1;

do{
    add+=init;
    init++;
}while(init<=a);
console.log("Add:",add)

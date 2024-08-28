//Create a function that finds the factorial of a given number.

function fact(number) {
    if (number == 0) {
        return 1;
    }

    return number * fact(number - 1);
}

const result = fact(0);
console.log("factorial:", result) // => 120

const factorial = (num) => {
    if (num == 0) {
        return 1;
    }

    return num * factorial(num - 1);
}

const answer = factorial(7);
console.log("Answer : ", answer) // =>  Answer :  5040


let n = 0;
let res = 1;
for (i=1; i<=n; i++) {
    res*=i;
}
console.log(`Factorial of ${n}: ${res}`)

let f = 0;
let mul = 1;
for (i = f; i >=1; i--){
    mul*=i;
}

console.log(mul)
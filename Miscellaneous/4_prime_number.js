const primeNumber = (number) => {
    if (number <= 1) return false;

    for (let i = 2; i < number/2; i++) {
        if (number % i === 0) return false
    }
    return true;
}

console.log("Is 7 is a Prime number??", primeNumber(7));
console.log("Is 10 is a Prime number??", primeNumber(10));
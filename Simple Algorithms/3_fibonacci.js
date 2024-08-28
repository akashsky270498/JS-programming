//Write a program that finds the Fibonacci sequence up to a given number of terms.
function fibonacci(terms) {

    if (terms === 1) return [0];
    if (terms === 2) return [0, 1];

    let sequence = [];
    let a = 0;
    let b = 1;

    for (let i = 0; i <= terms; i++) {
        sequence.push(a);
        let nextTerm = a + b;
        a = b;
        b = nextTerm;
    }
    return sequence;
}

console.log("Fibonacci series: ", fibonacci(10))

const fiboSeries = (terms) => {
    if (terms === 1) {
        return [0];
    }

    if (terms === 2) {
        return [0, 1];
    }

    let sequence = [];
    let a = 0;
    let b = 1;

    for (k = 0; k <= terms; k++) {
        sequence.push(a);
        let nextTerm = a + b;
        a = b;
        b = nextTerm
    }
    return sequence;
}

console.log("Fibonacci series using => function: ", fiboSeries(10))
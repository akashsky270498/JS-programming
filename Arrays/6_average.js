//Average of Array: Write a function that calculates the average of an array of numbers.

function avg(...numbers) {
    let sum = 0;
    for (const value of numbers) {
        sum += value
    }
    return sum / numbers.length
}


console.log("Average: ", avg(23, 456, 789, 98, 765, 4, 56, 9, 54, 76, 67, 8, 98, 76)) // => 184.21428571428572



const average = (...numbers) => {
    const arrAvg = numbers.reduce((acc, num) => (acc += num), 0)
    return (arrAvg / numbers.length).toPrecision(5);
}

const res = average(23, 456, 789, 98, 765, 4, 56, 9, 54, 76, 67, 8, 98, 76)
console.log(res) // => 184.21
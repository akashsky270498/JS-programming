//Find Maximum and Minimum: Create a function that finds the maximum and minimum values in an array.

function findMaxMin(...numbers) {
    let minNumber = numbers[0];
    let maxNumber = numbers[0]
    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] < minNumber) {
            minNumber = numbers[i]
        }
        if (numbers[i] > maxNumber) {
            maxNumber = numbers[i]
        }
    }
    return { minNumber, maxNumber }
}

const result = findMaxMin(123, 4, 56, 7, 87, 5, 43, 212, 34, 5, 6, 78, 987, 65,)
console.log(`Max number from an Array: ${result.minNumber} & Min number from an Array: ${result.maxNumber}`);


//ouput: Max number from an Array: 4 & Min number from an Array: 987

//using Math:

const findMaxAndMin = (...numbers) => {
    const maxNumber = Math.max(...numbers);
    const minNumber = Math.min(...numbers);
    return { maxNumber, minNumber };
}

const results = findMaxAndMin(123, 4, 56, 7, 87, 5, 43, 212, 34, 5, 6, 78, 987, 65,)
console.log(`Max number from an Array: ${results.minNumber} & Min number from an Array: ${results.maxNumber}`);

//using reduce

const getMinMax = (...numbers) => {
    let max = numbers.reduce((max, num) => (max < num ? num : max), numbers[0]);

    let min = numbers.reduce((min, num) => (min > num ? num : min), numbers[0])
    return { max, min };
}

const res = getMinMax(123, 4, 56, 7, 87, 5, 43, 212, 34, 5, 6, 78, 987, 65,)
console.log(`Max number from an Array: ${res.min} & Min number from an Array: ${res.max}`);

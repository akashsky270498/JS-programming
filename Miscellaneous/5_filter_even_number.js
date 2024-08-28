function filterEvenNumber(numbers) {
    return numbers.filter(number => number % 2 === 0)
}

const evenNumbers = [1, 2, 3, 2, 1, 4, 42, 2, 3, 42, 2, 4, 5, 67, 8, 7, 3, 3, 4, 5, 6, 78]
console.log("Even Numbers: ", filterEvenNumber(evenNumbers));

/*
Even Numbers:  [
   2,  2, 4, 42, 2,
  42,  2, 4,  8, 4,
   6, 78
]
*/


const filterEven = (array) => {
    let evenArray = []
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i])
            console.log(evenArray)
        }
    }
    return evenArray;
}

const result = filterEven([1, 2, 3, 2, 1, 4, 42, 2, 3, 42, 2, 4, 5, 67, 8, 7, 3, 3, 4, 5, 6, 78])
console.log(result)
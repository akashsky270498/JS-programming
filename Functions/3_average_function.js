//Write a function that takes an array of numbers and returns the average of those numbers.


function average(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    console.log(sum)
    return sum / arr.length;
}

console.log("The average of number of elements present in an Array: ", average([12, 34, 5, 67, 8, 97, 65, 43])) // => 41.375

//Note: if we are passing array like [1,2,3,4] in params we cant do ...arr, & if we pass array like (1,3,5,6) in params we need to do ...arr

const avgArr = (...arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum / arr.length;
}

const averageOfArray = avgArr(1, 2, 45, 3, 22, 4, 56, 3, 32, 22, 3, 3, 2);

console.log("Average: ", averageOfArray.toPrecision(5)); // => Average:  15.231


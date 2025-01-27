//Write a function that counts the number of occurrences of a specific element in an array.

const countOccurance = (arr, element) => {
    let count = 0;
    for (const num of arr) {
        if (num === element) {
            count++;
        }
    }
    return count
}

const res = countOccurance([1, 23, 4, 2, 1, 3, 44, 2, 1, 23, 44, 2, 11, 2, 3, 43, 2, 12], 99);
console.log("count:", res)

function countOccur(arr, ele) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ele) {
            count = count + 1;
        }
    }
    return count;
}

const result = countOccurance([1, 23, 4, 2, 1, 3, 44, 2, 1, 23, 44, 2, 11, 2, 3, 43, 2, 12], 12);
console.log("count:", result)

//using reduce 

function noOfCount(array, element) {
    return array.reduce((count, current) => {
        return element === current ? count + 1 : count;
    }, 0)
}

const arr = [1, 23, 4, 2, 1, 3, 44, 2, 1, 23, 44, 2, 11, 2, 3, 43, 2, 12];
const targetElement = 44;
console.log(`No. of occurances of ${targetElement}: `, noOfCount(arr, targetElement));

//using filter 
const countOcc = (arr, ele) => {
    return arr.filter(item => ( item === ele)).length
}


const arr1 = [1, 23, 4, 2, 1, 3, 44, 2, 1, 23, 44, 2, 11, 2, 3, 43, 2, 12];
const targetEle = 44;
console.log(`No. of occurances of ${targetEle}: `, noOfCount(arr, targetEle));
//Write a program that removes duplicates from an array.

function removeDuplicates(array) {
    return [...new Set(array)]
}

console.log("Array after removing duplicates: ", removeDuplicates([1, 23, 4, 4, 2, 1, 4, 2, 2, 4, 56, 6])) // => Array after removing duplicates:  [ 1, 23, 4, 2, 56, 6 ]


let arr = [1, 23, 4, 4, 2, 1, 4, 2, 2, 4, 56, 6]
let newArray = [];
for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
        newArray.push(arr[i])
    }
}

console.log(newArray) // => [ 1, 23, 4, 2, 56, 6 ]
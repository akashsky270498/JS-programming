//Write a program that sorts an array of numbers in ascending order.
const arr = [1, 2, 4, 5, 4, 33, 2, 2, 45, 6, 3, 32, 5, 3, 2, 4, 5, 5]

arr.sort((a, b) => a - b)
console.log("Sorted Array: ", arr)

/*
Sorted Array:  [
  1,  2,  2,  2, 2, 3, 3,
  4,  4,  4,  5, 5, 5, 5,
  6, 32, 33, 45
]
*/
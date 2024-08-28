//Write a program that creates an array of numbers and prints each number using a for loop.
let arr = [1,2,3,4,6,7,8,9,0,10,11,12,13];

for(let i = 0; i<arr.length; i++) {
    // console.log(arr[i])
    console.log(`${arr[i]} element is present in ${i} array index`);
}
/*output
1 element is present in 0 array index
2 element is present in 1 array index
3 element is present in 2 array index
4 element is present in 3 array index
6 element is present in 4 array index
7 element is present in 5 array index
8 element is present in 6 array index
9 element is present in 7 array index
0 element is present in 8 array index
10 element is present in 9 array index
11 element is present in 10 array index
12 element is present in 11 array index
13 element is present in 12 array index
*/

let j =0;
while (j<arr.length) {
    console.log(`${arr[j]} element is present in ${j} array index`);
    j+=1;
}
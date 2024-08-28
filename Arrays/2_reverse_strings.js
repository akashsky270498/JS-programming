//Create an array of five strings. Write a program that prints each string in reverse order.
const arrOfStrs = ["Raipur", "Ranchi", "Banglore", "Pune", "Hyderabad"];
for (i = arrOfStrs.length - 1; i >= 0; i--) {
    console.log(arrOfStrs[i].split("").reverse().join());
}

console.log(arrOfStrs.reverse()) // => [ 'Hyderabad', 'Pune', 'Banglore', 'Ranchi', 'Raipur' ]

for (i = 0; i < arrOfStrs.length; i++) {
    console.log(arrOfStrs[i].split("").reverse().join())
}

/*
d,a,b,a,r,e,d,y,H
e,n,u,P
e,r,o,l,g,n,a,B
i,h,c,n,a,R
r,u,p,i,a,R
*/
//Create a program that asks the user for their age and prints "You are an adult" if they are 18 or older,
//  otherwise print "You are a minor."
let userAge = 21;

userAge >= 18 ? console.log(`You are an adult your age is: ${userAge}`) : console.log(`You are a minor your age is: ${userAge}`)


// output : You are an adult your age is: 21
userAge = 7;

if (userAge >= 18) {
    console.log(`You are an adult your age is: ${userAge}`)
} else {
    console.log(`You are a minor your age is: ${userAge}`)
}

//output : You are a minor your age is: 7
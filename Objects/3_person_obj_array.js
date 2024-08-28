//Create an array of objects, each representing a person with properties for name and age. Write a program that prints the names of all people who
//  are 18 or older.

const personDetails = [
    {
        name: "Jhonny",
        age: 20
    },

    {
        name: "Shikahr",
        age: 12
    },

    {
        name: "Micky",
        age: 32
    }
]

for (i = 0; i < personDetails.length; i++) {
    if (personDetails[i].age > 18) {
        console.log(`${personDetails[i].name} is 18 years or older`)
    }
}

/*
Jhonny is 18 years or older
Micky is 18 years or older
*/
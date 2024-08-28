// Write a function that takes an object and a string as arguments and checks if the object has a property with that name.

const hasProperty = (object, name) => {
    return object.hasOwnProperty(name);
}

let person = { name: "Alice", age: 23 };

console.log("Has 'name' property: ", hasProperty(person, "name")); // => Has 'name' property:  true
console.log("Has 'email' property: ", hasProperty(person, "email")); // => Has 'email' property:  false

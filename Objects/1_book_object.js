//Create an object to represent a book. It should have properties for the title, author, and year. Print each property.
let book = {
    title: "The power of your subcouncious mind",
    author: "Richard murphy",
    year: 2007
}

console.log(book.title)
console.log(book.author)
console.log(book.year)
console.log(book["title"]) // => The power of your subcouncious mind
console.log(book["author"]) // => Richard murphy
console.log(book["year"]) // => 2007
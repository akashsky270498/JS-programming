

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random Number:", randomNumber(10, 20))

const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random: ", random(1, 50))
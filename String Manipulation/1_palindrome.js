//Write a program that checks if a given string is a palindrome (reads the same forward and backward).

function isPalindrome(word) {
    let reverseWord = word.split("").reverse().join("")
    return word === reverseWord;
}

console.log("Is 'racecar' a palindrome?", isPalindrome("racecar")); // true
console.log("Is 'madam' a palindrome?", isPalindrome("madam")); // true
console.log("Is 'hello' a palindrome?", isPalindrome("hello")); // false

function recursivePalindrome(newWord) {
    if (newWord.length <= 1) {
        return true;
    }

    if (newWord[0] !== newWord[newWord.length - 1]) {
        return false;
    }

    return recursivePalindrome(newWord.split(1, -1));
}


let newWord = "library";
if (recursivePalindrome(newWord)) {
    console.log(newWord + " is a palindrome");
} else {
    console.log(newWord + " is not a palindrome"); // => library is not a palindrome   
}
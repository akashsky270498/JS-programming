// Create a program that counts the number of vowels in a given string.
function countVowels(word) {
    let vowels = "aeiouAEIOU";
    let vowelsCount = 0
    for (let i = 0; i <= word.length; i++) {
        if (vowels.includes(word[i])) {
            vowelsCount++;
        }
    }
    let consonantsCount = word.length - vowelsCount;
    return { vowelsCount, consonantsCount };
}

const result = countVowels("Ostrich");
console.log(`No of Vowels: ${result.vowelsCount} & No of consonants: ${result.consonantsCount}`); // => No of Vowels: 2 & No of Consonants: 5
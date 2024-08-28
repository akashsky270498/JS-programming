
const characterCount = (sentence, occurance) => {
    let count = 0;
    for (let i = 0; i <= sentence.length; i++) {
        // if (sentence[i] === occurance) {
        //     count++;
        // }
        if (sentence[i] === occurance) {
            count = count + 1;
        }
    }
    return count;
}

const result = characterCount("New Delhi is the capital of India", "a");
console.log("Occurance count: ", result);
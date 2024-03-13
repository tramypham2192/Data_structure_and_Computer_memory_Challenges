alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function pangramSentence(s) {
    const uniqueChar = {};
    const chars = s.replace(/ /g,'').split("");

    let regex = /^[a-zA-Z]+$/;

    for (char of chars){
        if ((!(char in uniqueChar) && regex.test(char))) {
            uniqueChar[char.toUpperCase()] = 1; 
        }
    }
    sortUniqueArr = (Object.keys(uniqueChar)).sort();
    return (JSON.stringify(sortUniqueArr)) == JSON.stringify(alphabets);
}

console.log(pangramSentence("I like cats, but not mice"));
console.log(pangramSentence("The quick brown fox jumps over the lazy dog!"));

// RUNTIME is O(n) as there is only one loop to iterate through all elements of the array
// SPACE COMPLEXITY is 0(n) as there is 1 data structured created


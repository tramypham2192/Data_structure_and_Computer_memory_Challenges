function longestWord(arr) {
    if (arr.length == 0){
        return 0;
    }
    let maxLen = 0;
    for (word of arr) {
        if (word.length > maxLen){
            maxLen = word.length;
        }
    }
    return maxLen;
}

console.log(longestWord(["hi", "hello"]));

// RUNTIME is O(n) as there is only one loop to iterate through all elements of the array
// SPACE COMPLEXITY is O(1) as there is no data structure created
function uniqueCharacters(s) {
    uniqueArr = [];
    for (char of s.split("")) {
        if (uniqueArr.includes(char)){
            return false;
        }
        else {
            uniqueArr.push(char);
        }
    }
    console.log(uniqueArr);
    return true; 
}

console.log(uniqueCharacters("Monday"));
console.log(uniqueCharacters("Moonday")); 

// RUNTIME is O(n) as there is only one loop iterating through all characters of the string
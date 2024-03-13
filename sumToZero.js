function sumToZero(arr){ 
    for (let i = 0; i < arr.length; i++){
        if (arr.includes(arr[i] * (-1))){
            return true;
        }
    }
    return false;
}

console.log(sumToZero([1])); 
console.log(sumToZero([1, 2, 3])); 
console.log(sumToZero([2, 3, -2])); 

// RUNTIME is O(n) as the code contains only one loop to iterate through all elements of the array

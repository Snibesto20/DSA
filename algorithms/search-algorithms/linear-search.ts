// Linear search

// Notes
// - O(n) time complexity.
// - Loops through every element checking if matches the target.
// - Extremely inefficient and non practical.

function linearSearch(arr: number[], target: number): number {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === target) {
            return i
        }
    }
    return -1
}

// Testing
linearSearch([2,13,5,1,-5,27,14,2], 27)
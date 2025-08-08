// Bubble sort

// Notes
// - O(n²) time complexity.
// - Performs many swaps.
// - Considered as slowest practical algorithm.

function bubbleSort(arr: number[]): number[] {
    for(let i = 0; i < arr.length -1; i++) { 
        for(let j = 0; j < arr.length - 1 - i; j++) {
            // If the left element is smaller than the right one then swap them.
            if(arr[j] > arr[j + 1]) {
                const t = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = t
            }
        }
    }
    return arr
}

// Testing
export const sortedArr = bubbleSort([2,13,5,1,-5,27,14,2]);
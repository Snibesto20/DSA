// Selection sort

// Notes
// - O(n²) time complexity.
// - Simple, yet slow algorithm therefore rarely used.
// - Divides the array into a sorted and unsorted part.
// - Minimizes swaps.

function selectionSort(arr: number[]): number[] {
    for(let i = 0; i < arr.length; i++) {
        // Find if a smaller value than i exists
        let smallest = i
        
        for(let j = i + 1; j < arr.length; j++) {
            if(arr[j] < arr[smallest]) {
                smallest = j
            }
        }

        // If there was a smaller value than i, swap them.
        if(arr[i] > arr[smallest]) {
            const t = arr[i]
            arr[i] = arr[smallest]
            arr[smallest] = t
        }
    }

    // Returning the result
    return arr
}

// Testing
export const sortedArr = selectionSort([2,13,5,1,-5,27,14,2]);
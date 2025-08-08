// Binary search

// Notes
// - O(log n) time complexity.
// - Works for sorted arrays only.
// - Max efficiency possible without hash tables and such.

function binarySearch(arr: number[], target: number): number {
    let leftIndex = 0
    let rightIndex = arr.length - 1
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2)

    while ((leftIndex <= rightIndex)) {
        if(target === arr[middleIndex]) {
            return middleIndex
        }
        else if(target > arr[middleIndex]) {
            leftIndex = middleIndex + 1
            middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        }
        else {
            rightIndex = middleIndex -1
            middleIndex = Math.floor((leftIndex + rightIndex) / 2)
        }
    }

    return -1
}

// Testing
binarySearch([-5,1,2,2,5,13,14,27], 27)
// Selection Sort

// Find the lowest value an array and move it to the front of the array.

// Working:-

// 1. Go through the array to find the lowest value.
// 2. Move the lowest value to the front of the unsorted part of the array.
// 3. Go through the array again as many times as there are values in the array.

function selectionSort(arr) {
    let n = arr.length;  // Get the length of the array
    
    for (let i = 0; i < n - 1; i++) {  // Outer loop from 0 to n-2
        let minIndex = i;  // Assume the first element is the minimum
        
        for (let j = i + 1; j < n; j++) {  // Inner loop from i+1 to n-1
            if (arr[j] < arr[minIndex]) {  // Find the actual minimum element
                minIndex = j;  // Update minIndex
            }
        }
        
        if (minIndex !== i) {  // Swap only if minIndex is different from i
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        }
    }
    return arr;  // Return the sorted array
}

// Example usage:
const array = [64, 25, 12, 22, 11];
console.log("Sorted array:", selectionSort(array));



// Insertion Sort 

// Algorithm uses one part of the array to hold the sorted values, and the other part of the array hold values 
//that are not sorted yet.

// Working:-

// 1. Take the first value from the unsorted part of the array.
// 2. Move that value into the correct place in the sorted part of the array.
// 3. Go through the unsorted part of the array again as many times as there are values.


function insertionSort(arr) {
    let n = arr.length;  // Get the length of the array
    
    for (let i = 1; i < n; i++) {  // Outer loop from 1 to n-1
        let key = arr[i];  // Current element to be inserted
        let j = i - 1;
        
        // Inner loop to shift elements of arr[0..i-1], that are greater than key, to one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        
        arr[j + 1] = key;  // Insert the key at the correct position
    }
    return arr;  // Return the sorted array
}

// Example usage:
const array = [64, 25, 12, 22, 11];
console.log("Sorted array:", insertionSort(array));


// While Insertion Sort is not suitable for large datasets due to its 
// time complexity in the average and worst cases, it is highly effective for small, nearly sorted, or 
// online datasets.Its simplicity, stability, and low memory overhead make it a valuable tool in the right
// circumstances.







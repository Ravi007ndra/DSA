// Couting Sort:-

// the counting sort algorithm sorts an array by counting the number of times each value occurs.

// Working:-

// 1. Create a new array for counting how many there are of the different values.
// 2. Go through the nneds to be sorted.
// 3. For each value, cout it by increasing array at the corresponding index.
// 4. After counting the values, go through the counting array to create the sorted array.
// 5. For each count in the counting array, create the correct number of elements, with values that correspond to the 
//    to the counting array index.

// Conditions:-

// 1. Interger values.
// 2. Non Integer values.
// 3. Limited range of values.

// Time Complexity:-

// 1. Worst case: O(n*n)
// 1. Avarage case: O(n+k)
// 1. Best case: O(n)


function countingSort(arr) {
    // Step 1: Find the maximum value in the array
    const max = Math.max(...arr);
    
    // Step 2: Create a count array with length max + 1 and initialize with 0
    const count = new Array(max + 1).fill(0);
    
    // Step 3: Count each element in the original array
    for (let num of arr) {
        count[num]++;
    }
    
    // Step 4: Build the sorted array using the count array
    let sortedIndex = 0;
    for (let i = 0; i <= max; i++) {
        while (count[i] > 0) {
            arr[sortedIndex++] = i;
            count[i]--;
        }
    }
    
    return arr;
}

// Example usage
const unsortedArray = [4, 2, 2, 8, 3, 3, 1];
const sortedArray = countingSort(unsortedArray);
console.log(sortedArray); // Output: [1, 2, 2, 3, 3, 4, 8]

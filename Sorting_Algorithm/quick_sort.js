// Quick Sort

// Quick sort is one of the fastest sorting algorithms and it is besed on "Divide and Conquer Algorithm".

// Working:-

// 1. Choose a value in the array to be the pivot element.
// 2. Order the rest of the array so that lower value than the pivot element on the left and higher value are on the right.
// Swap the pivot element with the first element of the higher value so the the pivot element lands in between the lower and higher value.

// Time Complexity:-
// 1. Worst Case :- O(n*n)
// 2. Avarage case :- O(n log (n))
// 3. Best Case: Ω (n log (n))


function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    const pivot = array[array.length - 1];
    const left = [];
    const right = [];

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] < pivot) {
            left.push(array[i]);
        } else {
            right.push(array[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Example usage
const unsortedArray = [34, 7, 23, 32, 5, 62];
const sortedArray = quickSort(unsortedArray);
console.log(sortedArray); // Output: [ 5, 7, 23, 32, 34, 62 ]

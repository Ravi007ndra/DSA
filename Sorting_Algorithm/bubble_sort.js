// bubble sort: - 

// algorithm that sorts an array from the lowest value to the highest value 

// Bubble sort can be effectively used for small datasets, nearly sorted data, or educational purposes.
// ex:- [1, 3, 2, 5, 4];
// time complexity :- O(n*n)

let arr = [3, 11, 34, 333, 56, 23, 1, 33, 78, 0];
function bubble_Sort(arr) {
    let a = b = c = null;
    let i = 0;
    let n = 0;
    for (i = 0; i < arr.length; i++){
        for (n = 0; n < arr.length; n++){
            a = n; b = n + 1;
            if (arr[a] > arr[b]) {
                let c = arr[a];
                arr[a] = arr[b]
                arr[b]=c
            }
        }
    }
    console.log(arr)
}

bubble_Sort(arr)

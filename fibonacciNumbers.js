//loop
function fibonacciNumbers(nthNum) {
  let arr = [0, 1];
  for (let i = 0; i < nthNum - 1; i++) {
    arr[i + 2] = arr[i] + arr[i + 1];
  }
  if (arr.length > nthNum) {
    console.log(arr[nthNum - 1], arr.length);
  }
}
fibonacciNumbers(9);

// recursive function
function f(n) {
  if (n <= 1) {
    return n;
  }
  return f(n - 1) + f(n - 2);
}

console.log(f(6));

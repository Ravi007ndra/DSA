// find the lowest value from array :-

arr = [76, 333, 444, 2, 56, 32];

function findLowestVaue() {
  let c = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (c > arr[i]) {
      c = arr[i];
    }
  }
  return c;
}
console.log(findLowestVaue());

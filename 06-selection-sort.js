
let arr = [12, 32, 11, 33, 4,1,5,2];
console.log(arr);

for (let i = 0; i < arr.length - 1; i++) {
  let minIndex = i;
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[minIndex] > arr[j]) {
      minIndex = j;
    }
  }

  if (minIndex !== i) {
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
}
console.log(arr);


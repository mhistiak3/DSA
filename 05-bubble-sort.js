let arr = [2, 34, 1, 4, 3];
console.log(arr);

for (let i = 0; i < arr.length - 1; i++) {
  let swap = false;
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      swap = true;
    }
  }

  if (!swap) break;
}
console.log(arr);

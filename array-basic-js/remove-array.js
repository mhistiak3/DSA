const arr = [3, 6, 3, 4, 2];
console.log(arr);
const index = 2;
let value = 4;
// arr.shift();
// arr.splice(index, 1);
let findIndex = arr.indexOf(value);

if (findIndex !== -1) {
  arr.splice(findIndex, 1);
}

// for (let i = index; i <= arr.length - 1; i++) {
//   arr[i] = arr[i + 1];
// }
// arr.length = arr.length -1
console.log(arr);

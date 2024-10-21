let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newElement = 50;
let index = 3;

for (let i = arr.length - 1; i >= 0; i--) {
  if (i >= index) {
    arr[i + 1] = arr[i];
    if (i === index) {
      arr[index] = newElement;
    }
  }
}
//
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   newArr.push(arr[i]);
//   if (i === index) {
//     newArr.push(newElement);
//   }
// }
// console.log(arr);

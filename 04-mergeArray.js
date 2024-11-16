// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [66,4, 3,10];
// let arr3 = [];

// for (let i = 0; i < arr1.length; i++) {
//   arr3[i] = arr1[i];
// }
// for (let i = 0; i < arr2.length; i++) {
//   arr3[arr1.length + i] = arr2[i];
// }
// // arr3 = arr1.concat(arr2);
// console.log(arr3);

// merge and sorted array
let arr1 = [1, 14, 33, 54, 65];
let arr2 = [4, 26, 98, 34, 66, 29, 7, 5];
let arr3 = [];

let num1 = 0;
let num2 = 0;
let num3 = 0;

while (num1 < arr1.length && num2 < arr2.length) {
  if (arr1[num1] < arr2[num2]) {
    arr3[num3] = arr1[num1];
    num1++;
  } else {
    arr3[num3] = arr2[num2];
    num2++;
  }
  num3++;
}
while (num2 < arr2.length) {
 arr3[[num3]]=arr2[num2]
 num2++
 num3++
}
while (num1 < arr1.length) {
  arr3[num3] = arr1[num1];
  num1++;
  num3++;
  
}
console.log(arr3);

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [66,4, 3,10];
let arr3 = [];

for (let i = 0; i < arr1.length; i++) {
  arr3[i] = arr1[i];
}
for (let i = 0; i < arr2.length; i++) {
  arr3[arr1.length + i] = arr2[i];
}
// arr3 = arr1.concat(arr2);
console.log(arr3);

let arr = [54, 24, 2, 4, 66, 2, 54];
console.log(arr);
// arr = [...new Set(arr)];
// arr = arr.filter((item, index) => arr.indexOf(item) === index);
// let newArr = [];
// arr.forEach((element) => {
//   if (!newArr.includes(element)) {
//     newArr.push(element)
//   }
// });

arr = arr.reduce(
  (acc, elem) => (arr.includes(elem) ? acc : [...acc, elem]),
  []
);
console.log(arr);

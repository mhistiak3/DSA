const array = [3, 6, 3, 4, 2];
// array.push(6);
// array.unshift(0);
let newElement = 50;
let index = 3;

// array.splice(index, 0, newElement);
console.log(array);

for (let i = array.length - 1; i >= 0; i--) {
  if (i >= index) {
    array[i + 1] = array[i];
    if (i === index) {
      array[i] = newElement;
    }
  }
}
console.log(array);

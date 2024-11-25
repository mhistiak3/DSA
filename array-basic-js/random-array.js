//  Using Fisher-Yates Shuffle Algorithm

const arr = [4, 3, 7, 2, 6];
console.log(arr);

for (let i = arr.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
console.log(arr);

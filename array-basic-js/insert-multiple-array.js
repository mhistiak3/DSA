// JavaScript – Inserting Multiple Items at Specific Index in JS Array
let a = [10, 20, 30, 40, 50];
let idx = 2;
let a2 = [99, 100, 101];

for (let i = a.length; i > idx; i--) {
  a[i + a2.length - 1] = a[i - 1];
}

for (let i = 0; i < a2.length; i++) {
  a[idx + i] = a2[i];
}

console.log(a);
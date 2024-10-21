// Linear Search Algorithm
let arr = [55,33,20,80,12,73,12];

let searchItem = 12
const indices =[]
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchItem) {
        console.log(searchItem, " found at index ", i);
        indices.push(i)
    }
}






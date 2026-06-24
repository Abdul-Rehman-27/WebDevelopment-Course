// without reduce method
let arr = [1, 4, 6, 3, 2, 10];
let max = arr[0];

for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
        max = arr[i];
    }
}
console.log(max)

// with reduce method
let maxVal = arr.reduce((max, el) => {
    if (max < el) {
        return el;
    } else {
        return max;
    }
})
console.log(maxVal);

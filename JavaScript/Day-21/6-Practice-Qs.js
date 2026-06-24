// Qs: Check if all numbers in our array are multiplr of 10 or not

let arr = [10, 9, 30, 40, 50];
let result = arr.every((el) => el % 10 == 0);
console.log(result);

// Qs: Create a function to find the min number in an array

function getMin(arr) {
    let min = arr.reduce((min, el) => {
    if ( min < el) {
        return min;
    } else {
        return el;
    }
});
    return min;
}
let numbers = [50, 30, 60, 40]; 
console.log(getMin(numbers));
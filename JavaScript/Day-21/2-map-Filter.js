// //-------------map()-------------------
// /**Transforms each element of an array and returns a new array.
// **/
// function square(num) {
//     return num * num;
// }

// function squareArr(func, arr) {
//     let newArr = arr.map(func);
//     return newArr;
// }


// console.log(squareArr(square, [1,2,3,4,5]));

// //-------------filter()----------------
// /**
// Filters elements based on a condition and returns a new array with elements that satisfy the condition.
// **/

// function evenArray(arr) {
//     let newArr = arr.filter( (n) => {
//         return n % 2 == 0;
//     });
//     return newArr;
// }

// const nums = [1, 2, 3, 4, 5, 6];
// console.log(evenArray(nums));

const sqrArr = (arr) => {
    return arr.map(n => n * n); // Added "n =>" here
}

console.log(sqrArr([1, 2, 4, 5])); // Output: [1, 4, 16, 25]
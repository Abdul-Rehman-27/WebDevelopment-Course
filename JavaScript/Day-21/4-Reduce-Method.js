//------------reduce() method----------
/** 
Reduces an array to a single value 
*/

// ==> arr.reduce(reduce function with 2 variables for (accumulator, element))

//-Example
let arr = [1, 2, 3, 4];
let val = arr.reduce((res, el) => {
    return res + el;
})
console.log(val);  // 10 
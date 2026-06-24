//-----------Slice Method in Array-------------------
/**The slice() method is used to take out a portion of an array and return it as a new array. It does't change original array.**/

//-Syntax
//-array.slice(startIndex, endIndex)

//-Example 1: Basic slicing
let fruits = ["apple", "banana", "mango", "orange", "grapes"];

let selectedFruits = fruits.slice(2, 4);    // 4 excluded
console.log(selectedFruits);

//-Example 2: Slice from a position
console.log(fruits.slice(2));

//-Example 3: Negative index
console.log(fruits.slice(-2));  // -2 = arr.length-2=> 3

//-Example 4: Copy entire array
let copy = fruits.slice();
console.log(copy);
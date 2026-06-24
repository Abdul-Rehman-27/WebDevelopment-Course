//------------every method()---------------
/**
-Return true if every element of array gives true for some function. Else returns false.
**/

//-Syntax
// ==> arr.every(some function definition or name);

//-Example
let arr1 = [2, 4, 6, 8];
let result1 = arr1.every(num => num % 2 === 0);
console.log(result1);  // true

//-Example
let arr2 = [2, 3, 6, 8];
let result2 = arr2.every(num => num % 2 === 0);
console.log(result2);  //false

//---------------some() method--------------
/** 
-Return true if some elements of array give true for some function. Else returns false
**/

//-Example
let arr3 = [1, 3, 5, 8];
let result3 = arr3.some(num => num % 2 === 0);
console.log(result3);  // true

//-Example
let arr4 = [1, 3, 5];
let result4 = arr4.some(num => num % 2 === 0);
console.log(result4);  // false
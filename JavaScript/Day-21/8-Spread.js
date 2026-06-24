//------------Spread----------
/**
The spread operator (...) expands (spreads out) elements of:
-Arrays
-Objects
-Strings
Into individual values
**/

//-Example
let arr = [2, 3, 1, 5, 0];
let min = Math.min(...arr); // now all values of arr will be taken as individual argument
console.log(min);

//-Spread with string
console.log(..."Abdul Rehman"); // all chars are printed seprately

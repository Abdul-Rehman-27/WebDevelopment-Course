//------------indexOf method------------------
/** 
-The indexOf() method is used to find the position (index) of an element in an array.
**/

//Syntax
//-array.indexOf(value, startIndex)

//-Example
let fruits = ["apple", "banana", "mango"];
console.log(fruits.indexOf("banana")); // return 1

//------------------included()----------------------
/**The includes() method is used to check whether a value exists in an array (or string).**/

//Syntax
//-array.includes(value, startIndex)

//-Example
console.log(fruits.includes("banana")); // true
console.log(fruits.includes("orange")); // false
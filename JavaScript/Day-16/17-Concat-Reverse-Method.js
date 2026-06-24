//---------------concat() method------------------
/** 
The concat() method is used to join (merge) two or more arrays into a new array. It does't change original array.
**/

//-Syntax
//-array1.concat(array2, array3, ...)

//-Example 1: Merge two fruit arrays
let fruits1 = ["apple", "banana"];
let fruits2 = ["mango", "orange"];

let allFruits = fruits1.concat(fruits2);
console.log(allFruits);   

//-Example 2: Add new fruits
let fruits = ["apple", "banana"];
let newFruits = fruits.concat("grapes", "pear");

console.log(newFruits);

//---------------reverse() method------------
/**The reverse() method reverses the order of elements in an array. It change original array.**/

//-Syntax 
//-array.reverse()

//-Example 1: Reverse fruit list
fruits.reverse();
console.log(fruits);

//-Example 2: Return value
let reversedFruits = fruits.reverse();
console.log(reversedFruits);
//-------------sort() method----------------------
/** 
-The sort() method is used to arrange array elements in order. It changes the original array 
**/

//-Syntax
//array.sort()

//-Example
let fruits = ["banana", "apple", "mango", "orange"];
fruits.sort();
console.log(fruits);

//-Example
let chars = ['r', 'a', 'm'];
chars.sort();
console.log(chars);

//-Example
let marks = [90, 10, 100, 95];
marks.sort();
console.log(marks); // output: [ 10, 100, 90, 95 ] (This happens because numbers are sorted as strings. In utf-16 code)

//------------------reverse() method-----------------------
/** 
-The reverse() method is used to reverse the order of elements in an array.
➡ It changes the original array
**/

//-Syntax
//array.reverse()

//-Example
let colors = ["red", "blue", "green"];
console.log(colors.reverse());

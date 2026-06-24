//-----------Constant Variable------------
const Name = "AR";
Name = "RA";
console.log(Name);  // error: Assignment to constant variable.

//-----------Constant Array----------------
/** 
-an array declared with the const keyword has a constant reference, meaning the variable cannot be reassigned to a new array. However, the contents of the array can still be modified 
**/

//-Example
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);   // will not give error in case of array

arr = [1, 2, 3];
console.log(arr);   // arr = [1, 2, 3];
console.log(arr);   // 
console.log(arr);   // now will give error because const means the array cannot be replaced with a new one

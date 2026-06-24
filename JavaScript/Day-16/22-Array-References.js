//-----------------Array References-----------------
/** 
-In JavaScript, arrays are reference types.
This means variables don’t store the array itself, they store a reference (address) to the array in memory.
**/

console.log([1]==[1]);  // False (bcz addresses are different)

let arr1 = [1];     //suppose => we ask array 1 for value 1 it has not exact value 1 it has the memory address where one is stored
let arr2 = [1];

let arr = ['a', 'b', 'c'];
let arropy = arr;
console.log(arr == arropy); // now its return true

arr.push('d');
console.log("Array:", arr);   // but change will refelect in arrCopy
console.log("Copied Array:", arropy);

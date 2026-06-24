//------------Slice Method----------------
/** 
The slice() method is used to extract a part of a string and returns a new string.
It does not change the original string.
**/

let str = 'ILoveCoding';
console.log(str.slice(5)); // return Coding
console.log(str.slice(1,5)); // return Love (5 exlcuded)

//-Negative Slicing  str.slice(-num) = str.slice(length-num)
console.log(str.slice(-1)); //  11-1 -> 10 (return g)
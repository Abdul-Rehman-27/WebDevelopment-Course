// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
/**
For example: for array [7, 9, 0, -2] and n=3
Print, [7, 9, 0] **/

let arr = [7, 9, 0, -2];
let n = 3;
let output = arr.splice(0, n);
console.log(output);

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number].
/**
For example: for array [7, 9, 0, -2] and n=3
Print, [7, 9, 0] **/

let arr1 = [7, 9, 0, -2];
let n1 = 2;
let output1 = arr1.splice(arr1.length-n1);
console.log(output1);

// Qs3. Write a JavaScript program to check whether a string is blank or not.

let str = "Abdul Rehman";

if (str.trim() == "") {
    console.log("String is blank");
} else {
    console.log("String is not blank");
}

// Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.

let idx = 1;
if (str[idx] == str[idx].toLowerCase()) {
    console.log("Character is lowercase");
} else {
    console.log("Character is not lowercase");
}

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
let Name = "   Abdul Rehman       "
console.log(Name.trim());

// Qs6. Write a JavaScript program to check if an element exists in an array or not.
let arr2 = ["Hello", 'A', 'R', 1, 2];
let element = 'R';

if (arr2.includes(element)) {
    console.log(`${element} exist in array`);
} else {
    console.log(`${element} doest not exist in array`)
}
// Q1: For the given start state of an array, change it to final form using methods.
/** 
-start: ["january", "july", "march", "august"]
-final: ["july", "june", "march", "august"]
**/

let months = ["january", "july", "march", "august"];
months.shift();      // remove january
months.shift();      // remove july
console.log("After Deletion:", months);
months.unshift("june");  // add june
months.unshift("july");  // add july 
console.log("End Array:", months);
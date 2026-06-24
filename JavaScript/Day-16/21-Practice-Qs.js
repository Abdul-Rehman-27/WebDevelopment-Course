// Q1: For the given start state of an array, change it to final form using splice.
/** 
-start: ["january", "july", "march", "august"]
-final: ["july", "june", "march", "august"]
**/


let months = ["january", "july", "march", "august"]
months.splice(0, 2, "july", "june");
console.log(months);

// Q2: Return the index of "Javascript" from the given array, if it was reversed
let courses = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(courses.reverse().indexOf('javascript'));
//----------------Default Parameters---------------------
/**
Default parameters allow you to assign a default value to a function parameter.
If the user does not pass a value, the default value is used. 
**/

//-Example
function sum(a = 2, b = 7) {
    return a + b;
}

console.log(sum()); // a = 2  b = 7
console.log(sum(7)); // a = 7 b = 7

//-Example
function product(a, b = 7) {
    return a * b;
}
console.log(product(3)); // a = 3  b = 7
console.log(product(2, 5)) // a = 2 b = 5

//-Example
function  substract(a = 2, b) {     // its not correct
    return a - b;
}
console.log(substract(2, 7)); // a = 2 b = 7
console.log(substract(3)); // return (NaN) a = 3 b = undefined (parameters are passed in order in js)

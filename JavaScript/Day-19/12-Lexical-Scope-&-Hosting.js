//-------------What is hoisting?--------------------
/** 
Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their scope before code execution.
**/

//Key points to remember 
/**
1-Hoisting moves declarations to the top
2-var → hoisted and initialized with undefined
3-let & const → hoisted but not accessible before declaration
4-Function declarations → fully hoisted
5-Function expressions → not fully hoisted
**/

//-2nd Point Example (var) 
console.log(a);
var a = 10;  // retrun udefined

//-3rd Point Example (let)
console.log(a);  // ReferenceError
let a = 10;

//-3rd Point Example (const)
console.log(b);  // ReferenceError
const b = 20;

//-4th Point Example (Function Declarations)
sayHello();     // Works perfectly

function sayHello() {
    console.log("Hello!");
}

//-5th Point Example (Function Expression)
sayHello(); //  TypeError

var sayHello = function () {
    console.log("Hello");
};


//-------------What is lexical Scope----------------
/** 
A variable defined outside a function can be accessibe inside another function defined after the variable declaration.
The Opposite is not true.
**/

//-Example:1 (Correct Example)
function outerFunction() {
    let x = 5;
    let y = 6;
    function innerFunction() {
        console.log(x);
        console.log(y);
    }
    innerFunction();
}
outerFunction(); 

//-Example:2 (Correct Example)
function outerFunction() {
    function innerFunction() {
        console.log(x);
        console.log(y);
    }
    let x = 5;  // This is also possible through hoisting
    let y = 6;
    innerFunction();
}
outerFunction();

// Opposite is not true
function outerFunction() {
    let x = 5;     
    let y = 6;
    function innerFunction() {
        let a = 10
        console.log(x);
        console.log(y);
    } 
    console.log(a);     // not acccessible give error
    innerFunction();
}
outerFunction();

// Lexical scope works from 
/** 
-From Outer to inner 
-but not from inner to outer
**/

function outerFunction() {
    let x = 5;     
    let y = 6;
    function innerFunction() {
        let a = 10
        console.log(x);
        console.log(y);
    } 
    console.log(a);     // not acccessible give error
    innerFunction();
}
innerFunction(); // not possible bcz it has block scope




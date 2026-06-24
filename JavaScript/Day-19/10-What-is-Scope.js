//-------------What is Scope----------------
/** 
Scope determines the accessibility of variables, objects, and functions from different parts of the code.
1-Function
2-Block
3-Lexcial 
**/

//------------Function Scope------------
//-Example
function calSum(a, b) {
    let sum = a + b;   // sum is function-scoped
    console.log(sum); // accessible inside function
}

calSum(1, 2); // 3
// console.log(sum);   // error (sum is not accessible outside)


//-Example 
let x = 10; // global scope

function test() {
    let x = 20; // function scope
    console.log(x);
}

test();        // 20
console.log(x); // 10

// key Point: When a same variable exists in both global scope and function scope (like x in above example), JavaScript uses the function-scope variable first.

//-Example
//-Example 
let y = 20; // global scope

function test1() {
    console.log(y);
}

test1();    // return 20   




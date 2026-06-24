//------------What is function Expression------------
/**A function expression is when you store a function inside a variable. These are also known as "nameless" funct**/

//-Example 1
const sum = function(a, b) {
    return a + b;
};

console.log(sum(2, 3)); // 5

//-Example 2
let hello = function() {
    console.log("Hello");
}

// Update hello
hello = function() {
    console.log("Assalam o Alaikum!");
}
hello();
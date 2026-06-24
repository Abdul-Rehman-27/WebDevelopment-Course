//---------------Truthy and Falsey---------
/**
-Everything in JS is true or false(in boolean context)
-This doest't mean thier value itself is false or true, but they are treated as false or true if taken in boolean context

---Falsey Values
false, 0, -0, 0n(Bigint value), ""(empty string), null, undefined, NaN

---Truthy Values
Everything else
**/

//-Falsey Example
let value1 = 0;

if (value1) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
// Output: Falsy

//-Truthy Example
let value2 = "Hello";

if (value2) {
    console.log("Truthy");
} else {
    console.log("Falsy");
}
// Output: Truthy

//-More
console.log(!0);        // true
console.log(!"");      // true
console.log(!"JS");    // false

//-Real life example
let username = "";

if (!username) {
    console.log("Please enter username");
} else {
    console.log("Welcome");
}
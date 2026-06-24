//-------------Method Chaining---------------------
/**
-Using one method after another.Order of execution will be left to right.
**/

//str.toUpperCase().trim()

//-Code Example (Without Method Chaining)
console.log("---------Without Method Chaining---------------")
let msg = "           Hello";
console.log(msg);
let newMsg = msg.trim();
console.log("After Trim:",newMsg);
newMsg = newMsg.toUpperCase();
console.log("After Upper Case:",newMsg);

//-Code Example (With Method Chaining)
console.log("--------------With Method Chaining---------------")
let msg1 = "           Hello";
let newMsg1 = msg1.trim().toUpperCase();
console.log(newMsg1);
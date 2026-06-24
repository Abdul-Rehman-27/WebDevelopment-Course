//----------Try Catch-------------
/** 
It lets you try some risky code, and if an error happens, you catch it and handle it.
Think: “Try this… if it fails, don’t panic — handle it.”

//-Try
The try statement allows you to define a block of code to be tested for errors while it is being executed.

//-Catch
The catch statement allows you to define a block of code to be excuted, if an error occurs in try block 
**/

//-Basic Syntax
try {
  // code that may cause an error
} catch (error) {
  // runs if an error occurs
}

// console.log("Hello");
// console.log("Hello"); // code run correctly till here 
// console.log(a); // throw error (a is not defined)
// console.log("Hello 2");
// console.log("Hello 2");

//Use of try catch
let a = 2
console.log("Hello");
console.log("Hello"); 
try{ // with try catch is must
    console.log(a);  // if a is define print a if not define then catch will be executed
} catch {
    console.log("Caught an error");
}
console.log("Hello 2");
console.log("Hello 2");

//Try catch with e 
console.log("Hey");
console.log("Hey"); 
try{ // with try catch is must
    console.log(b); 
} catch(e) {
    console.log(e);
}
console.log("Hey 2");
console.log("Hey 2");


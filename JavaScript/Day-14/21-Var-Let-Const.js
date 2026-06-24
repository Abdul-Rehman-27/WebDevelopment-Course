//---------------Var----------------
/** 
-Old way to declare variables
-Function-scoped
-Can be re-declared and re-assigned
-Hoisted (can cause bugs)
**/

//-Example
console.log("--------Var---------");
var x = 10;
var x = 20;   // allowed
x = 30;       // allowed
console.log(x); // 30

//---------------Let----------------
/** 
-Modern way (ES6)
-Block-scoped { }
-Cannot be re-declared in same scope
-Can be re-assigned
-Safer than var
**/

//-Example
console.log("-------Let----------")
let y = 10;
// let y = 20;  // error (re-declaration not allowed)
y = 25;       // allowed
console.log(y); // 25

//---------------Let----------------
/** 
-Used for fixed values
-Block-scoped
-Cannot be re-declared
-Cannot be re-assigned
-Must be initialized at declaration
**/

//-Example
console.log("-------Const----------")
const z = 10;
// z = 20;  //error
console.log(z); // 10


// Q: What is meant by JS is dynamic type language?
/** Its mean we don’t need to declare data types, and a variable’s type can change at runtime. **/

//JavaScript-Code Example
let x = 10;      // number
x = "hello";    // now string


//-----------Type Script-------------
/** 
Type Script is static type Language which mean we can't change the datatype of variable at the run time 
**/

//TypeScript-Code Example
let age: number = 20;
age = "twenty";   // ❌Error: Type 'string' is not assignable to type 'number'

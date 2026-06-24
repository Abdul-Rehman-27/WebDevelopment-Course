//-----------------Replace----------------
/** 
-Searces a value in string & returns a new string with the value replced
**/

//-Code Example
let msg = "IloveCoding";
console.log(msg);
console.log(msg.replace("love", 'do')); // Replace Love with do
console.log(msg.replace('o', 'x'));     // Replace o wit x
msg = "HelloWorld";     // Change content of original string
console.log(msg);           
console.log(msg.replace("Hello", "Hey")); //now replace hello with hey

//-----------------Repeat----------------
/** 
-Returns a string with the number of copies of a string
**/

//-Code Example
let msg1 = "ILoveCoding ";
console.log(msg1);
console.log(msg1.repeat(2));   //2 time print ILoveCoding
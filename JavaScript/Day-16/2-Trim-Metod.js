//Trim Metod
/** 
trim() does not change the original string.
Strings are immutable, so trim() returns a new string with spaces removed from both ends.
**/

let msg = "         Abdul Rehman         ";
msg.trim();
console.log(msg);   //return  "         Abdul Rehman         " (bcz string are immutable)
let trimStr = msg.trim();
console.log(trimStr)

let password = prompt("Set your password");
console.log(password.trim());
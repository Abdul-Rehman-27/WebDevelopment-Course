//-----------String are immutable in js--------------
/** 
No change can be made to strings.Whenever we do try to make a change, a new string is created and ols one remains same.
**/

let msg = "         Abdul Rehman         ";
msg.trim();
console.log(msg);   //return  "         Abdul Rehman         " (bcz string are immutable)
let trimStr = msg.trim();
console.log(trimStr)
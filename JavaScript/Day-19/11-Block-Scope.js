//-------------What is block Scope----------------
/** 
A variable declared inside a {} block can't be accessed from outside the block.

Which keywords have block scope?
Only these two:
1-let
2-const
(var does NOT have block scope)
**/

//-Example 1
{
    let a = 25;
    const b = 20;
    var c = 24
}
console.log(a) // error
console.log(b) // error
console.log(c); // output: 24

//-Example 2
for (let i = 0; i < 3; i++) {
  console.log(i); // 0 1 2
}

console.log(i); // error

//-Example 3
let age = 18;
if (age >= 18) {
    let str = "adult";
}
console.log(str) // error

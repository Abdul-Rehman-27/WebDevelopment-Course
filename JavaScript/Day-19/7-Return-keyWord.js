//------------Return KeyWord-----------------
/** 
What is the return keyword in JavaScript?
The return keyword is used inside a function to send a value back from the function.

Why do we use return?
Because functions can produce a result and give it back to the code that called them.

**/

function add(a, b) {
  return a + b;
}
console.log(add(2, 7));

// 2nd Way
let result = add(2, 7);
console.log(result); 

//Recursion
let sumOfThree = (add(add(1, 2), 3));  // return 6
console.log(sumOfThree);

// When we return value from function at that point after returning value function stop
function printHello() {
    console.log("hello1");
    console.log('hello2');
    return 
    console.log("hello3");  // will not be printed after return
}

printHello();



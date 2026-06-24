//-----------What is high Order Function------------
/** 
A high-order function is a function that either:
    1-Takes one or more functions as arguments (inputs), or
    2-Returns a function as its result (output).
**/

// Why need of this
let greet = function() {
    console.log("Hello");
}

// We want to print greet multiple time
greet();
greet();
greet();
greet();

// But we want to make such function tht take greet func as a arg and print greet multiple time 
function multipleGreet(fun, count) {
    for (let i=1; i<=count; i++) {
        fun();
    }
}

multipleGreet(greet, 4);
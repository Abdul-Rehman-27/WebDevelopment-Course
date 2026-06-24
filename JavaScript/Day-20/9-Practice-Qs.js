// Qs: Write an arrow function named arrayAverage that accepts an array of numbers and returns the average of those numbers.
let arrayAverage = (numArr) => {
    let sum = 0;
    for (let i=0; i< numArr.length; i++) {
        sum += numArr[i];
    }
    return sum / numArr.length;
}
console.log(arrayAverage([1, 2, 3, 4, 5]));

// QS: Write an arrow function names isEven() that takes a single number and return if is even or not
let isEven = (num) => {
    if (num % 2 == 0) {
        console.log(`${num} is Even`)
    } else {
        console.log(`${num} is not even`);
    }
}

isEven(2);

// Qs: What will be output of the following code:
const object = {
    message: "Hello World",
    logMessage() {
        console.log(this.message);
    }
}

// setTimeout(()=> {
//     object.logMessage();
// }, 1000);       // hello world

setTimeout(object.logMessage, 1000); // return undefined

// why undefined
/** 
While setTimeout() function uses the object.logMessage as a callback, still, it invokes object.logMessage as a regular function , rather than a method.

const functionReference = object.logMessage;
functionReference();
Now look carefully JS consider as normal function call
    functionReference();
    This is a normal function call.
It is NOT:
    object.functionReference();

So our call becomes:
like 
    setTimeout(logMessage(), 1000)
Not
    setTimeout(object.logMessage(), 1000)


And during a regular function invocation this equals the global object which is a window in the case of browser environment.

That's why console.log(this.message) inside logMessge method logs window.message, which is undefined.
**/

// Qs: What is the output of the following Code:
let length = 4;
function callback() {
    console.log(this.length);
}

const obj = {
    length: 5,
    method(callback) {
        callback();
    },
};

obj.method(callback, 1, 2);
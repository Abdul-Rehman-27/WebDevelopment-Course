//------------Rest--------------
/** 
Allow a function to take an indefinite number of arguments and bundle them in an array
**/

//-Example 
function min(a, b, c, d) {
    console.log(arguments); // valid return collection of given args
}
min(1, 2, 3, 4, 5);

//-Example
function max() {
    console.log(arguments);
    console.log(arguments.length)
    // arguments.push(3); // error coz argument is not array its collection and dont have push method 
}
max(1, 2);

//-Example (Argument)
function sum(...args) {
    // return arguments.reduce((sum, el) => sum + el) // give error bcz arguments is collection not array so we used args instead of arguments
};

//-Example (Rest Example)
function sum(...args) {
    return args.reduce((sum, el) => sum + el) // now its correct
};

console.log(sum(1, 2, 3, 4, 5));

//-Example (min with arguments)
function min1(msg, ...args) {
    console.log(msg);
    return args.reduce((min, el) => {
        if (min > el) {
            return el;
        } else {
            return min;
        }
    })
}

console.log(min1("Hello", 0, 5, 1)); // hello will be pass to msg and stored in string array 
console.log(min1(10, 0, 5, 1)); // 10 will be still passed to msg and stored in num array 
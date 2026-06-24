// Qs: Write and arrow funtction that return the square of a number n.
let square = n => {
    return n * n;
}

console.log(square(2));

// Qs: Write a function that prints "Hello World" 5 time at interval of 2s each 
let intervalID = setInterval(()=> {
    console.log("Hello World");
}, 2000);

setTimeout(()=>{
    clearInterval(intervalID);
    console.log("Clear interval run");
}, 10000);
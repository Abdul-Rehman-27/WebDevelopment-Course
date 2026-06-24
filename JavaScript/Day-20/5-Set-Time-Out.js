//---------------Set Time Out--------------
/**setTimeout() is used to run a piece of code after a certain time delay. It's a part of window object**/

// Why do we need?
/** 
JavaScript is single-threaded (does one thing at a time).
We use setTimeout to:
1-Delay execution
2-Show messages after some time
3-Create animations
4-Simulate loading / API response
**/

//-Syntax
// setTimeout(function, timeInMilliseconds);

//-Example
console.log("Hello Before Time Out");
setTimeout(() => {
    console.log("Hello inside Time Out");
}, 4000);
console.log("Hello After Time Out");

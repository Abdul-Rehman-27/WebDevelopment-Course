//---------this in event listener------------
/*
-When 'this' is used in a callback of event handler of something, it refers to that something.
*/
let btn = document.querySelector("button");
let para = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

// btn.addEventListener("click", function() {
//     console.dir(this); // Here this refer to the button coz it is called in callback of button event handler
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// imp:- this is useful in event listener when we want to use single event listener on multiple objects


// // 1st-Way (but its not a good way)
// para.addEventListener("click", function() {
//     console.dir(this); 
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// h1.addEventListener("click", function() {
//     console.dir(this); 
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// h3.addEventListener("click", function() {
//     console.dir(this); 
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// })

// 2nd and Best Way
function changeColor () {
    console.dir(this); 
    console.log(this.innerText);
    this.style.backgroundColor = "blue";
    this.style.color = "white";
}

btn.addEventListener("click", changeColor);
para.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);


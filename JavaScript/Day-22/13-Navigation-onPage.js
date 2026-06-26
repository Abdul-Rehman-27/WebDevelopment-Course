//------------Navigation-------------

//-------parentElement------------
let heading3 = document.querySelector("h3"); 
console.dir(heading3.parentElement);    // will be div

//-------childElement------------
let div = document.querySelector(".box");
console.dir(div.children);  // return html collecton of div children

//-------childElementCount-------
console.dir(div.childElementCount); // return number (3) of children div has

let ul = document.querySelector("ul");
console.dir(ul.childElementCount); // return 3

//--------previous Element Sibling--------
console.dir(ul.previousElementSibling); // return h3
console.dir(ul.nextElementSibling) // return h4


// change color and bg color of ul using sibling metod
ul.nextElementSibling.style.backgroundColor = "yellow";


//------------Adding Element--------

//-----document.createElement("p")---------
let para = document.createElement("p"); // This p is created in js but we are unable to see it in js also we have created para but right now it has the value of most of attributte be null like innerText innerHtml etc
console.dir(para);  
para.innerText = "Hello I am Para";

//Note: After creating element we have to insert it so that it becomes visible on browser and in document

//---------appendChild(element)-----------
/*
-It is used to add a new element (child node) to the end of a parent element.
*/
let body = document.querySelector("body"); 
body.appendChild(para); // para will be added at the end of the body 

let h5 = document.createElement("h5");
h5.innerText = "This was for Product";

let box = document.querySelector("div");
box.appendChild(h5);  // add h5 at the end of div

let btn = document.createElement("button");
btn.innerText = "Submit!";
box.appendChild(btn);

//---------append(element)-----------
/*
-It is used to add one or more nodes or text to the end of an element.
*/

// - add more text to created para
para.append(" I was added by Abdul Rehman");

// - now add button in h5
h5.append(btn);

//---------prepend(element)----------
/**
-It is used to insert one or more nodes or text at the beginning of a parent element. 
*/

let h6 = document.createElement("h6");
h6.innerText = " Below is related to product";
box.prepend(h6);  // add h6 at the start of div
h6.prepend("You can see that"); // add this text at start of h6

//---------insertAdjacentElement(where, element)--------
/**
-insertAdjacent... methods can insert before, inside, or after an element

-Positions
---'beforebegin': Before the targetElement itself.
---'afterbegin': Just inside the targetElement, before its first child.
---'beforeend': Just inside the targetElement, after its last child.
---'afterend': After the targetElement itself.
*/

let btn2 = document.createElement("button");
btn2.innerText = "Submit me";

//- add this btn before after and inside para and div
let p = document.querySelector("p");    // querySelecotr always return 1st matching element so it will select first para not the one we added in js

p.insertAdjacentElement("beforebegin", btn2);   // add at just before para

p.insertAdjacentElement("afterbegin", btn2);    // Just inside the targetElement, before its first child.

p.insertAdjacentElement("beforeend", btn2);    // Just inside the targetElement, after its last child.

p.insertAdjacentElement("afterend", btn2);     // add at the end of para

console.dir(p);
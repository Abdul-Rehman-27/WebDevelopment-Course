// Add p with red text that says "hey i m red"
let container = document.querySelector(".container");
let para = document.createElement("p");
para.innerText = "Hey I'm Red";
container.append(para);
para.classList.add("red");

// An h3 with blue text thay says "I'm a blue 3"
let h3 = document.createElement("h3");
h3.innerText = "I'm a blue 3";
container.append(h3);
h3.classList.add("blue");

// A div with a black border and pink background color with the following elements inside of it
/*
-another h1 thay says "I'm in a div"
-p that says "Me TOO!"
*/
let body = document.querySelector("body");
let newDiv = document.createElement("div");
body.append(newDiv);
newDiv.classList.add("box");

let h1 = document.createElement("h1");
h1.innerText = "I'm in a div";

let newPara = document.createElement("p");
newPara.innerText = "Me Too!";

newDiv.append(h1, newPara);
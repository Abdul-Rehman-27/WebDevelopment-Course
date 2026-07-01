//---------Change Event-------------
/*
-The change event occurs when the value of an element has been changed (only works on input textarea and select elements)

-It track between the final and initial value

-If we write something in input before writing it was empty and when we write and leave it then if when we click wherever not just at button it will trigger
*/
let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();
});

let input = document.querySelector("input");
input.addEventListener("change", function(event) {
    console.log("Change Event");
    console.log("Final Value", this.value);
});


//----------input event----------
/**
-The inpu event fires when the value of input select or textarea element has been changes.

-It keep the track of small changes like when we press a it return a when we type b it return ab and so on

-Shift arrow or any non character key doest trigger input event
*/
input.addEventListener("input", function(event) {
    console.log("Input Event");
    console.log("Final Value", this.value);
});

//--------Activity-----------
let inp = document.querySelectorAll("input")[1];
let para = document.querySelector("p");
inp.addEventListener("input", function() {
    console.log(inp.value);
    para.innerText = inp.value;
})

// Get element by Id
/*
It a method of document object. it return element as an object or null (if not found)
*/

// Access h1 using js
let heading  = document.getElementById("heading"); // this will return h1 as an object
console.dir(heading); // this will run in console not in terminal coz its part of document object

// -------Checking Different properties of heading h1 (but it will work in console)----------
heading.id  // when we will run this in console it will return id of h1 element
heading.tagName // similary more 

// -----------Changing different properties of H1 (this will be permanent unlike console)-----------
heading.innerText = "This is my Heading 1";
heading.style.color = "White";

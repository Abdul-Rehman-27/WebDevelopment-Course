// Get element by Class
/*
It a method of document object. Returns the element as html collection or empty collection (if not found)
*/

let headings  = document.getElementsByClassName("heading"); // this will return html collection of objects

// Accessing object at index 0 in html collection
let heading1  = document.getElementsByClassName("heading")[0];
// console.dir(heading1);

// Accessing object at index 1 in html collection
let heading2 = document.getElementsByClassName("heading")[1];
// console.dir(heading2);

// Iterate over html collecion 
for (let i = 0; i < headings.length; i++) {
    console.dir(headings[i]);
    console.dir(headings[i].tagName);
    headings[i].innerText = `Updated text of element present at index ${i}`;
}

// If we use class that doest not exist
let heading = document.getElementsByClassName("abc");  // return empty html collection
console.dir(heading);
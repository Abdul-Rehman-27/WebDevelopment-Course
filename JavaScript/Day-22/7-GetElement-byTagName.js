// Get element by TagName
/*
-It a method of document object. Returns the element as html collection or empty collection (if not found)
*/

// Accessing object at index 0 in html collection
let para1  = document.getElementsByTagName("p")[0];
// console.dir(para1);

// Accessing object at index 1 in html collection
let para2  = document.getElementsByTagName("p")[1];
// console.dir(para2);

// Iterate over html collecion 
let getPara = document.getElementsByTagName("p");
console.dir(getPara);
for (let i = 0; i < getPara.length; i++) {
    console.dir(getPara[i]);
    getPara[i].innerText = `Updated Content for ${i+1}`
}
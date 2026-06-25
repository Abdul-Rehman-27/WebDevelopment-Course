// --------------Manipulating Attribute------------------

//--obj.getAttribute(attr)
//--obj.setAttribute(attr, val)

let img = document.querySelector("img");
console.dir(img);
console.dir(img.getAttribute("id")); // get id of img
img.setAttribute("id", "spdrImg");   // set new id 
console.dir(img.getAttribute("id"));
img.setAttribute("src", "Spider-1.jpg");

console.dir(img.getAttribute("spdrClass")); // return null
img.setAttribute("class", "spdrClass");
console.dir(img.getAttribute("class"));  // now it will return spdrClass
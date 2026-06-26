//----------Using classList---------------
let img = document.querySelector("img");
console.dir(img.classList);     // return the collection of classes

//-----classList.add()-----------
let heading = document.querySelector("h1");
heading.classList.add("heading");
heading.classList.add("underline");
console.dir(heading.classList);

//-----classList.remove()-------
heading.classList.remove("underline");

//Note:- We can use heading.setAttribute("class", "underline") but setAttribute allow only one class At time so in this case if we use underline class the heading class styling will automatically removed or reset thats why we prefer classList

//-----classList.contains()------
console.dir(heading.classList.contains("heading")); // return true coz currently heading has heading class
console.dir(heading.classList.contains("underline")) // return false as heading as no underline clas coz we remove it above

//-----classList.toggle():- to toggle between add & remove --------
heading.classList.toggle("underline"); // add underline because was not added previously
heading.classList.toggle("underline"); // remove underline becuase now heading has underline class

let box1 = document.querySelector("#box1");
box1.classList.add("box1");


let getBody = document.querySelector("body");
getBody.style.backgroundColor = "violet";

let heading = document.getElementsByClassName("heading")[0];
heading.style.backgroundColor = "yellow";

let getListItems = document.querySelectorAll("ul li");
// for (let i = 0; i < getListItems.length; i++) {
//     console.log(getListItems[i]);
//     getListItems[i].style.backgroundColor = "blue";
// }

// using for of loop
for (getListItem of getListItems) {
    getListItem.style.backgroundColor = "orange";
} 

// important:- we can only set or access inline styling using style property but we can't access external css 
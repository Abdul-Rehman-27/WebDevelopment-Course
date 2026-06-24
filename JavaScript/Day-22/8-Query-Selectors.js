// Query Selector
/*
-Allow us to use any CSS selectors

-document.querySelector('p');               //Selects first p element
-document.querySelector('#myId');           //Selects first element with id = myId
-document.querySelector('.myClass');        //Selects first element with class = myClass
-document.querySelectorAll("p");            //Selects all p elements
*/

let getPara = document.querySelector("p");  // this will return 1st para element not all
console.dir(getPara);

let getHeading3 = document.querySelector("#head");  // this will return element with id head
console.dir(getHeading3);

let getHeadings = document.querySelector(".heading"); // thi will return 1st element with clas headings
console.dir(getHeadings);

let getHeadings1 = document.querySelectorAll(".heading"); // this will return nodelist of all elements with cladd heading
console.dir(getHeadings1);

// nested accessing
let nestedAccess = document.querySelectorAll("div a");  // this will return the anchor tag that are inside div tag
console.dir(nestedAccess);
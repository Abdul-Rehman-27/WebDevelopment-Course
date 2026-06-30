// //----------onClick Events-------------
// // Just for 1 button
// let btn = document.querySelector("button");
// console.dir(btn);


// btn.onclick = sayHello;

// // 1st Way
// btn.onclick = function () {
//     console.log("Button Was Clicked");
//     alert("Hello");
// }

// 2nd Way
function sayHello() {
    console.log("Hello");
}

// If we want that all buttons work
let btns = document.querySelectorAll("Button");
for (let btn of btns) {
    btn.onclick = sayHello;
}

//-----------OnMouseEnter---------------
for (let btn of btns) {
    btn.onmouseenter = function () {
        console.log("Cursor is on Button");
    };

}
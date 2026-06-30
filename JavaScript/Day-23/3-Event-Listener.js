//----------EventListener-------------

// //----Problem with onClick
// let btn = document.querySelector("button");
// btn.onclick = function () {
//     console.log("First");
// };

// btn.onclick = function () {
//     console.log("Second"); // this will be printed only not first
// };

//----Event Listener 
let btns = document.querySelectorAll("button");
for (let btn of btns) {
    // btn.addEventListener("click", function () {
    //     console.log("Hello");
       
    // });

    // btn.addEventListener("click", function () {
    //     console.log("Abdul Rehman!");
    // });

    btn.addEventListener("dblclick", doubleClick)
    
}

function doubleClick () {
    console.log("You Double Clicked Me!");
}


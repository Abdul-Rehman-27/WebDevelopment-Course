let btn = document.querySelector("button");
let input = document.querySelector("input");

//-----------Mouse Event----------
btn.addEventListener("click", function(event) {
    console.log("Button Clicked")
    console.log(event);
})

//-----------Keyboard Event-------
//--key down
// input.addEventListener("keydown", function() {  // key down trigger as soon as the key is pressed (it also consider when we delete to go to back and also include spaces)
//     console.log("Key was pressed");
// })

//--key up
// input.addEventListener("keyup", function(event) { // trigger when key is released
//     console.log("key was release");
//     console.log(event);
//     console.log("Key =" , event.key);
//     console.log("Code =", event.code);
// })

// 2 special property of keyboard event
/**
-Key:- tell us what is printed and visible on screen
-Code:- return the code of particular key pressed
*/

// Basic game
input.addEventListener("keydown", function(event) {
    console.log("Code = ", event.code) //ArrowUp, ArrowDown, ArrowLeft, ArrowRight

    if (event.code == "ArrowUp") {
        console.log("Character Move Forward");
    } else if (event.code == "ArrowDown") {
        console.log("Character Moves Backward");
    } else if (event.code == "ArrowLeft") {
        console.log("Character Moves Left");
    } else if (event.code == "ArrowRight") {
        console.log("Character Moves Right");
    }
});
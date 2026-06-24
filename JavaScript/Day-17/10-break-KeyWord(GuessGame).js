//------------break KeyWord-------------
/** 
-The break keyword stops a loop immediately, even if the condition is still true
**/

//-Example
let i = 1;

while (i <= 10) {
    console.log(i);
    if (i === 5) {
        break; // stop the loop when i is 5
    }
    i++;
}

//-Guess Game
let favMovie = "Avatar";
let userGuess;

while (true) {
    userGuess = prompt("Enter movie to guess");

    if (userGuess === favMovie) {
        console.log("Congrats! Right Guess");
        break;
    } else if (userGuess === "q") {
        console.log("You quit the game");
        break;
    } else {
        console.log("Try Again");
    }
}

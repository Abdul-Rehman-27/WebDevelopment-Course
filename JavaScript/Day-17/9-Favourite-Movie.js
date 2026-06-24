let favMovie = "Avatar";
let userGuess = prompt("Enter movie to guess");

while (userGuess !== favMovie && userGuess !== "q") {
    userGuess = prompt("Enter movie to guess");
}

if (userGuess === favMovie) {
    console.log("Congrats! Right Guess");
} else {
    console.log("You quit the game");
}

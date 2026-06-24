// Guess Game
let maxNum = prompt("Enter the maximum number");
let randomNum = Math.floor(Math.random() * maxNum) + 1;
console.log(randomNum);

let userGuess = prompt("Enter Number");
while (userGuess != randomNum) {

    userGuess = prompt("Enter random num again");
    
    if ( userGuess == randomNum ) {
        console.log("Congratulation! Right Guess");
    } else if (userGuess > randomNum) {
        console.log("Too High");
    } else if (userGuess < randomNum) {
        console.log("Too Low");
    }
}

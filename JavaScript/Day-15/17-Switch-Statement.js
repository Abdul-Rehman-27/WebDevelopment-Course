//--------------Switch Statement-----------------
/**
A switch statement is used to check one value against multiple possible cases.
It is an alternative to multiple if–else statements and makes code cleaner.
**/

//-Code Example
let signal = "red";

switch (signal) {
  case "red":
    console.log("Stop");
    break;

  case "yellow":
    console.log("Slow down");
    break;

  case "green":
    console.log("Go");
    break;

  default:
    console.log("Invalid signal");
}


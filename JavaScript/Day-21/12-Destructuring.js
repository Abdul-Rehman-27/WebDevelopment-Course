//-----------------Destructuring--------------------
/** Destructuring in JavaScript means taking values from an array or object and storing them into variables easily. */

//--Normal Way
let names = ["Rehman", "Zeeshan", "Haroon", "Obaid"];
// let winner = names[0];
// let runnersUp = names[1];
// let secondRunnersUp = names[2];

//--With Destructuring
let [winner, runnersUp, secondRunnersUp] = names; // this is not an array these are individual variables
console.log(winner);    // Rehman

//--Mix and match of destructuing and rest
let [w, ru, ...others] =  names;
console.log(others);
//-----------Generating Random Integers----------------

// Qs: Generate Random Numbers from 1 to 10
let num = Math.random();
num = (num * 10)+1;
num = Math.floor(num);
console.log(num);

// Short Cut
let randomNum = Math.floor(Math.random() * 10) + 1;
console.log(randomNum);
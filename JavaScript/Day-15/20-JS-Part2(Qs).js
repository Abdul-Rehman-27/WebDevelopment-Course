/**Q1: Create a number variable num with some value. Now Print "Good" if the number is divisible by 10 and print "bad" if not.**/

let num = 27;

if ( num % 10 == 0) {
    console.log("Good");
} else {
    console.log("Bad");
}

/** Qs2. Take the user's name & age as input using prompts. Then return back the following statement to the user as an alert (by substituting their name & age): name is age years old. [Use template Literals to print this sentence] **/
let userName = prompt("Enter Your Name");
let userAge = prompt("Enter your age");

alert(`${userName} is ${userAge} years old`);

/** Qs3. Write a switch statement to print the months in a quarter. 
-Months in Quarter 1: January, February, March 
-Months in Quarter 2: April, May, June 
-Months in Quarter 3: July, August, September 
-Months in Quarter 4: October, November, December [Use the number as the case value in switch] **/

let quarter = 1;

switch (quarter) {
    case 1:
        console.log("Months in Quarter 1: January, February, March");
        break;
    case 2:
        console.log("Months in Quarter 2: April, May, June");
        break;
    case 3:
        console.log("Months in Quarter 3: July, August, September");
        break;
    case 4:
        console.log("Months in Quarter 4: October, November, December")
        break;
    default:
        console.log("Wrong Value");
}

/** Qs4. A string is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5. For a given string print if it is golden or not.**/

let str = "Abdullah";

if ((str.length > 5) && (str[0] == 'A' || str[0] == 'a')) {
    console.log(`${str} is a golden string`);
} else {
    console.log(`${str} is not a golden string`);
}

/** Qs5. Write a program to find the largest of 3 numbers. **/
let num1 = 7;
let num2 = 5;
let num3 = 4;

if (num1 >= num2 && num1 >= num3) {
    console.log("num1 is greatest");
} else if (num2 >= num1 && num2 >= num3) {
    console.log("num2 is greatest");
} else {
    console.log("num3 is greatest");
}

/** Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit. 
Eg: 32 and 47852 have the same last digit i.e.2 **/

let number1 = 234;
let number2 = 14;

let rem1 = number1 % 10;
let rem2 = number2 % 10;
if ( rem1 == rem2) {
    console.log(`Last digit of ${number1} and ${number2} is same`);
} else {
    console.log(`Last digit of ${number1} and ${number2} is not same`);
}
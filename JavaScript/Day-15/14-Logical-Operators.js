//--------------Logical Operators--------------

//1-Logical AND (&&)
let marks1 = 75;

if (marks1 >= 80 && marks1 <= 100) {
    console.log("A Grade");
}
else if (marks1 >= 50 && marks1 < 80) {
    console.log("B Grade");
}
else {
    console.log("Fail");
}

//2-Logical OR (||)
let mathMarks = 45;
let englishMarks = 30;

if (mathMarks >= 40 || englishMarks >= 40) {
    console.log("Pass");
}
else if (mathMarks >= 30 || englishMarks >= 30) {
    console.log("Reappear");
}
else {
    console.log("Fail");
}

//3-Logical NOT (!)
let absent = false;
let marks2 = 60;

if (!absent && marks2 >= 40) {
    console.log("Pass");
}
else if (!absent && marks2 < 40) {
    console.log("Fail");
}
else {
    console.log("Absent");
}


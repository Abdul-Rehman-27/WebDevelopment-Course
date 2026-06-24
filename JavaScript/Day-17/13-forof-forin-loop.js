//------------forof loop-----------------
/**The for of loop is used to go through values of an array, string, or other iterable objects in JavaScript.**/

//-Example 1: Array
let fruits = ["Apple", "Banana", "Mango"];

for (let fruit of fruits) {
    console.log(fruit);
}

//-Example 2: String
let Name = "AbdulRehman";

for (let ch of Name) {
    console.log(ch);
}

//---------------forin loop-----------------------
/**The for in loop is used to loop through keys (indexes or property names) of an object or array.**/

let student = {
    name: "Ali",
    age: 20,
    grade: "A"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}




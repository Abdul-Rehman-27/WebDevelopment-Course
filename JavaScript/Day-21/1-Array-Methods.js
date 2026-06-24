//------------Array Methods------------
/**
forEach() is used to loop through each element of an array. **/

//-Syntax
// ==> arr.forEach(some function defintion or name)

//-Example
console.log("----------For Each loop 1st Way---------------");
let arr = [1, 2, 3, 4, 5];
let print = function (el) {
    console.log(el);
}
arr.forEach(print);

//-Example (2nd Way)
console.log("----------For Each loop 2nd-Way---------------");
arr.forEach(function (el) {
    console.log(el);
});

//-Example (3rd way)
console.log("----------For Each loop with arrow func---------------");
arr.forEach((el) => {
    console.log(el);
})

let array = [
    {
        Name: "Abdul-Rehman",
        Age: 21,
    },

    {
        Name: "Haroon",
        Age: 22,
    },

    {
        Name: "Hasnain",
        Age: 23,
    },
];
console.log(array);
array.forEach((student) => {
    console.log(student.Name);
});
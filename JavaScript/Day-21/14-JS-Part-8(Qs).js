// Qs1. Square and sum the array elements using the arrow function and then find the average of the array

// --Square
let arr = [1, 2, 3, 4, 5];
const squareArr = arr.map(el => {
    return el * 2; 
})

console.log(squareArr);

// --Sum
const Sum = arr.reduce((acc, el) => {
    return acc + el;
})
console.log(Sum);

// --Avg
let avg = Sum / arr.length;
console.log(`Average is ${avg}`);

// Qs2. Create a new array using the map function whose each element is equal to the original element plus 5.
let pluseFiveArr = arr.map((el) => {
    return el + 5;
})
console.log(pluseFiveArr);

// Qs3. Create a new array whose elements are in uppercase of words present in the original array
let wordsArr = ["i", "am", "Abdul Rehman"]
let upperCaseArr = wordsArr.map((wr) => {
    return wr.toUpperCase();
})
console.log(upperCaseArr);

// Qs4. Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of the additional arguments doubled

function doubleAndReturnArgs(nums, ...args) {
    let doubleArr = args.map((el) => {
        return el * 2;
    })
    let mergeArr = [...nums, ...doubleArr]; // merge
    return mergeArr;
}
let nums = [1, 2, 3];
console.log(doubleAndReturnArgs(nums, 4, 5, 6));

//Qs5. Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object
let Obj1 = {
    Name: "Abdul Rehman",
    Age: 21
}

let Obj2 = {
    city: "Hazro",
    Gender: "Male"
}

function mergeObjects(Obj1, Obj2) {
    let newObject = {...Obj1, ...Obj2};
    return newObject
}
console.log(mergeObjects(Obj1, Obj2));
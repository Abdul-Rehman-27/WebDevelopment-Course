//Question 1:
/**Write a high-order function repeatAction that takes a function and a number n, and calls the function n times.**/

function sayHi() {
    console.log("Hi!");
}

function repeatAction(func, count) {
    for (let i = 1; i <= count; i++) {
        func();
    }
}
repeatAction(sayHi, 3);

// Question 2:
/**
Write a high-order function transformArray that takes:
1-An array of numbers
2=A function fn
The HOF should return a new array where each element is the result of applying fn to the original element.**/

function square(num) {
    return num * num;
}

function transformArray(func, arr) {
    let newArr = arr.map(func);
    return newArr;
}

const numbers = [1, 2, 3, 4];
console.log(transformArray(square, numbers))

// Question 3:
/**Write a high-order function filterArray that takes:
1-An array of numbers
2-A function predicate (a function that returns true or false)
It should return a new array containing only elements for which predicate returns true**/

function isEven(num) {
    return num % 2 === 0;
}

function filterArray(func, arr) {
    let newArr = arr.filter(func);
    return newArr;
}

const nums = [1, 2, 3, 4, 5, 6];
console.log(filterArray(isEven, nums));


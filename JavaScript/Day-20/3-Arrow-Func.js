//------------Miscellaneous Topics-------------
/**An arrow function is a shorter and cleaner way to write a function in JavaScript.
-They are not standalone fuction. we use them as value of variable.
-We use them as callbacks.
**/

//Syntax
const func = (arg1, arg2) => {
    // function definition
}

//-Arrow Function with No Parameters
const sayHello = () => {
    console.log("Hello!");
}
sayHello();

//-Arrow Function with Parameters
const sum = (a, b) => {
    console.log(a + b);
}
sum(1, 2);

//-When there is only one argument (then can also be written as)
const cube = n => {
    return n * n * n;
}
console.log(cube(2));
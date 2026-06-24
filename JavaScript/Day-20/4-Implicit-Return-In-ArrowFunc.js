//--------------Implicity return in arrow Func----------------
/**In arrow functions, if the function body is one single expression, JavaScript automatically returns it — you don’t need the return keyword.**/

//-Syntax
const func = (arg1, arg2) => (value);

//-Example
const mul = (a, b) => (a * b); //automatically return value
console.log(mul(2, 2));

//-Example
const cube = n => (n * n * n);
console.log(cube(2));

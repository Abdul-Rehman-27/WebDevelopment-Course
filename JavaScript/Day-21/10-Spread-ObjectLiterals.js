const data = {
    email: "rehman123@gmail.com",
    password: "abcd",
}

console.log("--------Spread with Object------------");
// We want to make a copy of data object
const dataCopy = { ...data, id: 123, Country: "Pakistan" }; // copy data to data copy
console.log(dataCopy);

console.log("--------Spread with Array------------");
let arr = [1, 2, 3, 4, 5];
let obj = { ...arr };
console.log(obj);


console.log("--------Spread with String------------");
let str = "Abdul-Rehman";
let obj1 = { ... str };
console.log(obj1);
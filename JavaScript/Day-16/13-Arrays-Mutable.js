//-------------Arrays are Mutable------------
/** 
-If we change array the change will occur in original array
**/ 

//-Code Example
console.log("--------------Arrays--------------");
let fruits = ["Mango", "Apple", "Bananas"];
console.log("Length:", fruits.length);
console.log("Before Change:", fruits);
fruits[0] = "Watermellon";
console.log("After Change:", fruits);
fruits[10] = "Litchi";
console.log(fruits);
console.log("Length:", fruits.length);

//-In string 
console.log("--------------Strings-------------");
let str = "Hello";
console.log("Before Change:", str);
str[0] = 'M';
console.log("After Change:", str);
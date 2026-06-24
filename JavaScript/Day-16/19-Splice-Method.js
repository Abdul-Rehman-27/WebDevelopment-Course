//----------------splice() method-------------------------
/** 
-The splice() method is used to remove, add, or replace elements in an array. It does change in original array.
**/

//-Syntax
//-array.splice(startIndex, deleteCount, item1, item2, ...)

//-Example
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

console.log(colors.splice(4));  // remove pink and white from original array
console.log(colors);    // output: ["red", "yellow", "blue", "orange"]

console.log(colors.splice(0, 1)); // delete: red
console.log(colors);    // output: [ 'yellow', 'blue','orange' ]

console.log(colors.splice(0, 1, "black", "grey"));  // delete: yellow
console.log(colors);    // output: [ 'black', 'grey', 'blue', 'orange' ]


//-Example
let cars = ["mehran", "toyota", "audi", "bmw"];
console.log(cars.splice(3));    // delete: bmw
console.log(cars);  // output: [ 'mehran', 'toyota', 'audi' ]

console.log(cars.splice(2, 1, "maruti")); // delete: audi
console.log(cars);     // output: [ 'mehran', 'toyota', 'maruti' ]

console.log(cars.splice(0, 0, "xuv")); // delete: nothing
console.log(cars);  // output: [ 'xuv', 'mehran', 'toyota', 'maruti' ]

// replace mehran with mercedes
console.log(cars.splice(1, 1, "mercedes")); // delete: mehran
console.log(cars); // output: [ 'xuv', 'mercedes', 'toyota', 'maruti' ]


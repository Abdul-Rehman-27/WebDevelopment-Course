//------------Spread with array literals----------------
//-Example
console.log("---------Example 1-------------");
let arr = [1, 2, 3, 4, 5];
let newArr = [...arr];  // copy arr to new arr
console.log(newArr);

newArr.push(6);
console.log(newArr);
console.log(arr);

//-Example
console.log("---------Example 2-------------");
let chars = [..."hello"];
console.log(chars); // [ 'h', 'e', 'l', 'l', 'o' ]

//-Example
console.log("---------Example 3-------------");
let odd = [1, 3, 5, 7];
let even = [2, 4, 6, 8];
let nums = [...odd, ...even]; // order matter
console.log(nums);


let Name = "Abdul Rehman";
console.log(Name[0]);
console.log(Name[1]);
console.log(Name[11]);
console.log(Name[100]); //Give undefined
console.log(Name.length);  //Length Property
console.log(Name[Name.length]);  //Undefine
console.log(Name[Name.length-1]); //Last char
console.log(Name[Name.length-2]); //2nd Last Char

// -----Concatination--------
console.log("=====================")
let firstName = "Abdul";
let lastName = "Rehman";
let fullName = firstName + lastName;
console.log(fullName);
let stringNum = lastName+27;
console.log(stringNum)
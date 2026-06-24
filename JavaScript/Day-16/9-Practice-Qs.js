// Q1: For the given string: let msg = "help"; trim it & conert it to uppercase

let msg = "help!";
console.log(msg.trim().toUpperCase());

// Q2: For the string: let name = "ApnaCollege", predict the output for the following code:

/**
name.slice(4,9);    return Colle
name.indexof("na");     return 2
name.replace("Apna", "Our");   return OurCollege
**/

// Q3: Seprate the "College" part in above string & replace 'l' with 't' in it.
let str = "ApnaCollege";
console.log(str);
let partCollege = str.slice(4);
console.log(partCollege);
console.log(partCollege.replace('l', 't'));
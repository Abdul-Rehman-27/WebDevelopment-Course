// Datatypes

//Primitive Data Types
/** These are basic types, stored directly in memory, copied by value. 
1-Number
2-Boolean
3-String
4-Undefined
5-Null
6-Bigint
7-Symbol**/

//Number
let age = 23
let weight = 45.6;
console.log(typeof(age));
console.log(typeof(weight));

//Boolean
let canVote = true;
console.log(typeof(canVote));

//String
let Name = "Abdul Rehman";
console.log(typeof(Name));           

//Undefined
let x;        // Variable declared but no value assigned
console.log(typeof(x))

//Null
let y = null;   //Represents no value
console.log(typeof(y));    //Return object

//Symbol
let id = Symbol("id");  //Unique identifier (rarely used)
console.log(typeof(id));

//Bigint
let bigNum = 123456789012345678901n;
console.log(typeof(bigNum));
//Q: A "Good String" is a string that starts with letter 'a' and has a length > 3. Write a program to find if a string is good or not.

let thing = "apple";
if (thing[0] == 'a' && thing.length > 3) {
    console.log(`${thing} is a good string`);
}else {
    console.log(`${thing} is not a good string`);
}

//Q: Predict the output of following code.
let num = 12;
if ((num%3 === 0 )&& ((num+1 == 15) || (num-1 == 11))) {
    console.log("Safe");
}else {
    console.log("Unsafe");
} 

// output == Safe
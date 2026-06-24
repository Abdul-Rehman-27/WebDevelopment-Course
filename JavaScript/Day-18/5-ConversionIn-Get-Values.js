//---------------Get Values---------------
/** 
JS automatically converts objects keys to strings.
Even if we made the number as key, the number will be converted to string.
**/

const obj = {
    1: "a",
    2: "b",
    true: "c",  // JS autmatically converts these keys to strings
    null: "d",
    undefined: "e"
}

console.log(obj);
console.log(obj[1]); // this 1 converts to string its not an index or number
console.log(obj[undefined]); // Also taken as string even though its string

// in below syntax . doest convert numbers to string so tese will give rror
console.log(obj.1);   // error
console.log(obj.2);   // error

// But this will work
console.log(obj.null);
console.log(obj.undefined);


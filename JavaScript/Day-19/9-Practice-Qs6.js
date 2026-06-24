// Qs: Create a function that returns the concatination of all strings in an array.

function concatArrayStrs(stringArray) {
    let finalStr = "";
    for (let i=0; i<stringArray.length; i++) {
        finalStr += stringArray[i];
    }
    return finalStr;
}

console.log(concatArrayStrs(["Muhammad ", "Abdul", "-  Rehman"]));
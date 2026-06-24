// Qs1. Write a JavaScript function that returns array elements larger than a number.
console.log("------------Return Arr Elements---------------");
function returnArrElements(arr, number) {
    let largerArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (number < arr[i]) {
            largerArr.push(arr[i]);
        }
    }
    return largerArr;
}
let nums = [3, 4, 2, 1, 7]
console.log(returnArrElements(nums, 2));

/**Qs3. Write a JavaScript function that accepts a list of country names as input and
returns the longest country name as output.
Example : country = ["Australia", "Germany", "United States of America"] output :
"United States of America" **/
console.log("------------Name of Country with greater length---------------");
function longestString(namesArr) {
    let longestStr = namesArr[0];
    for (let i = 0; i < namesArr.length; i++) {
        if (longestStr.length < namesArr[i].length) {
            longestStr = namesArr[i];
        }
    }
    return longestStr;
}
let country = ["Australia", "Germany", "United States of America"]
console.log(longestString(country));

/** Qs4. Write a JavaScript function to count the number of vowels in a String
argument. **/
console.log("------------Count Vowels---------------");
function countVowels(str) {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Abdul"));

/**Qs5. Write a JavaScript function to generate a random number within a range
(start, end). **/
console.log("-----------Generate Random Num---------------");
function generateRandomNum(start, end) {
    let diff = end - start + 1;
    let randomNum = Math.floor(Math.random() * diff) + start;

    return randomNum;
}
console.log(generateRandomNum(5, 10));

/** Qs2. Write a JavaScript function to extract unique characters from a string.
Example: str = “abcdabcdefgggh” ans = “abcdefgh” **/
console.log("-----------Extract Unique Chars--------------");

function extractUniqueChar(str) {
    let uniqueStr = ""; 
    for (let i = 0; i < str.length; i++) {
        if (uniqueStr.indexOf(str[i]) == -1) {
            uniqueStr += str[i];
        }
    }
    return uniqueStr;
}

console.log(extractUniqueChar("arcdri"));

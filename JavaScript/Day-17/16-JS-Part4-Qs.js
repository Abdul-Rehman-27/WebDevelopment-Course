// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.
/**Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2
Result should be arr = [1, 3, 4, 5, 6, 3]**/

let arr = [1, 2, 3, 4, 5, 6, 2, 3] 
let num = 2;

console.log("-------------Array Before----------------");
console.log(arr);
for (let i=0; i<arr.length; i++) {
    if (arr[i] == num) {
        let deleteElement = arr.splice(i, 1);
        console.log(`${deleteElement} at index ${i} is deleted`);
    }
}
console.log("-------------Array After----------------");
console.log(arr);

// Qs2. Write a JS program to find the no of digits in a number. Example : if number = 287152, count = 6
let number = 287152;
let digitCount = 0;

while (number != 0) {
    // let rem = number%10;
    // digitCount += rem;
    number = Math.floor(number/10);
    digitCount += 1;
}
console.log("----------Total Number of Digits------------");
console.log(`Total Digits:${digitCount}`);

// Qs3. Write a JS program to find the sum of digits in a number. Example : if number = 287152, sum = 25
let no = 287152;
let sumOfDigit = 0;

while (no != 0) {
    let rem = no % 10;
    sumOfDigit += rem;
    no = Math.floor(no / 10);
}

console.log("-------Sum of Digit in Number-----------");
console.log("Sum:", sumOfDigit);

// Qs4. Print the factorial of a number n.
let anyNum = 5;
let factorial = 1;

console.log("------------Factorial----------------");
for (let i=1; i<=anyNum; i++) {
    factorial *= i;
}
console.log(`Factorial of ${anyNum} is: ${factorial}`);

// Qs5. Find the largest number in an array with only positive numbers.
let array = [1, 5, 2, 3];
let largestNum = array[0];

console.log("----------Largest Number in Array------------");
for (let i=0; i<array.length; i++) {
    if ( largestNum < array[i]) {
        largestNum = array[i];
        console.log("Largest Num in Array is:", largestNum);
    }
   
}

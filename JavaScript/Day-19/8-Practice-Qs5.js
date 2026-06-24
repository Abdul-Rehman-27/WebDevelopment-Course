// QS: Create a funtion that return the sum of numbers from 1 to n.

function calulateSum(number) {
    let sum = 0;
    for (let i=1; i<=number; i++) {
        sum += i;
    }
    return sum;
}

console.log(calulateSum(7));
// Create a function that print the multiplication table of a number

function printMultipliationTable(number) {
    for (let i=1; i<=10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

printMultipliationTable(5);
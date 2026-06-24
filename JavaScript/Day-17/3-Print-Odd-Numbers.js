// Qs: Print all odd numbers from 1 to 15

console.log("-------1st Way----------")
for (let i=1; i<=15; i++) {
    if (i%2 != 0) {
        console.log(i);
    }
}

//-2nd Way
console.log("-------2nd Way----------")
for (let i=1; i<=15; i += 2) {
    console.log(i);
}
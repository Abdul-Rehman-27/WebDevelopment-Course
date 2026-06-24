// Qs: Print all even numbers from 1 to 10

console.log("-------1st Way----------")
for (let i=1; i<=10; i++) {
    if (i%2 == 0) {
        console.log(i);
    }
}

//-2nd Way
console.log("-------2nd Way----------")
for (let i=2; i<=10; i += 2) {
    console.log(i);
}
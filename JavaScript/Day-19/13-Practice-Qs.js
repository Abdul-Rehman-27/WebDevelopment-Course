// What will be the output
let greet = "hello";    // global
function changeGreet() {
    let greet = "Hey";  // function scope
    console.log(greet);
    function innerGreet() {
        console.log(greet);   // greet can be accessible coz greet has lexial scope
    }
}
console.log(greet);
changeGreet();  // output: 1 time hello, 1 time hey (not 2 time bcz we have't call the innergreet function)

// // What will be the output
// let greet = "hello";    // global
// function changeGreet() {
//     let greet = "Hey";  // function scope
//     console.log(greet);
//     function innerGreet() {
//         console.log(greet);   // greet can be accessible coz greet has lexial scope
//     }
//     innerGreet();
// }
// console.log(greet);
// changeGreet();  // output: 1 time hello, 2 time hey (now we have called innerGreet function thats why 2 time hey)
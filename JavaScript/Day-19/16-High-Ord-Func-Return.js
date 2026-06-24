//--------------Higher Order Func with return Func----------------

// Without HOF
let odd = function (n) {
    console.log(!(n % 2 == 0));
}

odd(2);

let even = function (n) {
    console.log((n % 2 == 0));
}

even(2);

// // With HOF (Basic Way)
// function evenOrOddFactory(request) {
//     if (request == "odd") {
//         let odd = function (n) {
//             console.log(!(n % 2 == 0));
//         }
//         return odd;   // function return 
//     } else if (request == "even") {
//         let even = function (n) {
//             console.log((n % 2 == 0));
//         }
//         return even;  // function return 
//     } else {
//         console.log("Invalid Request");
//     }
// }

// let request = "odd";
// let func = evenOrOddFactory(request);
// console.log(func);
// func(3);    // return true 
// func(2);    // return false

// With HOF (Best Way)
function evenOrOddFactory(request) {
    if (request == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0));
        }
    } else if (request == "even") {
        return function (n) {
            console.log((n % 2 == 0));
        }
    } else {
        console.log("Invalid Request");
    }
}

let request = "odd";
let func = evenOrOddFactory(request);
console.log(func);
func(3);    // return true 
func(2);    // return false

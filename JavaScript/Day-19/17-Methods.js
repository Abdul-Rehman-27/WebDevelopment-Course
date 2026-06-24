//---------What are methods-------------
/**
In JavaScript, a method is just a function that belongs to an object.
**/

const calculator = {

    num: 27,

    add: function (a, b) {
        return a + b;
    },

    sub: function (a, b) {
        return a - b;
    },

    mul: function (a, b) {
        return a * b;
    }
}

console.log(calculator);
console.log(calculator.num);
console.log(calculator.add);    // return add function 
console.log(calculator.add(1, 2));  // return 3

let person = {
    name: "Ali",
    age: 20,
    greet: function () {
        console.log("Hello!");
    }
};
person.greet();

//-Short hand to define method inside object (same as above)
const mathCal = {
    add(a, b) {
        return a + b;
    },

    sub(a, b) {
        return a + b;
    },

    mul(a, b) {
        return a * b;
    }
}

console.log(mathCal.add(1, 2));


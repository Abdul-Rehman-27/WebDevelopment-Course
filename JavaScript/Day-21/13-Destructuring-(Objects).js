//-------------Destructuring in objects------------------
const student = {
    name: "Abdul-Rehman",
    age: 14,
    class: 9,
    subjects: ["physics", "chemistry", "math", "urdu"],
    userName: "rehman",
    password: 123,
    city: "ISLB",
}

//--Normal Way
// let userName = student.userName
// let password = student.password

//--With Destructuring
let { userName, password } = student; // key must be match with the key given in object
let { user, pass } = student // undefined (coz keys doest match)
console.log(userName); // rehman
console.log(user) // udefined

// but if we want to use value of userName and wanna store it in other variables then 
let { userName: uName, password: secret, city = "Hazro"} = student // we can also add city even though it was not present in obj but if city already exist in obj then it will have higher priority 
console.log(uName); 
console.log(secret);
console.log(city);

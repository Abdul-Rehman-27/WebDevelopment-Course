const student = {   
    Name: "Abdul-Rehman",
    Age: 20,
    Gender: "Male",
    CGPA: 3.89
}

console.log(student["Name"]);   // return Abdul-Rehman
console.log(student.Name);      // also return Abdul-Rehman (best way)

// But in some case this method is console.log(student["Name"]) best
let key = "Name";
console.log(student[key]); // Abdul-Rehman

console.log(student.key); // undefined 


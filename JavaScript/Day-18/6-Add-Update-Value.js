const student = {
    Name: "Abdul-Rehman",
    Age: 21,
    CGPA: 3.89,
    City: "Hazro"
}
console.log("--------Before Change----------");
console.log(student);

//--------Change city from Hazro to Attok------------
console.log("----------After Change---------");
student.City = "Attock";
console.log(student["City"]);  // return Attock
console.log(student.City);     // return Attock 

//---------------Add Gender Property in Object---------
student.gender = "Male";
console.log("----------After Addition of Gender-----------");
console.log(student);

//--------------Change Datatype of CGPA----------
student.CGPA = "4.00";
console.log("----------After Changing Datatype----------");
console.log(student);

//------------Deletion--------------
delete student.Age;
console.log("-----------After Deletion of Marks------------");
console.log(student);
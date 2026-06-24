//----------Nested Objects-----------

/**const classInfo = {

    Abdul_Rehman: {},
    Haroon: {},
    Obaid: {}
} **/

const classInfo = {

    Abdul_Rehman: {
        CGPA: 3.89,
        Grade: "A+",
        City: "Attock"
    },

    Haroon: {
        CGPA: 3.37,
        Grade: "B+",
        City: "Hazro"
    },

    Obaid: {
        CGPA: 3.55,
        Grade: "A",
        City: "Attock"
    }
}

console.log(classInfo.Abdul_Rehman);
console.log(classInfo.Abdul_Rehman.CGPA);

//Change City of Abdul Rehman from Hazro to Attock
classInfo.Abdul_Rehman.City = "Hazro";
console.log(classInfo.Abdul_Rehman);

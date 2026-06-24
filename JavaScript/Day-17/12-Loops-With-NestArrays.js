let heroes = [ 
    ["Ironman", "Spiderman", "Thor"], 
    ["Superman", "Wonder-Woman", "Fash"] ];

for (let i=0 ; i<heroes.length; i++) {
    console.log(`----------List ${i}-------------`);
    for (let j=0; j<heroes[i].length; j++) {
        console.log(j, heroes[i][j]);
    }
}

let students = [
    ["Abdul-Rehman", 3.89, "Male"],
    ["Haroon", 3.37, "Male"],
    ["Mahira", 3.9, "Female"]
];

for (let i=0; i<students.length; i++) {
    console.log(`----------Student ${i+1}---------------`);
    for (let j=0; j<students[i].length; j++) {
        console.log(j, students[i][j]);
    }
}
// Qs1. Create a program that generates a random number representing a dice roll. [The number should be between 1 and 6].

let randomNum = Math.floor(Math.random()* 6) + 1;
console.log(randomNum);

// Qs2. Create an object representing a car that stores the following properties for the
/*car: name, model, color.
Print the car’s name.**/

const car = {
    Name: "Audi",
    Model: 2017,
    Color: "Black"
}

console.log(car.Name);

/** Qs3. Create an object Person with their name, age and city.
Edit their city’s original value to change it to “New York”.
Add a new property country and set it to the United States. **/

let Person = {
    
    Haroon: {
        Grade: "A+",
        City: "Hazro"
    },

    Obaid: {
        Grade: "A+",
        City: "Attock"
    }
}
Person.Haroon.City = "New York";
Person.Obaid.City = "New York";
console.log(Person.Haroon);
console.log(Person.Obaid);

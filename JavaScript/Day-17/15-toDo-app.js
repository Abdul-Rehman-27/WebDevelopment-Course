let toDoList = [];
let userChoice = prompt("Enter Your chocie");
isBool = true;
while (isBool) {
    if (userChoice == "add") {
        let task = prompt("Enter Task u want to add");
        toDoList.push(task);
        console.log("Task Added");
        userChoice = prompt("Enter Your next choice");
    } else if (userChoice == "view") {
        console.log("-------------Tasks-------------------");
        for (let i = 0; i < toDoList.length; i++) {
            console.log(i, toDoList[i]);
        }
        userChoice = prompt("Enter Your next choice");
    } else if (userChoice == "delete") {
        let idx = prompt("Enter the task no u want to delete");
        let deletedTask = toDoList.splice(idx, 1);
        console.log(`${deletedTask} is deleted`);
        userChoice = prompt("Enter Your next choice");
    } else if (userChoice == "quit") {
        isBool = false;
    } else {
        console.log("Invalid Choice! Enter Choice Again");
        userChoice = prompt("Enter Your next choice");
    }
}

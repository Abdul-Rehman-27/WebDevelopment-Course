// // 1- Handling Click Events
// function doSomething() {
//     console.log("Hello");
// }

// function printBye() {
//     console.log("Bye");
// }

// function Button () {
//     return (
//         <div>
//             <button onClick={doSomething}>Click me!</button>
//             <p onClick={printBye}>This Para is For Demo-Event</p>
//         </div>
//     );
// }

// export default Button;

// // 2-Handling Non Click Events 
// function doSomething() {
//     console.log("Hello");
// }

// function printBye() {
//     console.log("Bye");
// }

// function handleDblClick () {
//     console.log("You Double Clicked Me!");
// }

// function Button () {
//     return (
//         <div>
//             <button onClick={doSomething}>Click me!</button>
//             <p onMouseOver={printBye}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium neque itaque est, laborum modi sequi commodi cumque quas, corporis illo, minus beatae necessitatibus fugit! Natus obcaecati animi rerum aspernatur illo.</p>
//             <button onDoubleClick={handleDblClick}>Double Click Me!</button> 
//         </div>
//     );
// }

// export default Button;

//3-Event Object
// 2-Handling Non Click Events 
function doSomething() {
    console.log("Hello");
}

function printBye() {
    console.log("Bye");
}

function handleDblClick (event) {
    console.log("You Double Clicked Me!");
    console.log(event);
}

function Button () {
    return (
        <div>
            <button onClick={doSomething}>Click me!</button>
            <p onMouseOver={printBye}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium neque itaque est, laborum modi sequi commodi cumque quas, corporis illo, minus beatae necessitatibus fugit! Natus obcaecati animi rerum aspernatur illo.</p>
            <button onDoubleClick={handleDblClick}>Double Click Me!</button> 
        </div>
    );
}

export default Button;
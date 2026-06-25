//-------Jsx with Curley Braces--------------

/*
JavaScript in JSX with Curly Braces ({})

JSX looks like HTML, but it is written inside JavaScript files. Sometimes you need to display a JavaScript value (such as a variable, calculation, or function result) inside JSX.

To do this, you use curly braces {}
*/

// Example
const name = "Abdul Rehman";

function App() {
  return <h1>Hello, {name}!</h1>;
}
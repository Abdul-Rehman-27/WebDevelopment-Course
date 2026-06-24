import './App.css'
import Title from './Title';                // when we use default export
// import { Title } from './Title';         // when we use named export

// Title Component
// function Title() {     // Creation of Component. Component is a reusable independent piece of code
//   return <h1>This is Title!</h1>
// }

// Description Component
function Description() {  // Creation of Component. Component is a reusable independent piece of code
  return <h3>This is Desciption</h3>
}

// Tip: Alway write component in their seprate files
function App() {

  // return <button>Submit</button>
  // return <Title></Title>

  // But if we want to render multipe things
  return (

    // <div class = "main">  {/* but we can't use class its a js reserved words so we use className in attribute instead of class*/}

    <div id = "main">           {/* we can give id in attribute*/}
      <h1>I am H1 Tag</h1>
      <p>In App we have</p>
      <Title></Title>           {/*rendring component its just like a function call*/}
      <Description/>
      <Title/>                  {/*This also render a component and is a standard when we have no   nested content*/}
      <Description/>
    </div>
  );

  // // React Fregment (if u want that no extra node created in dom then we use this)
  // return (
  //   <>
  //     <Title/>
  //     <Description/>
  //     <Title/>
  //     <Description/>
  //   </>
  // );
}

export default App

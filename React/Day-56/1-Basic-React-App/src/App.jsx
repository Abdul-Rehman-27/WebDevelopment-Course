import './App.css'
import Title from './Title';  // when we use default export
// import { Title } from './Title'; // when we use named export
// function Title() {  // Creation of Component. Component is a reusable independent piece of code
//   return <h1>This is Title!</h1>
// }

function Description() {  // Creation of Component. Component is a reusable independent piece of code
  return <h3>This is Desciption</h3>
}

{/* But we write component in their own files
  */}
function App() {

  // return <button>Submit</button>
  // return <Title></Title>

  // But if we want to render multipe things
  return (
    <div>
      <h1>I am H1 Tag</h1>
      <p>In App we have</p>
      <Title></Title>  {/*rendring component its just like a function call*/}
      <Description/>
      <Title/>         {/*This also render component is a standard when we have no nested content*/}
      <Description/>
    </div>
  );
}

export default App

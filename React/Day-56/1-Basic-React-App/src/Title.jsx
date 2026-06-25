function Title() {  // Creation of Component. Component is a reusable independent piece of code
  let name = "Abdul Rehman";
  return (
    <div>
      <h1>This is Title!</h1>
      <p>2 * 2 = {2 * 2}</p>   {/*{2 * 2} is a JS*/}
      <p>Hi, {name.toUpperCase()}</p>
    </div>
  );
}

// function Sum(a, b) {
//     return a + b;
// }

// default export 
export default Title;  

// //Named Export
// export {Title, Sum}; //named export
// export {Title};
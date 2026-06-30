function handleFormSubmit (event) {
    event.preventDefault();
    console.log("Form was Submitted"); // as soon as form is submitted this statement will execute and suddenly disappar due to form default behavior
}

function Form() {
    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Enter name" />
                {/* <button onClick={handleFormSubmit}>Submit</button> */}
                <button>Submit Me</button>
            </form>
        </div>
    );

}

export default Form;
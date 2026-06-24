//----------This in Arrow Func-------------
/** 
-In function this depends on calling object (by which object those function has been called).

--In Arrow func
this has laxical scope which mean arrow func has the scope same as parent
-in some cases arrow func havin lexical scope can cause a problem and some cases its a good practice
**/

const student = {
    Name: "Abdul-Rehman",
    marks: 95,

    // `this` here refers to the global object (window),
    // because the object is created in the global scope.
    prop: this,

    // Normal function:
    // `this` refers to the calling object (student)
    getName: function () {
        console.log(this);
        return this.Name;
    },

    // Arrow function:
    // Arrow functions inherit `this` from their parent scope.
    // Here, the parent scope is the global scope,
    // NOT the student object.
    getMarks: () => {
        console.log(this);   // window object
        return this.marks;   // undefined (window has no 'marks') so here this cuase problem
    },

    getInfo1: function() { // for this func this is student obj so its child func has also student obj
        setTimeout( () => {
            console.log(this) // student obj (arrow func so this mean )
        }, 2000);
    },

    getInfo2: function() { 
        setTimeout( function() {
            console.log(this); // window obj (coz setTimeOut is called by window obj)
        }, 2000);
    }
};
console.log(student);
console.log(student.getName());


//------------What is this in js-----------------
/** 
"This" keyword refers to an object that is executing the current piece of code.
**/

//-Example
const student = {
    Name: "Abdul-Rehman",
    age: 21,
    eng: 86,
    math: 93,
    phy: 97,
    getAvg() {
        console.log(this);  // return whole obj
        // let avg = (eng + math + phy) / 3;  // through error we can't use attribute of obj in function
        let avg = (this.eng + this.math + this.phy) / 3; // this mean the calling object (obj that is calling this getAvg func)
        console.log(`${this.Name} got avg marks = ${avg}`);
    }
}
console.log(student.Name);
student.getAvg();

function getAvg() {
    console.log(this); // print window obj but it work in console (by default)
}
let para = document.querySelector("p");
para.addEventListener("click", function (){
    console.log("Para was Clicked");
})

//---------Mouse Event---------
let box = document.querySelector(".box");
box.addEventListener("mouseenter", function() { 
    console.log("Cursor inside box");
})
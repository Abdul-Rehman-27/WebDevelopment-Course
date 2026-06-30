let btn = document.querySelector("button");
let heading  = document.querySelector("h2");
let box2 = document.querySelector(".box2");


function generateColor () {
    let randomNum1 = Math.floor(Math.random() * 255);
    let randomNum2 = Math.floor(Math.random() * 255);
    let randomNum3 = Math.floor(Math.random() * 255);


    heading.innerText = `rgb(${randomNum1},${randomNum2}, ${randomNum3})`;

    box2.style.backgroundColor = `rgb(${randomNum1},${randomNum2}, ${randomNum3})`;
    
}


btn.addEventListener ("click", generateColor);

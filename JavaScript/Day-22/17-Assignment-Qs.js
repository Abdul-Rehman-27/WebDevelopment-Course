/*Qsl. Create a new input and button element on the page using JavaScript only. Set the
text of button to "Click me'*/

let bdy = document.querySelector("body");

let input = document.createElement("input");
input.placeholder = "Enter your name";
let btn = document.createElement("button");
btn.innerText = "Click Me!";
btn.id = "btn";

bdy.append(input);
bdy.append(btn);

/*Qs2. Add following attributes to the element :
Change placeholder value of input to "username"
Change the id of button to "btn'
*/
input.setAttribute("placeholder", "Enter name");
btn.setAttribute("id", "thisBtn");

/*Qs3. Access the btn using the querySelector and button id. Change the button background
color to blue and text color to white.
*/
let selectBtn = document.querySelector("button");
selectBtn.classList.add("btn");

/*Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
Change its color to purple.*/
let h1 = document.createElement("h1");
h1.innerText = "DOM Practice";
bdy.append(h1);
h1.classList.add("heading");

/*Qs5. Create a p tag on the page and set its text to "Apna College Delta Practice",
where Delta is bold.*/
let p = document.createElement("p");
p.innerText = "Apna College Delta Practice";
bdy.append(p);
p.classList.add("para");
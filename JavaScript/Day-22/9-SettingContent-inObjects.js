//--------------Setting Content in Objects-----------------

//----------inner Text-----------
/*
-This property focuses on the rendered text content. When you use innerText to read the content of an element, it returns the text as it appears on screen. It ignores HTML tags. And it also does not include text that is hidden with CSS styles.
*/
let para = document.querySelector("p");
console.dir(para.innerText); // output will be in console 
para.innerText = "My name is Abdul Rehman";

//----------inner html-----------
/**
-When you use the innerHTML property, it reads both the HTML markup and the text content of the element. This means when you use it to set the content of elements, you can include HTML tags, and the browser will render them correctly.
*/
console.dir(para.innerHTML);
para.innerHTML = "My name is: <b>Abdul Rehman</b"

let getHeading = document.getElementsByClassName("heading")[0];
getHeading.innerHTML = `<u>${getHeading.innerText}</u>`;


//-----------text Content-------
/**
-What is the textContent Property?
The textContent property also ignores all HTML tags and returns only the text. Whiles innerText reads text as it is rendered on screen, textContent reads text as it is in the markup. It also returns all text, whether it's rendered on screen or not.*/


console.dir(para.textContent);


//key difference between innerHtml and textContent
/*
-inner html and text content both are same and return text same as it is like if u write this is paragraph         it will include these slashes in output but innerHtml does one more thing it include hmtl tag and also return hidden text but textContext does't return tags.
*/

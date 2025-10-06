// how can you remove an element using removeChild

// parent element ko select kro phir uske baad child element ko select kro jise remove krna h and then parentElement.removeChild(childElement);

// example
let ul = document.querySelector("ul");
let li = document.querySelector("li");
ul.removeChild(li);

// or you can also use this method
li.remove();
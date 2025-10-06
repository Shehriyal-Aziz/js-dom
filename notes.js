// we will learn dom manuplation (js ko use krke html ko change krna)

const { createElement } = require("react");

// dom = document object model

// har cheez html ki dom hai

// topics 

// Element ko select krna

document.getElementById();
document.getElementsByClassName();
document.querySelector();
document.querySelectorAll();

// Element ko change krna usy ans=dar ki value select krna aur change krna

element.innerText = "text change karta h";
element.innerHTML = "<b>new text</b> selected element k andar wale elements ko change krta h ";
element.texContent = "text ko change krta h same as innertext";

// a way to change href value let a = document.querySelector("a");
a.href = "https://www.google.com";
// ese hi 70+ cheezain hn change krne k liye jo yaad nhi ho sakti isliye 
// pehele element select karo then console.dir karo aur console pr jaao ge to element ek object from mn dikhe jahan sari keys mil jaai gi jinko change kr sakte ho

// attribute manuplation

// set,get and remove
// kisi tag k andar attribute ko value dena set h
// kisi tag se usky ttribute ki value nikalna get h
// remove to remove h 

let img = document.querySelector("img");

element.setAttribute();
img.setAttribute("src","https://images.unsplash.com/photo-1759420740201-7e7af435ca80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8")


element.getAttribute();
img.getAttribute("src"); // www.google.com

element.removeAttribute();
img.removeAttribute("alt");

 

// dynamic use of dom manuplation


// topics
// create element html mn jo element nhi bhi h usy bana dena /js ko use krke element banana
// appendChild kisi element k andar ek naya element add krna
// removeChild kisi element k andar se ek element ko remove krna
// prepend ek element k andar ek naya element add krna but appendChild k opposite direction mn yani start mn
// replaceChild ek element k andar ek element ko dusre element se replace krna

// create element 
let h1 = document.createElement("h1"); // h1 banao aur var mn store karo
h1.textContent = "Hello World"; // h1 k andar text add krdo
document.body.appendChild(h1); // body k andar h1 ko add krdo

// appendChild  kisi element k andar ek naya element add krna

let ul = document.createElement("ul"); // ul banao
let li1 = document.createElement("li"); // li banao
li1.textContent = "item 1"; // li k andar text add krdo
ul.appendChild(li1); // ul k andar li ko add krdo


// prependChild add karo element pr start mn 


let htwo = document.createElement("h1");
htwo.textContent = "pehli line";
document.body.prepend(htwo); // with this code a new h1 has been created and added at top of body ahr pehle koi h1 ya koi aur tag hoga to uske top pr aai ga


// removeChild 
// koi bhi element doosre element (body) k andar se romove/delte krna 
htwo.remove(); // us tag k var ka nam likho and add this keyword



// styling html with js / changing style with js

let h1 = document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor = "orange";
h1.style.textTransform = "capitalize";
h1.style.fontFamily = "gilroy";


// style via classList (add,remove,toggle)

// senario
// let suppose h1 ko head class di hui h aur head ka style bhi likha hua h but aap chahte ho k head ki class hat jaai aur matha wali class lag jaai 
// steps
let h1 = document.querySelector("h1");
h1.classList.add("head");
h1.classList.remove("head");
h1.classList.add("matha");

// senario for toggle 
// aapko ko kaha jata h k age class head lagi hui h to remove karo aur agr nhi lagi to add kese karo ge
h1.classList.toggle("head");




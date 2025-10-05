// we will learn dom manuplation (js ko use krke html ko change krna)

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


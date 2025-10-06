let hone = document.querySelector("h1");
hone.textContent = "hey hey";

let htwo = document.createElement("h1");
htwo.textContent = "pehli line";
document.body.prepend(htwo);

hone.style.color = "red";
hone.style.backgroundColor = "orange";
hone.style.fontFamily = "gilroy";
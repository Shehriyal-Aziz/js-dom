// SECTION 1

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



// SECTION 2

// events and events listner

// event : koi bhi action on website

// event listner : us event ko listen krne wala mean hamesha search mn rehta h k wo event(hover) perform ho to mn apna kam karu jo bola gya h (in func)

// structure
element.addEventListener("event name","function(jo reaction hoga")
p.addEventListener("click",()=>{p.style.color = "green"});


// how much can we do with EventListener 

// addEventListener
element.addEventListener("event ka nam","function ka nam") // perfect way
// removeEventListener()
element.removeEventListener("event ka nam","funtion ka nam") 


// types of actions/events
// click 
// dblclick
// input: input feild mn kuch bhi action ho(value dalna mitana ya space) to fuction run karo
// change : kuch bhi input select mn change ya text area mnchange ho tab func run karo
// submit :  from k submit pr func run hoga. mainly use to prevent submision of form or for validation
// keydown: use when to run func on pressing any key on keyoard (jab press down hoti h key tab hi run ho jata h aur agr key hold ki to multiple times run hoga)
// keyup: jab key press karo nothing happen thast moment jab release karo ge daba kr tb aur jab upr aai gi tab func run hoga. use case form validating
// mouseover: matlab kisi obj k uper jis pr listner lagaya h, mouse uper aai ga func run karo
// mouseout: matlab kisi obj k uper jis pr listner lagaya h, mouse bhair jaai ga func run karo
// mousemove: jab mouse move ho to func runn ho
// tum memorise nhi kr sakte bohot hn just ask gpt and use 



// event object 

// jab hum event listner banate hn to as a result wo ek vent object banata h1( object that store topns of info)  hum ise parameter mn store krlete hn aur majority ise e evt ya events k nam se banate hn 

// jesa bola ye ek object hota h aur tons of info store krta h to us mn se kuch imp are

// type: tell what was type of event listner (types are above written)
// target: batata h k function jo run hua to usk effect kis pr hua ya the element that trigger the event
// preventDefualt: ye ek method h jo subit event k sath use hota h help krta h from ko og nature (submit pr reload) ko rokne mn


// event bubling

// agr element pr event litner nhi laga hua to parent ko check kare ga and agr parent ko bh na laga hua hot o uske parentgoes till reach the last parent (html tag) used when aapko ek hi function ek parent k bohot sare child pr krwana ho to bajai applying addeventlistner to each child ap parent pr lagate ho so jab bache pr event perform ho(like click) to uspr to func run k liye h hi nhi to wo parent pr check kare ga aur agr parent pr lagaya hoga event listner(click) to wo func child pr run hoga jis pr event perform (click) hua   

// this is why bubbling is so useful —
// you can attach one listener to a parent, and handle clicks for all its children inside the same function.

// instead of doing this
child1.addEventListener("click", fn);
child2.addEventListener("click", fn);
child3.addEventListener("click", fn);

// you can do this  
parent.addEventListener("click", fn);

// this code: jab child pr clcik hoga to listner parent pr hoga pr func run child pr hoga jo click hua


// flow of event and its phase

// jab bhi click krte ho ya ya koi event raise krte ho to aapka jo event flow do phase mn hota h

// phase1(capture phase): event top se neeche ki taraf aayega 
// phase2(bubling phase): eventraised element se top ki taraf jaaye ga

// by default capture phase off hota h isliye hum sirf phase two ko hote huye dekhte hn

// to capture phase on krne k liye event k func k end mn ")" se pehle ",true" likh do 
// this way capure phase on and bubling off

// example
// agr aapke pass a, b, c div hn usky andar btn to jab btn pr click karo ge to direct bubling phase se start hoga aur jo jo event func lagai gai thy div and btn pr wo bs ek event listner(click) se run honge 
// but let assume apne b div ka capture phase on kr diya(bubling phase auto off ho jai ga) to pehele phase 1 (capture) run hoga means top se neeche so hamare pass top pr a div h to check kare ga js k capturing phase h ya nhi agr nhi to ignore then move to b div check capturing phase if active run it func then to c and then btn then phase 2 (bubling start) jo k raise element se top ti taraf means pehele btn (jo clcik kiya hamne vent raised element) check hoga agr capturing on h to ignore kare ga aur agr off h to run same for btn to c to b to a
// code look

let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("button");

btn.addEventListener("clcik",function(){
    console.log("button clicked");
});

c.addEventListener("clcik",function(){
    console.log("c clicked");
});

b.addEventListener("clcik",function(){
    console.log("b clicked");
},true);

a.addEventListener("clcik",function(){
    console.log("a clicked");
},true);

// console pr result will be
// a clicked 
// b clicked
// button clicked
// c clicked





//  FORM AND VALIDATIOON

// notes mn batane ko kuch nhi js look in prac24.html and you will get to know 

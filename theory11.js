// what i sevent delegation

// good one — event delegation is just a smart use of event bubbling that already understood.

// here’s the idea in plain words:

// instead of adding an event listener to every single child element,
// you add one listener to their common parent, and let the event bubble up.

// then, inside that one listener, you use the event object (e.target) to figure out which child actually triggered the event — and handle it accordingly.


// example without delegation (inefficient)

document.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    li.classList.toggle("lt");
  });
});
// not got if child are so many
// dont works for dynamically added elements ( need to reattach listeners)






// with event delgation

const fruits = document.getElementById("fruits");

fruits.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("lt");
  }
});
// faster 
// works for dynamically added elements (no need to reattach listeners)
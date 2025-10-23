let users = [
  {
    name: "Mira Solis",
    pic: "https://images.unsplash.com/photo-1731531992660-d63e738c0b05?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    bio: "writes code, drinks cold coffee, repeats — minimalist heart, messy desk.",
  },
  {
    name: "Rayan Malik",
    pic: "https://images.unsplash.com/photo-1742201603561-3c8bfe21a7db?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    bio: "half logic, half chaos. backend brain, frontend flair.",
  },
  {
    name: "Selena Cruz",
    pic: "https://images.unsplash.com/photo-1746469460743-b0d8951ad8c1?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    bio: "turns late-night thoughts into early morning code.",
  },
  {
    name: "Noah Rahim",
    pic: "https://images.unsplash.com/photo-1747592771443-e15f155b1faf?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    bio: "debugging life, one semicolon at a time.",
  },
  {
    name: "Ava Rehman",
    pic: "https://plus.unsplash.com/premium_photo-1760441684503-ed29ee08e50f?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    bio: "soft voice, sharp mind. likes quiet playlists and clean UI.",
  },
  {
    name: "Eshan Vora",
    pic: "https://images.unsplash.com/photo-1760528542901-a074cc011a22?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    bio: "dreams in code, speaks in caffeine.",
  },
  {
    name: "Lana Yusuf",
    pic: "https://images.unsplash.com/photo-1760681556877-8754392c9939?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    bio: "vintage soul in a digital world.",
  },
  {
    name: "Kai Tanveer",
    pic: "https://images.unsplash.com/photo-1760681556877-8754392c9939?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    bio: "pixels, playlists, and perfectly timed console.logs.",
  },
  {
    name: "Nora Blaze",
    pic: "https://images.unsplash.com/photo-1747592771443-e15f155b1faf?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=500",
    bio: "quiet energy, bold design sense. lives in dark mode.",
  },
];
// saare users show karana
// filter krna har bar input krne py
// show krna filtered users

function showUsers(arr) {
    // 54-63 is for no user found line and css in style sheet
    const cards = document.querySelector(".cards");
    cards.innerHTML = "";
    
    if (arr.length === 0) {
        const msg = document.createElement("p");
        msg.textContent = "No user found";
        msg.classList.add("no-result");
        cards.appendChild(msg);
        return;
    }
    arr.forEach(function (users) {

    // create the main card div
    const card = document.createElement("div");
    card.classList.add("card");

    // create the image
    const img = document.createElement("img");
    img.classList.add("bg-img");
    img.src = users.pic;
    img.alt = "";

    // create blurred layer div
    const blur = document.createElement("div");
    blur.style.backgroundImage = `url(${users.pic})`;
    blur.classList.add("blurred-layer");

    // create content div
    const content = document.createElement("div");
    content.classList.add("content");

    // create h3
    const heading = document.createElement("h3");
    heading.textContent = users.name;

    // create paragraph
    const paragraph = document.createElement("p");
    paragraph.textContent = users.bio;

    // assemble content
    content.appendChild(heading);
    content.appendChild(paragraph);

    // assemble card
    card.appendChild(img);
    card.appendChild(blur);
    card.appendChild(content);

    // finally, add to the page
    document.querySelector(".cards").appendChild(card);
  });
}
showUsers(users);

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

let inp = document.querySelector(".inp");
// lowercase
inp.addEventListener(
  "input",
  debounce((e) => {
    let value = e.target.value.toLowerCase(); // convert search to lowercase
    //filter
    let newUsers = users.filter(
      (users) => users.name.toLowerCase().includes(value) // make names lowercase too
    );
    //   clear old
    document.querySelector(".cards").innerHTML = "";
    //   display searched
    showUsers(newUsers);
  }, 300)
);

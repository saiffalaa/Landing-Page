/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

//Global Variables
let count = 0;
const btn = document.querySelector("#btn");
const main = document.querySelector("main");
const nav = document.querySelector("#navbar__list");
let Section = [];
let y = [];
let State = -1;
for (let i = 0; i < 4; i++) {
  addSection(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sedconvallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie  semper in tellus. Sed congue et odio sed euismod."
  );
}
//Changing the activity of section
function Active(index) {
  const curPos = document.querySelector("#section" + (index + 1));
  let prevPos;
  if (State === index) {
    Section[index].classList.add("your-active-class");
    curPos.style.color = "blue";
    return;
  } else {
    Section[index].classList.add("your-active-class");
    curPos.style.color = "blue";
    if (State !== -1) {
      Section[State].classList.remove("your-active-class");
      document.querySelector(`#section${State + 1}`).style.color = "white";
    }
    State = index;
  }
}
function unActive() {
  //to unactive if i'm not on any section
  if (Section[0].classList.contains("your-active-class"))
    Section[0].classList.remove("your-active-class");
  document.querySelector("#section1").style.color = "white";
}
// creating input form to add Sections

const input = document.createElement("input");
const submit = document.createElement("button");
submit.innerText = "Add Section";
submit.id = "btn";
//input.className = "input";
input.placeholder = "Write the Section.";
const container = document.createElement("div");
container.className = "input";
const heading = document.querySelector(".page__header");
container.appendChild(input);
container.appendChild(submit);
heading.appendChild(container);
submit.addEventListener("click", function () {
  addSection(input.value);
  input.value = "";
});

document.addEventListener("scroll", () => {
  //checking the postion of scroll and section to change the focus
  const curPos = document.documentElement.scrollTop;
  if (curPos < y[0]) unActive();
  else {
    for (let i = 0; i < Section.length; i++) {
      if (i == Section.length - 1) {
        if (
          curPos < document.querySelector(".page__footer").offsetTop &&
          curPos >= y[i]
        )
          Active(i);
      } else if (curPos < y[i + 1] && curPos >= y[i]) Active(i);
    }
  }
});
//adding section function
function addSection(inpt) {
  const text = document.createElement("p");
  const h2 = document.createElement("h2");
  h2.innerText = `Section ${count + 1}`;
  text.innerText = inpt;
  const div = document.createElement("div");
  Section[count] = document.createElement("section");
  div.appendChild(h2);
  div.appendChild(text);
  div.className = "landing__container";
  Section[count].appendChild(div);
  Section[count].id = `Section${count + 1}`;
  main.appendChild(Section[count]);
  const anchor = document.createElement("a"); // creating links to go specific sections
  anchor.href = `#Section${count + 1}`;
  const li = document.createElement("li"); //List to the Exsisting Sections
  li.innerText = `Section ${count + 1}`;
  li.id = `section${count + 1}`;
  anchor.appendChild(li);
  anchor.addEventListener("click", scr);
  nav.appendChild(anchor);
  y[count] = document.querySelector(`#Section${count + 1}`).offsetTop - 300; // store postions of sections corrected
  count++; //incrementing the number of sections
}
//the scroll function to figure out which section it should move to
function scr(e) {
  e.preventDefault();
  let ind;

  tarIndex = parseInt(
    e.target.id.slice(7, e.target.id.length), //parsing the number of the section //corrected also as in old code will fail after the 9th section
    10
  );
  window.scrollTo({ top: y[tarIndex - 1] + 300, behavior: "smooth" });
  Active(tarIndex - 1);
  //     top: y[tarIndex - 1],
  //     behavior: "smooth",
  //   });
}

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

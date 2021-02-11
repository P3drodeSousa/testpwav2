// const links = document.querySelectorAll(".exercice_Menu");

// function selectedLink(e) {
//   console.log("clicked");
//   console.log(e.target);
//   e.target.classList.toggle("selected");
// }

// links.forEach((link) => {
//   link.addEventListener("click", selectedLink);
// });

//   slide.forEach(el => {
//     el.classList.remove("selected");
//   });

//   e.target.classList.toggle("selected");
// });
// const header = sessionStorage.getItem("Exercice");

// document.querySelector(".exerciceMenu_Header h2").innerText = header;

// document
//   .querySelector("#exercice")
//   .addEventListener("click", () => (window.location = "exercice.html"));

// const niveau = document.querySelectorAll("#niveau");
// const question = document.querySelectorAll("#question");
// const time = document.querySelectorAll("#time");

// function toggleSelected() {
//   const siblings = event.target.parentNode.child;
//   console.log(siblings);
//   // siblings.forEach((el) => {
//   //   el.classList.remove("selected");
//   // });
//   event.target.classList.toggle("selected");
// }

// niveau.forEach((lvl) => {
//   lvl.addEventListener("click", toggleSelected);
// });

const lvl = document.querySelectorAll("#lvl");
const number = document.querySelectorAll("#number");
const time = document.querySelectorAll("#time");
const title = document.querySelector("h2");

function handleClick(e) {
  localStorage.setItem(e.target.id, e.target.getAttribute("value"));
  document.querySelectorAll(`#${e.srcElement.id}`).forEach((child) => {
    child.classList.remove("selected");
  });

  e.target.classList.toggle("selected");
}

lvl.forEach((level) => {
  level.addEventListener("click", (e) => handleClick(e));
});

number.forEach((el) => {
  el.addEventListener("click", (e) => handleClick(e));
});

time.forEach((el) => {
  el.addEventListener("click", (e) => handleClick(e));
});

document.querySelector("#exercice").addEventListener("click", () => {
  window.location = "exercice1.html";
});

const getTitle = () => {
  localStorage.setItem("number", "");
  localStorage.setItem("lvl", "");
  localStorage.setItem("time", "");
  title.innerText = localStorage.getItem("exercice");
};

window.onload = getTitle;

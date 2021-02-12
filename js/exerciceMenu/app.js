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

const lvl = document.querySelectorAll("#niveaux");
const number = document.querySelectorAll("#questions");
const time = document.querySelectorAll("#durée");
const title = document.querySelector("h2");
const titleValid = document.querySelector("#valid");

let valid = {
  questions: false,
  niveaux: false,
  durée: false,
};

function handleClick(e) {
  localStorage.setItem(e.target.id, e.target.getAttribute("value"));

  valid = {
    ...valid,
    [e.target.id]: true,
  };

  // valid.e.target.id = true;
  document.querySelectorAll(`#${e.srcElement.id}`).forEach((child) => {
    child.classList.remove("selected");
  });
  console.log(valid);
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

function validate() {
  if (!valid.questions || !valid.durée || !valid.niveaux) {
    let falseValues = [];
    Object.keys(valid).forEach((key) => {
      if (!valid[key]) falseValues.push(key);
    });

    return (titleValid.innerText = `Veuillez sélectionner tous les infos (${falseValues.map(
      (item) => item
    )})`);
  }
  window.location = "exercice1.html";
}

document.querySelector("#exercice").addEventListener("click", validate);

const getTitle = () => {
  localStorage.setItem("questions", "");
  localStorage.setItem("niveaux", "");
  localStorage.setItem("durée", "");
  title.innerText = localStorage.getItem("exercice");
};

window.onload = getTitle;

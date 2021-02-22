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
const number = document.querySelectorAll("#number");
const time = document.querySelectorAll("#durée");
const title = document.querySelector(".exercice_title");
const titleValid = document.querySelector("#valid");
const modal = document.querySelector(".modal");
const aide = document.querySelector(".aide");
const close = document.querySelectorAll("#close");
aide.addEventListener("click", displayModal);

/* Display modal */

function displayModal() {
  modal.style.display = "block";
}

//Cloce Modal
close.forEach((el) => {
  el.addEventListener("click", closeModal);
});

function closeModal() {
  modal.style.display = "none";
}

let valid = {
  number: false,
  niveaux: false,
  durée: false,
};

function handleClick(e) {
  localStorage.setItem(e.target.id, e.target.getAttribute("value"));

  valid = {
    ...valid,
    [e.target.id]: true,
  };

  document.querySelectorAll(`#${e.srcElement.id}`).forEach((child) => {
    child.style.background = "#5e8fb9";
    child.classList.remove("selected");
  });
  e.target.style.background = "#f5c800";
  e.target.classList.toggle("selected");
  validate();
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
  // document.querySelectorAll(`h3`).forEach((el) => {
  //   el.style.color = "var(--text)";
  // });

  // let erreur = 0;

  if (!valid.number || !valid.durée || !valid.niveaux) {
    // Object.keys(valid).forEach((key) => {
    //   document.querySelectorAll(`#${key}`).forEach((el) => {
    //     el.style.border = "none";
    //   });
    //   if (!valid[key]) {
    //     erreur = ++erreur;
    //     document.querySelector(`h3.${key}`).style.color = "#ce0000";
    //     document.querySelectorAll(`#${key}`).forEach((el) => {
    //       el.style.border = "2px solid #ce0000";
    //     });
    //   }
    // });
    return;
    // const vos = erreur === 1 ? "votre" : "vos";
    // return (titleValid.innerText = `Veuillez préciser ${vos} choix`);
  }
  document.querySelector("#exercice").disabled = false;
}

// document.querySelector("#exercice").addEventListener("click", validate);
document.querySelector("#exercice").disabled = true;
document
  .querySelector("#exercice")
  .addEventListener("click", () => (window.location = "exercice1.html"));

const getTitle = () => {
  localStorage.setItem("number", "");
  localStorage.setItem("niveaux", "");
  localStorage.setItem("durée", "");
  title.innerText = localStorage.getItem("exercice");
};

/* Inactivity */
function logout() {
  // return (titleValid.innerText = `Avez vous besoin d'aide ?`);
  aide.style.display = "flex";
}

let timeup;

function resetTimer() {
  clearTimeout(timeup);
  timeup = setTimeout(logout, 10000);
  // 1000 milliseconds = 1 second
}

let events = [
  "mousedown",
  "mousemove",
  "keypress",
  "scroll",
  "touchstart",
  "click",
];
events.forEach(function (name) {
  document.addEventListener(name, resetTimer);
});

window.addEventListener("load", () => {
  resetTimer();
  getTitle();
});

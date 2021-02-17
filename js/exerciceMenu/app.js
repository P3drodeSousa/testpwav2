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
const title = document.querySelector("h2");
const titleValid = document.querySelector("#valid");

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

  console.log(e.target);
  // valid.e.target.id = true;
  document.querySelectorAll(`#${e.srcElement.id}`).forEach((child) => {
    child.style.background = "#5e8fb9";
    child.classList.remove("selected");
  });
  e.target.style.background = "#f5c800";
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
  document.querySelectorAll(`h3`).forEach((el) => {
    el.style.color = "var(--text)";
  });
  if (!valid.number || !valid.durée || !valid.niveaux) {
    Object.keys(valid).forEach((key) => {
      document.querySelectorAll(`#${key}`).forEach((el) => {
        el.style.border = "none";
      });
      if (!valid[key]) {
        document.querySelector(`h3.${key}`).style.color = "var(--golden)";
        document.querySelectorAll(`#${key}`).forEach((el) => {
          el.style.border = "2px solid var(--golden)";
        });
      }
    });

    return (titleValid.innerText = `Veuillez préciser votre choix`);
  }
  window.location = "exercice1.html";
}

document.querySelector("#exercice").addEventListener("click", validate);

const getTitle = () => {
  localStorage.setItem("number", "");
  localStorage.setItem("niveaux", "");
  localStorage.setItem("durée", "");
  title.innerText = localStorage.getItem("exercice");
};

window.onload = getTitle;

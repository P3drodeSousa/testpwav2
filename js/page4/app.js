document.querySelector("body").style.background = "#5485af";

const theme_1 = document.querySelector(".theme_1");
const theme_2 = document.querySelector(".theme_2");

const category = JSON.parse(sessionStorage.getItem("PageInfos"));
const thematique = sessionStorage.getItem("Thematique");

theme_1.innerHTML = `<h3>/ ${category.name}</h3>`;
theme_2.innerHTML = `<h3>/ ${thematique}</h3>`;
theme_2.addEventListener("click", () => window.history.back());

function goToCategory() {
  window.location = "./page2.html";
}

theme_1.addEventListener("click", goToCategory);

function goToExercice() {
  console.log(event.target.innerText);
  sessionStorage.setItem("Exercice", event.target.innerText);
  window.location = "./exerciceMenu.html";
}

const exercices = document.querySelectorAll(".exercice");

exercices.forEach((exercice) => {
  exercice.addEventListener("click", goToExercice);
});

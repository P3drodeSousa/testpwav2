const thematiques = document.querySelectorAll(".thematique");
const theme = document.querySelector(".theme");

const category = JSON.parse(sessionStorage.getItem("PageInfos"));

theme.innerHTML = `<h3>/ ${category.name}</h3>`;
theme.addEventListener("click", () => window.history.back());

function goToExercice(i) {
  sessionStorage.setItem("Thematique", event.target.innerText);
  window.location = "./exerciceList.html";
}

thematiques.forEach((thematique, i) => {
  thematique.addEventListener("click", () => goToExercice(i));
});

document.querySelector("body").style.background = "#366894";

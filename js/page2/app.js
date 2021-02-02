const Container = document.querySelector("main");

const categories = [
  {
    name: "Transcription",
    description: "Nombre, lettre, argent, séparateur de millier, virgule",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les 4 opérations",
    description: "+, -, x, /",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Calcul mental",
    description: "Les tables 2 à 12, arrondis, argent, complément à 10 et 100",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les pourcentages",
    description: "",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les fractions",
    description:
      "Notion de fraction, fractions usuels, quatre opérations, problèmes",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les unités",
    description: "l, m, g, m2, m3",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Temps, vitesse",
    description: "",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Transcription",
    description: "Nombre, lettre, argent, séparateur de millier, virgule",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les 4 opérations",
    description: "+, -, x, /",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Calcul mental",
    description: "Les tables 2 à 12, arrondis, argent, complément à 10 et 100",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les pourcentages",
    description: "",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les fractions",
    description:
      "Notion de fraction, fractions usuels, quatre opérations, problèmes",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Les unités",
    description: "l, m, g, m2, m3",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
  {
    name: "Temps, vitesse",
    description: "",
    support: "http://www.africau.edu/images/default/sample.pdf",
  },
];

function goToPage3(i) {
  sessionStorage.setItem("PageInfos", JSON.stringify(categories[i]));
  window.location = "./page3.html";
}

function loadContent() {
  categories.forEach((cat, i) => {
    const { name, description, support } = cat;

    const catEl = document.createElement("div");
    catEl.classList.add("category");
    catEl.classList.add("opening");
    catEl.innerHTML = `

        <img src="./img/icons/download.svg" alt="" />
          <a href="../img/sample.pdf" download>
        <div class="supp">
          <span>Support de cours <b>PDF</b> 2Mo</span>
        </div>
        </a>
        <div class="title">
          <h2>${name}</h2>
          <span>${description}</span>
        </div>

        `;

    Container.appendChild(catEl);
  });
}

function showSupport() {
  document.querySelector(".exTitle").classList.toggle("open");
  // document.querySelector(".exTitle").style.transform = " translateX(0px)";
}

// Event Listeners
window.load = loadContent();

/* go to next page*/
document.querySelectorAll(".title").forEach((title, i) => {
  title.addEventListener("click", () => goToPage3(i));
});

/* show support */
function handleClick(e) {
  e.srcElement.nextElementSibling.nextElementSibling.classList.toggle("opened");
}

document.querySelectorAll(".download").forEach((supp) => {
  supp.addEventListener("click", handleClick);
});

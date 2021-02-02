const propos = document.querySelector("#propos");
const close = document.querySelector("#close");

function toggleDisplay() {
  if (propos.style.display === "none") {
    propos.style.display = "block";
  } else {
    propos.style.display = "none";
  }
}

document
  .querySelector("footer .propos")
  .addEventListener("click", toggleDisplay);
close.addEventListener("click", toggleDisplay);

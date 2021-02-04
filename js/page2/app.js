document.querySelectorAll("#download").forEach((supp) => {
  supp.addEventListener("click", handleClick);
});

function handleClick(e) {
  e.srcElement.parentNode.parentElement.lastElementChild.classList.toggle(
    "opened"
  );
}

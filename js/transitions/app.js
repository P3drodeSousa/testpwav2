barba.use(barbaCss);

barba.init({
  transitions: [
    {
      name: "home",
      to: {
        namespace: ["home"],
      },
      sync: true,
      beforeEnter() {
        support();
      },
      leave() {},
      enter() {},
    },
    {
      name: "test",

      from: {
        namespace: ["home"],
      },
      to: {
        namespace: ["test"],
      },
      sync: true,
      beforeLeave(data) {
        localStorage.setItem("theme", data.trigger.getAttribute("value"));
      },
      leave() {},
      beforeEnter() {
        theme();
      },
      enter() {},
    },
    {
      name: "test2",
      from: {
        namespace: ["test"],
      },
      to: {
        namespace: ["page3"],
      },
      sync: true,
      beforeLeave(data) {
        localStorage.setItem("thematique", data.trigger.getAttribute("value"));
      },
      leave() {},
      beforeEnter() {
        theme2();
      },
      enter() {},
    },
    {
      name: "home",
      from: {
        namespace: ["page3"],
      },
      to: {
        namespace: ["test"],
      },
      sync: true,
      leave() {},
      beforeEnter() {
        theme();
      },
      enter() {},
    },
  ],
});

/* Page 2 - Show suppport download */
function handleClick(e) {
  e.srcElement.parentNode.parentElement.lastElementChild.classList.toggle(
    "opened"
  );
}

function support() {
  document.querySelectorAll("#download").forEach((supp) => {
    supp.addEventListener("click", handleClick);
  });
}

/* Update header Theme */
function theme() {
  document.querySelector(
    ".theme"
  ).innerHTML = ` <a href="page2.html"><svg xmlns="http://www.w3.org/2000/svg" width="11.137" height="23.41" viewBox="0 0 11.137 23.41">
  <path id="Union_179" data-name="Union 179" d="M324.761,406.947l-7.308,23.248-.051.162h3.763l7.322-23.247.052-.163Z" transform="translate(-317.402 -406.947)"/>
</svg> <span>${localStorage.getItem("theme")}</span>
</a>`;
}

function theme2() {
  document.querySelector(
    ".theme2"
  ).innerHTML = ` <a href="page2.html" class="darkBlue"><svg xmlns="http://www.w3.org/2000/svg" width="11.137" height="23.41" viewBox="0 0 11.137 23.41">
  <path id="Union_179" data-name="Union 179" d="M324.761,406.947l-7.308,23.248-.051.162h3.763l7.322-23.247.052-.163Z" transform="translate(-317.402 -406.947)"/>
</svg> <span>${localStorage.getItem("theme")}</span>
</a>
<a href="page3.html" class="blue"><svg xmlns="http://www.w3.org/2000/svg" width="11.137" height="23.41" viewBox="0 0 11.137 23.41">
  <path id="Union_179" data-name="Union 179" d="M324.761,406.947l-7.308,23.248-.051.162h3.763l7.322-23.247.052-.163Z" transform="translate(-317.402 -406.947)"/>
</svg> <span>${localStorage.getItem("thematique")}</span>
</a>`;
}

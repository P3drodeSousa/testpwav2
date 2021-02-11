import { exercice, scrollFunction, theme2, theme, support } from "../app.js";

barba.use(barbaCss);

barba.hooks.before((data) => {
  window.onscroll = function () {
    scrollFunction();
  };
});

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
        exercice();
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

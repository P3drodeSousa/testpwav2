barba.use(barbaCss);

barba.init({
  transitions: [
    {
      name: "home",
      to: {
        namespace: ["home"],
      },
      sync: true,
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
      leave() {},
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
      leave() {},
      enter() {},
    },
    {
      name: "test4",
      from: {
        namespace: ["page3"],
      },
      to: {
        namespace: ["test"],
      },
      sync: true,
      leave() {},
      enter() {},
    },
  ],
});

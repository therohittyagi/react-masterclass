const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "sub-parent1" }, [
    React.createElement(
      "h1",
      { id: "child1" },
      "Nested Hello World With React Child 1"
    ),
    React.createElement(
      "h1",
      { id: "child2" },
      "Nested Hello World With React Child 2"
    ),
  ]),
  React.createElement("div", { id: "sub-parent2" }, [
    React.createElement(
      "h1",
      { id: "child3" },
      "Nested Hello World With React Child 3"
    ),
    React.createElement(
      "h1",
      { id: "child4" },
      "Nested Hello World With React Child 4"
    ),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

import React from "react";
import ReactDOM from "react-dom/client";

//Core React Element => Object => HTML Element (on render)

const element = React.createElement("div", { class: "title" }, [
  React.createElement("h1", {}, "This is Heading 1"),
  React.createElement("h2", {}, "This is Heading 2"),
  React.createElement("h3", {}, "This is Heading 3"),
]);

console.log("element", element);

// JSX - is not HTML inside JS
// it is xml like syntax
//to give attributes in jsx you have to use camelCase
//JSX => babel transpiles React.createElement => ReactElement JS => Object => HTML Element (on render)
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste Rohit Tyagi
  </h1>
);

console.log("jsxHeading", jsxHeading);

// React Component - Everything is a component in react
// Class based Component - Old way of writing code - it use JS classes
// Functional Component - New way of writing code - it use JS functions - it is normal js function - a fuction which returns react element

// const Heading = () =>  <h1>Namaste Functional Component</h1>;

// const HeadingComponent = () => {
//  return(
//   <h1>
//     Namaste Functional Component
//   </h1>)
// };

// const HeadingComponent = () => {
//   return <h1>Namaste Functional Component</h1>;
// };

// const Title = function () {
//   return <h1>Title Component</h1>;
// };

const Title = () => {
  return <h1>Title Component</h1>;
};

const Number = 1000;

const HeadingComponent = () => (
  <div id="container">
    <h2>{Number + 200}</h2>
    <h1>Namaste Functional Component</h1>
    <Title />
    {Title()}
    <Title></Title>
    {jsxHeading}
  </div>
);

// Component Composition - to put one component into other component
// anything that you write inside curly braces in JSX is act as JavaScript

// React Root
const root = ReactDOM.createRoot(document.getElementById("root"));

// This is how you render react element
// root.render(jsxHeading);

// This is how you render a component
root.render(<HeadingComponent />);

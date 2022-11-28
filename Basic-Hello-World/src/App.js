import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./logo.svg";
import user from "./user.png";

const root = ReactDOM.createRoot(document.getElementById("root"));

// 1. Creating a component using the naive way - React.createElement()
// const naiveComponent = React.createElement("div", { className: "title" }, [
//     React.createElement("h1", { id: "heading-1" }, "Hello, world"),
//     React.createElement("h2", { id: "heading-2" }, "This is a React component"),
//     React.createElement("h3", { className: "heading-3" }, "It is created in the naive way using 'React.createElement'")
// ]);
// root.render(naiveComponent);

// 2. Creating a component using JSX
// const jsxComponent = (
//     <div>
//         <h1 id="heading-1">Hello, World</h1>
//         <h2 id="heading-2">This is a React component</h2>
//         <h3 className="heading-3">It is created using JSX</h3>
//     </div>
// )
// root.render(jsxComponent);

// 3. Creating a functional component
// const FunctionalComponent = () => {
//     return (
//         <div>
//             <h1 id="heading-1">Hello, World</h1>
//             <h2 id="heading-2">This is a React component</h2>
//             <h3 className="heading-3">It's a functional component</h3>
//         </div>
//     )
// }
// root.render(<FunctionalComponent />);

// 4. Creating a JSX TitleComponent, Functional HeaderComponent, and SearchComponent
const jsxTitleComponent = (
  <h3 className="heading-3">This is a JSX Component</h3>
);
const FunctionalTitleComponent = () => (
  <h3 className="heading-3">This is a Functional Component</h3>
);

const SearchComponent = () => {
  return (
    <div className="search">
      <img className="react-logo" src={logo} alt="logo" />
      <input
        className="search-bar"
        type="text"
        placeholder="Search anything..."
        autoFocus
      />
      <img className="user-logo" src={user} alt="user" />
    </div>
  );
};

const HeaderComponent = () => {
  return (
    <div className="header">
      <h1>React Bootcamp 2022</h1>
      <SearchComponent />
      {jsxTitleComponent}
      <FunctionalTitleComponent />
    </div>
  );
};
root.render(<HeaderComponent />);

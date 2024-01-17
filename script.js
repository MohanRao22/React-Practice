// const heading = document.createElement("h1");
// const root = document.getElementById("parent2");
// heading.innerHTML = "Rendered via JS";
// root.appendChild(heading);


/**
 *    React.createElement("Tag", "Attributes", "Children")
 * 
 */
const parentRoot = ReactDOM.createRoot(document.getElementById("parent2"));
const headerRoot = ReactDOM.createRoot(document.getElementById("header"));
const desc = React.createElement("div",{id:"parent"}, React.createElement("h5",{},"This is an heading tag"));
console.log(desc);
const headerDesc = React.createElement("ul",{class:"nav-list"},
   [
      React.createElement("li",{},"Home"),
      React.createElement("li",{},"Services"),
      React.createElement("li",{},"Solutions"),
      React.createElement("li",{},"Contact"),
   ]
);
console.log(headerDesc);

headerRoot.render(headerDesc);
parentRoot.render(desc);
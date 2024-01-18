# component
A normal JS function which return JSX

# React Element
==================

const a = (
    <div class='a'>
     <h1>normal react elemnt</h1>
    </div>
);


# React Function Component
=====================
It is just an normal JS function
Component name should start with capital letter

A function that returns some JSX code / React Element is known as React Component.
const Header = ()=> {
    return <h1>Hello world</h1>;
}

Whenever curly braces used return should be there.

# Another method

no need of curly braces
  
   =============#===================
    
const App = ()=> <h1>Hiii</h1>
 
     ===== Same as below =======
    
const App = ()=>{
    return <h1>Hiii </h1>
}

     ===== Same as below =======

const App = ()=>
(
 <h1>Hiii</h1>
); 
  ( Recommeded )

    =============#===================


# =========================


import React from "react";
import ReactDOM  from "react-dom/client";

const parentRoot = ReactDOM.createRoot(document.getElementById("parent2"));
const headerRoot = ReactDOM.createRoot(document.getElementById("header"));
const desc = React.createElement("div",{id:"parent"}, React.createElement("h5",{},"This is an heading tag"));
console.log(desc);
const headerDesc = React.createElement("ul",{className:"nav-list"},
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


# ============================

# ============================


    import React from "react";
import ReactDOM from "react-dom/client";

const headerRoot = ReactDOM.createRoot(document.getElementById("header"));

// React Element

const title = <h1>Welcome to world of JSX</h1>;

// React component

const Menu = ()=> (

    <div className="menu-container">
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Solutions</li>
            <li>Contact</li>
        </ul>
    </div>
)

const App = ()=> (
    <div className="main">
        <h1>Rendered using JSX</h1>
        {title}
        {/* Calling component inside an another component is called as component composition */}
        <Menu />
    </div>
);

// const Second = function(){

//     return(
//         <div className="dss">
//             <p>sdsssd</p>
//         </div>
//     );
// }

headerRoot.render(<App />);


# ============================
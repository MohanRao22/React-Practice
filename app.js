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
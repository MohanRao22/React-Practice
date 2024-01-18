import React from "react";
import ReactDOM from "react-dom/client";


const Header = ()=> (

    <div className="header-wrapper">
        <div className="logo-wrapper">
            <img src="https://logo.com/image-cdn/images/kts928pd/production/bf0bee1632f59363afb4be74978bb5d5bd7293ea-404x397.png?w=1080&q=72" alt="logo" />
        </div>
        <div className="menu-wrapper">
            <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Solutions</li>
            <li>Contact</li>
            </ul>
        </div>
    </div>

);

export default Header;
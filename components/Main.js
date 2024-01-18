import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const rootElement = ReactDOM.createRoot(document.getElementById("main-container"));

const Main  = ()=> (
   <div> 
    <Header />
    <Body />
    <Footer />
    </div>
);

rootElement.render(<Main />)
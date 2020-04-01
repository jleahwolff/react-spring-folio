import React from "react";
import leafDark from "../assets/logo-dark-mode.png";
import "../sass/navigation.css";

const Navigation = () => {
    return(
        <div className="navigation-container">
            <div className="nav-content">
            <img src={leafDark} alt="Logo for Strain Watch"/>
            <h4>menu</h4>
            </div>
        </div>
    )
}

export default Navigation;
import React from 'react';
import './sass/output.css';
import ParallaxComponent from "./components/ParallaxComponent.js";
import Navigation from "./components/Navigation";
import ReactTooltip from 'react-tooltip';
import letters from "./assets/letters.png";

function App() {

  return (
    <div className="App">
      <Navigation />
      <ParallaxComponent />
      <ReactTooltip />
      <div className="footer">
        <div className="footer-logo">
        <img className="footerimg" src={letters} />
        <h4> Strain Watch ® </h4>
        </div>
        <p>Careers | Money | College | Loans | Coronavirus | Stuck-at-home | Ozarks on Netflix</p>
      </div>
    </div>
  );
}

export default App;

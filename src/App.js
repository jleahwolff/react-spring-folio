import React from 'react';
import './sass/output.css';
import ParallaxComponent from "./components/ParallaxComponent.js";
import Navigation from "./components/Navigation";
import ReactTooltip from 'react-tooltip';

function App() {

  return (
    <div className="App">
      <Navigation />
      <ParallaxComponent />
      <ReactTooltip />
      <div className="footer">
        <h4> Strain Watch ® </h4>
        <p>Careers | Money | College | Loans | Coronavirus | Stuck-at-home | Ozarks on Netflix</p>
      </div>
    </div>
  );
}

export default App;

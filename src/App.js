import React from 'react';
import './sass/output.css';
import Parallax from "./components/Parallax.js";
import Navigation from "./components/Navigation";

function App() {

  return (
    <div className="App">
      <Navigation />
      <Parallax />
      <div className="footer">
        <h4> Strain Watch ® </h4>
        <p>Careers | Money | College | Loans | Coronavirus | Stuck-at-home | Ozarks on Netflix</p>
      </div>
    </div>
  );
}

export default App;

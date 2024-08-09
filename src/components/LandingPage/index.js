import React from 'react';
import Home from '../Home';
import About from '../About';
import Portfolio from '../Portfolio';
import Contact from '../Contact';
import Navbar from '../Navbar'

import './style.css';

function LandingPage() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}

export default LandingPage;

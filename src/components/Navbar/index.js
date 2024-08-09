import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './style.css'

function ScrollToHashElement() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" id='navbar-top'>
      <a class="navbar-brand" href="#">
        <img
          src="https://res.cloudinary.com/dsjcty43b/image/upload/v1723102542/navbar-logo-img_ilxdyn.png"
          className="navbar-image"
          alt="logo"
        />
      </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav m-auto">
            <a className="nav-link" href="#home" id="nav-1">
              Home <span className="sr-only">(current)</span>
            </a>
            <a className="nav-link" href="#about" id="nav-2">About</a>
            <a className="nav-link" href="#portfolio" id="nav-3">Portfolio</a>
            <a className="nav-link" href="#contact" id="nav-4">Contact</a>
          </div>
        </div>
      </nav>
      <ScrollToHashElement />
    </div>
  );
}

export default Navbar;

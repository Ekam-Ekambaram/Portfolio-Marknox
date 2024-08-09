import React from 'react';
import './style.css';

function Portfolio() {
  return (
    <section id="my-works">
    <div class="portfolio">
      <div class="proj-heading">
        <h1>Portfolio</h1>
      </div>
      <div class="portfolio-content container">
        <div class="proj-1">
          <img src="https://i.postimg.cc/qM9TjGTG/Screenshot-80.png" alt=''/>
          <div class="proj1-details">
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3-alt"></i>
            <i class="fab fa-js"></i>
            <h2>Restaurant Website UI</h2>
            <p>Build Using HTML,CSS,JS</p>
            <button><a href="https://github.com/sanketbodke/Restaurant-Website" target="blank">View source <i
                  class="fas fa-external-link-alt"></i></a>
            </button>
            <button><a href="https://fervent-lamarr-2bc6cf.netlify.app/" target="blank">Try it Live <i
                  class="fas fa-external-link-alt"></i></a>
            </button>
          </div>
        </div>

        <div class="proj-2">
          <img src="https://i.postimg.cc/FR848bSm/Screenshot-76.png" alt=''/>
          <div class="proj2-details">
            <i class="fab fa-html5"></i>
            <i class="fab fa-css3-alt"></i>
            <h2>Profile Card</h2>
            <p>Build Using HTML,CSS</p>
            <button><a href="https://github.com/sanketbodke/CodePen" target="blank">View source <i
                  class="fas fa-external-link-alt"></i></a>
            </button>
            <button><a href="https://codepen.io/sanketbodke/pen/NWgKyZW" target="blank">Try it Live <i
                  class="fas fa-external-link-alt"></i></a>
            </button>
          </div>

        </div>
        <div class="more-work">
          <p>
            More
          </p>
          <a href="https://codepen.io/sanketbodke" target="blank">CodePen</a>
        </div>
      </div>
    </div>
  </section>

  );
}

export default Portfolio;

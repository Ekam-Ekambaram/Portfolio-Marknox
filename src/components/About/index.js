import React from 'react';
import './style.css'

function About() {
  return (
    <div>
       <section class="about-me" id="about">
    <div class="container">
      <div class="about-content">
        <div class="left-content">
          <div>
            <h1 class="about-heading">About Me</h1>
          </div>
          <img src="https://i.postimg.cc/Hx4nChpH/fbavatar-1630400663387-6838396024049256103.png" alt="image" />
          <p>
            I am 16 year old, BBA-CA student studied at Pratibha College of Commerce and Computer studies.
            I really enjoy solving problems as well as making things pretty and easy to use. I can't stop learning new
            things; the more, the better.
          </p>
          <div class="work-arrow">
            <p>
              <a href="#my-works">Check out my work <i class="fas fa-arrow-down"></i></a>
            </p>
          </div>
        </div>
        <div class="skills">
          <div class="right-content">
            <div>
              <h1 class="skills-heading">My Skills</h1>
            </div>
            <div class="skills-bar">
              <div class="bar">
                <div class="info">
                  <span>HTML</span>
                </div>
                <div class="progress-line"><span class="html"></span></div>
                <div class="bar">
                  <div class="info">
                    <span>CSS</span>
                  </div>
                  <div class="progress-line"><span class="css"></span></div>
                  <div class="bar">
                    <div class="info">
                      <span>BOOTSTRAP</span>
                    </div>
                    <div class="progress-line"><span class="bootstrap"></span></div>
                    <div class="bar">
                      <div class="info">
                        <span>JAVASCRIPT</span>
                      </div>
                      <div class="progress-line"><span class="javascript"></span></div>
                      <div class="bar">
                        <div class="info">
                          <span>C Programming</span>
                        </div>
                        <div class="progress-line"><span class="c"></span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="work-arrow-2">
              <p>
                <a href="#my-works">Check out my work <i class="fas fa-arrow-down"></i></a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}

export default About;

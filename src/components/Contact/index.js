import React from 'react';
import './style.css'
function Contact() {
  return (
    <section class="contact" id="contact">
        <div class="max-width">
          <h2 class="title">
            <span>Contact Me</span>
          </h2>
          <div class="contact-content">
            <div class="column left">
              <div class="text">Get in Touch</div>
              <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be a part of your visions. Email me with any questions or inquiries. I'll happy to answer your questions and set up a meeting with you.</p>
              <div class="icons">

                <a href="#">
                  <div class="row">
                    <i class="fa-solid fa-user-large"></i>
                    <div class="info">
                      <div class="head">Name</div>
                      <div class="sub-title"><a href="#"> Joe Greyson</a></div>
                    </div>
                  </div>
                </a>

                <div class="row">
                  <i class="fa-solid fa-location-dot"></i>
                  <div class="info">
                    <div class="head"> Address</div>
                    <div class="sub-title"> ABC, 123 Lane, India</div>
                  </div>
                </div>

                <div class="row">
                  <i class="fa-solid fa-envelope"></i>
                  <div class="info">
                    <div class="head">Email</div>
                    <div class="sub-title"><a href="mailto:#"> example@example.com</a></div>
                  </div>
                </div>

                <div class="row">
                  <i class="bi bi-translate"></i>
                  <div class="info">
                    <div class="head">Language Known</div>
                    <div class="sub-title">Hindi, English, Odia, Bengali</div>
                  </div>
                </div>


                <div className="social-menu">
                  <ul>
                    <li><a href="#"><i class="fa-brands fa-github"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#" title="Get Educate with Us"><i class="fa-solid fa-graduation-cap"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="column right">
              <div class="text">Message me</div>
              <form action="#">
                <div class="fields">
                  <div class="field name">
                    <input type="text" placeholder="Your Name" required />
                  </div>
                  <div class="field email">
                    <input type="email" placeholder="Your Email" required />
                  </div>
                </div>
                <div class="field">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div class="field textarea">
                  <textarea cols="30" rows="10" placeholder="Message.." required></textarea>
                </div>
                <div class="button-area">
                  <button type="submit">Send message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    

      <footer>
        <span>
          <a href="#"> Joe Greyson</a> | <span class="far fa-copyright"></span> 2022 All Rights Reserved. Privacy Policy
        </span>
      </footer>
      </section>

      
  );
}

export default Contact;

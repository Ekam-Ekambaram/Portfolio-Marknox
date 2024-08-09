import React from 'react';
import "./style.css"
function Home() {
  return (
       <section class="home">
        <div class="content">
            <h2>Hi, I'm <span>Joe Greyson</span></h2>
            <h4>Frontend Developer</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A esse totam provident voluptas similique.
                Impedit incidunt atque recusandae rem quam.</p>
            <div class="btn-group">
                <a href="#">Hire Me</a>
                <a href="#">See Projects</a>
            </div>
            <div class="social-icons">
                <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                <a href="#"><i class="fa-brands fa-twitter"></i></a>
            </div>
        </div>
    </section>
  );
}

export default Home;

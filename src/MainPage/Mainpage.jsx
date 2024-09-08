import React from "react";
import "./Mainpage.css";

const Mainpage = () => {
  return (
    <>
      <section class="home" id="home">
        <div class="home-img">
          <img src="./assets/images/hero.png" />
        </div>
        <div class="home-content">
          <h1>
            Hi, It's<span>Maaz</span>
          </h1>
          <h3 class="text-animation">
            I'm a <span></span>
          </h3>
          <p>
            I am a front-end developer skilled in creating user-friendly and
            visually appealing web interfaces. I specializes in HTML, CSS,
            JavaScript, React frameworks and CSS frameworks like Tailwind And
            Bootstrap.
          </p>

          <div class="social-icons">
            <a href="#">
              <i class="bx bxl-linkedin"></i>
            </a>
            <a href="#">
              <i class="bx bxl-github"></i>
            </a>
            <a href="#">
              <i class="bx bxl-instagram-alt"></i>
            </a>
            <a href="#">
              <i class="bx bxl-twitter"></i>
            </a>
          </div>

          <div class="btn-group">
            <a href="#" class="btn">
              Hire
            </a>
            <a href="#" class="btn">
              Contact
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mainpage;

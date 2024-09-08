import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div>
      <header class="header">
        <a href="#home" class="logo">
          Maaz
          <span>Tarkalanii</span>
        </a>
        <i class="bx bx-menu" id="menu-icon"></i>
        <nav class="navbar">
          <a href="#home" class="active">
            Home
          </a>
          <a href="#education">Education</a>
          <a href="#services">Services</a>
          <a href="#testimonilas">Testimonials</a>
          <a href="#contact">Contacts</a>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

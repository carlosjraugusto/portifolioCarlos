import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-content">
        <nav className="log">
          <img className="logo" src="/assts/imagem/cj 2.0.png" alt="" />
        </nav>
        <ul>
          <li>
            <a className="menu-item" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="menu-item" href="#skills">
              Habilidades
            </a>
          </li>
          <li>
            <a className="menu-item" href="#bio">
              Bio
            </a>
          </li>
          <li>
            <a className="menu-item" href="#contact">
              Meu Contato
            </a>
          </li>
          <button className="contact-btn">Fale comigo</button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

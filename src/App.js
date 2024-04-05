import React from "react";
import "./App.css";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero/Hero";
import Habi from "./componentes/skills/Habi";
import Bio from "./componentes/BIO/Bio";
import ContactMe from "./componentes/Contato/ContactMe";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <Habi />
        </section>
        <section id="bio">
          <Bio />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
      </div>
    </>
  );
};

export default App;

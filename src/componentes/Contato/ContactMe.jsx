import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";

const ContactMe = () => {
  return (
    <section className="contact-container">
      <h5>Entre em Contato</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="./assts/imagem/Icônes_gratuites_Gmail_conçues_par_Freepik-removebg-preview.png"
            text="carlosjraugusto3@gmail.com"
          />
          <ContactInfoCard
            iconUrl="./assts/imagem/Computer_Icons_GitHub_Icon_Design_Logo_PNG_-_Free_Download-removebg-preview.png"
            text="https://github.com/carlosjraugusto"
          />
          <ContactInfoCard
            iconUrl="./assts/imagem/Instagram_Logo-removebg-preview (1).png"
            text="https://www.instagram.com/carlosjuniorcj0/"
          />
          <ContactInfoCard
            iconUrl="./assts/imagem/Baixar_logotipo_do_whatsapp_png__ícone_do_whatsapp_png__whatsapp_transparente-removebg-preview.png"
            text="+55 (96)98426-8597"
          />
          <ContactInfoCard
            iconUrl="./assts/imagem/Download_Linkedin_logo_png__Linkedin_icon_transparent_png-removebg-preview.png"
            text="https://www.linkedin.com/in/carlos-jr-augusto-569aa92a0/"
          />
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
    </section>
  );
};

export default ContactMe;

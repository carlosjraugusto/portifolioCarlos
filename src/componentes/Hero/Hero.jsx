import React from "react"
import './Hero.css'

const Hero = () => {
    return (    
        <section className="hero-container">
            <div className="hero-content">
                <h2>construindo experiências digitais que inspiram</h2>
                <p>
                "Desenvolvedor Frontend apaixonado | Transformando ideias em soluções web fluidas e visualmente impressionantes."
                </p>
            </div>

            <div className="hero-img">
                <div>
                    <div className="tech-icon">
                        <img src="./assts/imagem/Developer_Stickers_for_Sale-removebg-preview.png" alt="" />
                    </div>
                        <img className="hero" src="./assts/imagem/WhatsApp Image 2024-04-01 at 17.13.01.jpeg" alt="" />
                </div>
                <div  className="">
                    <div className="tech-icon">
                        <img src="./assts/imagem/HTML5_without_wordmark_color_Logo_PNG_Vector__SVG__Free_Download-removebg-preview (1).png" alt="" />
                    </div>
                    <div  className="tech-icon">
                        <img src="./assts/imagem/Javascript_programming_language_icon-removebg-preview.png" alt="" />
                    </div>
                    <div  className="tech-icon">
                        <img src="./assts/imagem/CSS3_-_MI_PORTAL-removebg-preview.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero 
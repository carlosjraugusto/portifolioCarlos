import React from "react"
import"./Bio.css"
import { BIO } from "../utils/Data"
import BioCard from "./biocard/BioCard";

const Histori = () => {
    return (
        <section className="bio-container">
            <h5>bio</h5>

            <div className="bio-content">
                {BIO.map((item) => (
                    <BioCard key={item.title} details={item} />
                ))}
            </div>
        </section>
    )
}

export default Histori
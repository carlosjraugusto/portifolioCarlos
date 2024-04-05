import React from "react"
import "./BioCard.css"

const BioCard = ({ details }) => {
    return(
       <div className="bio-card">
        <h6>{details.title}</h6>

        <div className="bio-duration"> {details.date} </div>

        <ul>
            {details.histori.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
       </div>
    )
}

export default BioCard
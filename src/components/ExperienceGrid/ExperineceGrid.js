import React from "react";
import ExperienceGridElement from "../ExperienceGridElement/ExperienceGridElement";
import './ExperienceGrid.css'

export default function ExperienceGrid({areas}){
    return(
        <div className="experience-grid">
            { areas.map((area, index) => <ExperienceGridElement key={index} src={area.src} h2={area.title}/>) }
        </div>
    );
}

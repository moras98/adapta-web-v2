import React from "react";
import ExperienceGridElement from "../ExperienceGridElement/ExperienceGridElement";
import './ExperienceGrid.css'

export default function ExperienceGrid({lenguage}){
    return(
        <div className="experience-grid">
            <ExperienceGridElement src={lenguage.area1.src} h2={lenguage.area1.title}/>
            <ExperienceGridElement src={lenguage.area2.src} h2={lenguage.area2.title}/>
            <ExperienceGridElement src={lenguage.area3.src} h2={lenguage.area3.title}/>
            <ExperienceGridElement src={lenguage.area4.src} h2={lenguage.area4.title}/>
            <ExperienceGridElement src={lenguage.area5.src} h2={lenguage.area5.title}/>
            <ExperienceGridElement src={lenguage.area6.src} h2={lenguage.area6.title}/>
        </div>
    );
}

import React from "react";
import Overlay from "../Overlay/Overlay";
import ProjectGrid from "../ProjectGrid/ProjectGrid";
import './ExperienceInfo.css';

export default function ExperienceInfo({area}){
	console.log(area);
	return(
		<div className="experience-info-container">
			<div className="experience-info-img">
				<img src={area.src} alt={area.title}/>
				<Overlay h1={area.title} h2=""/>
			</div>
			<ProjectGrid projects={area.projects}/>
		</div>
	);
}

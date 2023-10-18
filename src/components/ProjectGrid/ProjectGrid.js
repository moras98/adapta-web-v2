import React from "react";
import ProjectGridElement from "../ProjectGridElement/ProjectGridElemen";
import './ProjectGrid.css';

export default function ProjectGrid({projects}){
	return(
		<div className="project-grid">
			{projects.map((project, index)=><ProjectGridElement key={index} project={project}/>)}
		</div>
	);
}

import React from "react";
import './ProjectGridElement.css';

export default function ProjectGridElement({project}){
	return(
		<div className="project-grid-element">
			<div className="project-texts">
				<h2 className="project-title">{project.title}</h2>
				<p>{project.description}</p>
			</div>
			<div className="project-client">
				<img src={project.client.src} alt={project.client.name}/>
			</div>
		</div>
	);
}

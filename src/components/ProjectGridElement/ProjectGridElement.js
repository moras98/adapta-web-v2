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
				{project.client.map((obj, index)=>{
					return(<img key={index} src={obj.src} alt={obj.name}/>)
				})}
			</div>
		</div>
	);
}

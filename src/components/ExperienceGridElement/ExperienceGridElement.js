import React from "react";
import './ExperienceGridElement.css'

export default function ExperienceGridElement({src, h2}){
	return(
		<div className="exp-grid-element">
			<img src={src} alt={h2+" picture"}/>
			<h2>{h2}</h2>
		</div>
	);
}

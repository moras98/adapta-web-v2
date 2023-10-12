import React from "react";
import './ServiceGridElement.css';

export default function ServiceGridElement({src, title, text}){
	return(
		<div className="service-grid-element">
			<div className="icon">
				<img src={src} alt={title + 'icon'}/>
			</div>
			<div className="service-description">
				<h2>{title}</h2>
				<p>{text}</p>
			</div>
		</div>
	);
}

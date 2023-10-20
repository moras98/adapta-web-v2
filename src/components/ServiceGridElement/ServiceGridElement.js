import React from "react";
import './ServiceGridElement.css';

export default function ServiceGridElement({src, title, text}){
	return(
		<div className="service-grid-element">
			<div className="icon">
				<img src={src} alt={title + 'icon'}/>
			</div>
			<div className="service-description">
				<p><b>{title}</b></p>
				<p>{text}</p>
			</div>
		</div>
	);
}

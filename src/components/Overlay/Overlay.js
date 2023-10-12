import React from "react";
import './Overlay.css'

export default function Overlay({h1, h2}){
	return(
		<div className="overlay">
			<h2>{h2}</h2>
			<h1>{h1}</h1>
		</div>
	);
}

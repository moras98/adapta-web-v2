import React from "react";
import Overlay from "../Overlay/Overlay";
import './ImageFrame.css'

export default function ImageFrame({src, h1, h2}){
	return(
		<div className="img-container">
			<img src={src} alt={h1}/>
			<Overlay h1={h1} h2={h2}/>
		</div>
	);
}


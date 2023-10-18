import React from "react";
import './Team.css';
import ImageFrame from "../../components/ImageFrame/ImageFrame";

export default function Team({lenguage}){
	return(
		<div className="body">
			<ImageFrame src="/assets/images/banner3.jpg" h1="Nuestro equipo" h2=""/>
			<div className="content">
				<div className="phrase-section">
					<h2>Frase</h2>
				</div>
			</div>
		</div>
	);
}

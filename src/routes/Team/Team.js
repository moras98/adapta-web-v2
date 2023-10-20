import React from "react";
import './Team.css';
import ImageFrame from "../../components/ImageFrame/ImageFrame";

export default function Team({language}){
	return(
		<div className="body">
			<ImageFrame src={language.src} h1={language.h1} h2={language.h2}/>
			<div className="content">
				<div className="phrase-section">
					<h2>{language.phrase}</h2>
				</div>
				<div className="team-section">
					<h2>Texto equipo</h2>
				</div>
			</div>
		</div>
	);
}

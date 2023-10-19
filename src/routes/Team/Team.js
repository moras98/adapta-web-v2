import React from "react";
import './Team.css';
import ImageFrame from "../../components/ImageFrame/ImageFrame";

export default function Team({lenguage}){
	return(
		<div className="body">
			<ImageFrame src={lenguage.src} h1={lenguage.h1} h2={lenguage.h2}/>
			<div className="content">
				<div className="phrase-section">
					<h2>{lenguage.phrase}</h2>
				</div>
			</div>
		</div>
	);
}

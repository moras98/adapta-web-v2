import React from "react";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import './About.css';

export default function About({lenguage}){
	return(
		<div className="body">
			<ImageFrame src={lenguage.src} h1={lenguage.h1} h2={lenguage.h2}/>
			<div className="content">
				<div className="phrase-section">
					<h2>{lenguage.phrase}</h2>
				</div>
				<div className="about-section">
					<div className="about-img">
						<img src={lenguage.src} alt={lenguage.h1}/>
					</div>
					<div className="about-text">
						<p>{lenguage.text}</p>
					</div>
				</div>
				{/* <div className="about-section">
					<p>{lenguage.text}</p>
				</div> */}
			</div>
		</div>
	);
}

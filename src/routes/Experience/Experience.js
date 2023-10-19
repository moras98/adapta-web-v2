import React from "react";
import ExperienceInfo from "../../components/ExperienceInfo/ExperienceInfo";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import './Experience.css';

export default function Experience({lenguage}){
	return(
		<div className="body">
			<ImageFrame src="/assets/images/banner.jpg" h1="Experiencia" h2=""/>
			<div className="content">
				<div className="phrase-section">
					<h2>{lenguage.phrase}</h2>
				</div>
				<div className="experience-info-section">
					{lenguage.areas.map((area, index)=>{return <ExperienceInfo key={index} area={area}/>})}
				</div>
			</div>
		</div>
	);
}

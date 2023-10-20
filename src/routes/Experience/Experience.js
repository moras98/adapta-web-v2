import React from "react";
import ExperienceInfo from "../../components/ExperienceInfo/ExperienceInfo";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import './Experience.css';

export default function Experience({language}){
	return(
		<div className="body">
			<ImageFrame src="/assets/images/banner.jpg" h1={language.h1} h2=""/>
			<div className="content">
				<div className="phrase-section">
					<h2>{language.phrase}</h2>
				</div>
				<div className="experience-info-section">
					{language.areas.map((area, index)=>{return <ExperienceInfo key={index} area={area}/>})}
				</div>
			</div>
		</div>
	);
}

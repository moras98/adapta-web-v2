import React from "react";
import ExperienceInfo from "../../components/ExperienceInfo/ExperienceInfo";
import ImageFrame from "../../components/ImageFrame/ImageFrame";

export default function Experience({lenguage}){
	return(
		<div className="body">
			<ImageFrame src="/assets/images/banner.jpg" h1="Experiencia" h2=""/>
			<div className="content">
				{lenguage.areas.map((area, index)=>{return <ExperienceInfo key={index} area={area}/>})}
			</div>
		</div>
	);
}

import React from "react";
import './ServiceGrid.css';
import ServiceGridElement from "../ServiceGridElement/ServiceGridElement";

export default function ServiceGrid({services}){
	return(
		<div className="service-grid">
			{services.map((service, index)=> <ServiceGridElement key={index} src={service.icon} title={service.title} text={service.text}/>)}
		</div>
	);
}

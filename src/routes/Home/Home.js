import React from "react";
import './Home.css';
import VideoFrame from "../../components/VideoFrame/VideoFrame";
import { NavLink } from "react-router-dom";
import ExperienceGrid from "../../components/ExperienceGrid/ExperineceGrid";
import ServiceGrid from "../../components/ServiceGrid/ServiceGrid";

export default function Home({lenguaje}){
	return(
		<div className="body">
			<VideoFrame src={'/assets/video2.mp4'} h1={lenguaje.main_title} h2={lenguaje.sub_title}/>
			<div className="content">
				<div className="phrase-section">
					<h2>Frase</h2>
					<NavLink to={lenguaje.phrase_href}>Saber más</NavLink>
				</div>
				<div className="experience-section">
					<h2>Nuestra Experiencia</h2>
					<ExperienceGrid areas={lenguaje.areas}/>
				</div>
				<div className="services-section">
					<h2>Nuestros Servicios</h2>
					<ServiceGrid services={lenguaje.services}/>
				</div>
				<div className="clients-section">
					{/* agregar grid clients sections */}
					<h2>Nuestros Clientes</h2>
				</div>
			</div>
		</div>
	);
}

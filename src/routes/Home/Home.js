import React from "react";
import './Home.css';
import VideoFrame from "../../components/VideoFrame/VideoFrame";
import { NavLink } from "react-router-dom";
import ExperienceGrid from "../../components/ExperienceGrid/ExperineceGrid";
import ServiceGrid from "../../components/ServiceGrid/ServiceGrid";
// import ClientsGrid from "../../components/ClientsGrid/ClientsGrid";
import ClientsCarousel from "../../components/ClientsCarousel/ClientsCarousel";

export default function Home({language}){
	return(
		<div className="body">
			<VideoFrame src={'/assets/video2.mp4'} h1={language.main_title} h2={language.sub_title}/>
			<div className="content">
				<div className="phrase-section">
					<h2>{language.phrase}</h2>
					<NavLink to={language.phrase_href}>Saber más</NavLink>
				</div>
				<div className="experience-section">
					<h2>Nuestra Experiencia</h2>
					<ExperienceGrid areas={language.areas}/>
				</div>
				<div className="services-section">
					<h2>Nuestros Servicios</h2>
					<ServiceGrid services={language.services}/>
				</div>
				<div className="clients-section">
					{/* agregar grid clients sections */}
					<h2>Nuestros Clientes</h2>
					{/* <ClientsGrid/> */}
					<ClientsCarousel/>
				</div>
			</div>
		</div>
	);
}

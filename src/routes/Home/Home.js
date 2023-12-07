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
					<NavLink to={language.phrase_href}>{language.phrase_href_txt}</NavLink>
				</div>
				<div className="experience-section">
					<h2>{language.exp_title}</h2>
					<ExperienceGrid areas={language.categories}/>
				</div>
				<div id="services" className="services-section">
					<h2>{language.srv_title}</h2>
					<ServiceGrid services={language.services}/>
				</div>
				<div className="clients-section">
					{/* agregar grid clients sections */}
					<h2>{language.clt_title}</h2>
					{/* <ClientsGrid/> */}
					<ClientsCarousel/>
				</div>
			</div>
		</div>
	);
}

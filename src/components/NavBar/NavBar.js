import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import './NavBar.css'

function NavBar({lenguage}){
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
	setMenuOpen(!menuOpen);
	}

	const closeMenu = () => {
	setMenuOpen(false);
	}

	return(
		<div className="navbar">
			<div className="navbar-elements">
				<div className="nav-logo">
					<NavLink to={lenguage === 'es' ? '/' : '/en'}>
						<img src="/assets/images/logo-adapta.png" alt="adapta-logo"/>
					</NavLink>
				</div>
				<div className="nav-ul-container">
					{lenguage === 'es' ? <EsNavbar /> : <EnNavbar />}
				</div>
			</div>
		</div>
	);
};


function EnNavbar(){
	const location = useLocation();
	return(
		<ul className="nav-ul">
			<li>
				<NavLink 
				to="/en"
				className={location.pathname === '/en' ? "active-link" : ""}
				>
				Home
				</NavLink>
			</li>
			<li>
				<NavLink 
				className={location.pathname === '/en/experience' ? "active-link" : ""}
				to="/en/experience"
			>
				Experience
				</NavLink>
			</li>
			<li>
				<NavLink 
				className={location.pathname === '/en/about-us' ? "active-link" : ""}
				to="/en/about-us"
			>
				About us
				</NavLink>
			</li>
			<li>
				<NavLink 
				className={location.pathname === '/en/team' ? "active-link" : ""}
				to="/en/team"
			>
				Team
				</NavLink>
			</li>
			<li>
				<NavLink 
				className={location.pathname === '/en/contact' ? "active-link" : ""}
				to="/en/contact"
			>
				Contact
				</NavLink>
			</li>
		</ul>
	);
}
function EsNavbar(){
	const location = useLocation();
	return(
		<ul className="nav-ul">
			<li>
				<NavLink 
				to="/"
				className={location.pathname === '/' ? "active-link" : ""}
				>
				Inicio
				</NavLink>
			</li>
			<li>
				<NavLink 
				to="experiencia"
				className={location.pathname === '/experiencia' ? "active-link" : ""}
				>
				Experiencia
				</NavLink>
			</li>
			<li>
				<NavLink 
				to="sobre-nosotros"
				className={location.pathname === '/sobre-nosotros' ? "active-link" : ""}
				>
				Sobre nosotros
				</NavLink>
			</li>
			<li>
				<NavLink 
				to="equipo"
				className={location.pathname === '/equipo' ? "active-link" : ""}
				>
				Equipo
				</NavLink>
			</li>
			<li>
				<NavLink 
				to="contacto"
				className={location.pathname === '/contacto' ? "active-link" : ""}
				>
				Contacto
				</NavLink>
			</li>
		</ul>
	);
}

export default NavBar;

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
// import { useState } from "react";
import "./NavBar.css";
import LanguageSelector from "../LanguageSelector/LanguageSelector";

function NavBar({ language }) {
  return (
    <div className="navbar">
      <div className="navbar-elements">
        <div className="nav-logo">
          <NavLink to={language === "es" ? "/" : "/en"}>
            <img src="/assets/images/logo-adapta.png" alt="adapta-logo" />
          </NavLink>
        </div>
        <div className="nav-ul-container">
          {language === "es" ? <EsNavbar /> : <EnNavbar />}
        </div>
      </div>
    </div>
  );
}

function EnNavbar() {
  const location = useLocation();
  return (
    <ul className="nav-ul">
      <li>
        <NavLink
          to="/en"
          className={location.pathname === "/en" ? "active-link" : ""}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={location.pathname === "/en/about-us" ? "active-link" : ""}
          to="/en/about-us"
        >
          About us
        </NavLink>
      </li>
      <li>
        <HashLink to="/en#services">Services</HashLink>
      </li>
      <li>
        <NavLink
          className={
            location.pathname.includes("/en/experience") ? "active-link" : ""
          }
          to="/en/experience"
        >
          Experience
        </NavLink>
      </li>
      {/* <li>
				<NavLink 
				className={location.pathname === '/en/team' ? "active-link" : ""}
				to="/en/team"
			>
				Team
				</NavLink>
			</li> */}
      <li>
        <NavLink
          className={location.pathname === "/en/contact" ? "active-link" : ""}
          to="/en/contact"
        >
          Contact
        </NavLink>
      </li>
      <li>
        <LanguageSelector language={"en"} />
      </li>
    </ul>
  );
}
function EsNavbar() {
  const location = useLocation();
  return (
    <ul className="nav-ul">
      <li>
        <NavLink
          to="/"
          className={location.pathname === "/" ? "active-link" : ""}
        >
          Inicio
        </NavLink>
      </li>
      <li>
        <NavLink
          to="sobre-nosotros"
          className={
            location.pathname === "/sobre-nosotros" ? "active-link" : ""
          }
        >
          Sobre nosotros
        </NavLink>
      </li>

      <li>
        <NavLink
          to="experiencia"
          className={
            location.pathname.includes("/experiencia") ? "active-link" : ""
          }
        >
          Experiencia
        </NavLink>
      </li>
      <li>
        <HashLink to="/#services">Servicios</HashLink>
      </li>
      {/* <li>
				<NavLink 
				to="equipo"
				className={location.pathname === '/equipo' ? "active-link" : ""}
				>
				Equipo
				</NavLink>
			</li> */}
      <li>
        <NavLink
          to="contacto"
          className={location.pathname === "/contacto" ? "active-link" : ""}
        >
          Contacto
        </NavLink>
      </li>
      <li>
        <LanguageSelector language={"es"} />
      </li>
    </ul>
  );
}

export default NavBar;

import React from "react";
import "./MobileNavBar.css";
import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import { HashLink } from "react-router-hash-link";

export default function MobileNavBar({ language }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar-elements">
        <div className="mobile-navbar-logo">
          <NavLink to={language === "es" ? "/" : "/en"}>
            <img src="/assets/images/logo-adapta.png" alt="adapta-logo" />
          </NavLink>
        </div>
        <div className="mobile-navbar-button" onClick={toggleMenu}>
          ☰
        </div>
      </div>
      <div className={menuOpen ? "mobile-menu-open" : "mobile-menu-closed"}>
        {language === "es" ? (
          <MobileEsNav closeMenu={closeMenu} />
        ) : (
          <MobileEnNav closeMenu={closeMenu} />
        )}
      </div>
    </div>
  );
}

function MobileEsNav({ closeMenu }) {
  const location = useLocation();
  return (
    <ul className="mobile-nav-ul">
      <li>
        <NavLink
          to="/"
          className={location.pathname === "/" ? "active-link" : ""}
          onClick={closeMenu}
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
          onClick={closeMenu}
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
          onClick={closeMenu}
        >
          Experiencia
        </NavLink>
      </li>
      <li>
        <HashLink
          to="/#services"
          className={
            location.pathname.includes("/#services") ? "active-link" : ""
          }
          onClick={closeMenu}
        >
          Servicios
        </HashLink>
      </li>

      {/* <li>
				<NavLink 
				to="equipo"
				className={location.pathname === '/equipo' ? "active-link" : ""}
				onClick={closeMenu}
				>
				Equipo
				</NavLink>
			</li> */}
      <li>
        <NavLink
          to="contacto"
          className={location.pathname === "/contacto" ? "active-link" : ""}
          onClick={closeMenu}
        >
          Contacto
        </NavLink>
      </li>
      <li>
        <LanguageSelector language={"es"} onClick={closeMenu} />
      </li>
    </ul>
  );
}

function MobileEnNav({ closeMenu }) {
  const location = useLocation();
  return (
    <ul className="mobile-nav-ul">
      <li>
        <NavLink
          to="/en"
          className={location.pathname === "/en" ? "active-link" : ""}
          onClick={closeMenu}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={location.pathname === "/en/about-us" ? "active-link" : ""}
          to="/en/about-us"
          onClick={closeMenu}
        >
          About us
        </NavLink>
      </li>
      <li>
        <NavLink
          className={
            location.pathname.includes("/en/experience") ? "active-link" : ""
          }
          to="/en/experience"
          onClick={closeMenu}
        >
          Experience
        </NavLink>
      </li>
      <li>
        <HashLink
          to="/en#services"
          className={
            location.pathname.includes("/en#services") ? "active-link" : ""
          }
          onClick={closeMenu}
        >
          Servicios
        </HashLink>
      </li>
      {/* <li>
				<NavLink 
				className={location.pathname === '/en/team' ? "active-link" : ""}
				to="/en/team"
				onClick={closeMenu}
				>
				Team
				</NavLink>
			</li> */}
      <li>
        <NavLink
          className={location.pathname === "/en/contact" ? "active-link" : ""}
          to="/en/contact"
          onClick={closeMenu}
        >
          Contact
        </NavLink>
      </li>
      <li>
        <LanguageSelector language={"en"} onClick={closeMenu} />
      </li>
    </ul>
  );
}


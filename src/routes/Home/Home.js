import React, { useEffect, useState } from "react";
import "./Home.css";
import VideoFrame from "../../components/VideoFrame/VideoFrame";
// import { NavLink } from "react-router-dom";
import ExperienceGrid from "../../components/ExperienceGrid/ExperineceGrid";
import ServiceGrid from "../../components/ServiceGrid/ServiceGrid";
// import ClientsGrid from "../../components/ClientsGrid/ClientsGrid";
import ClientsCarousel from "../../components/ClientsCarousel/ClientsCarousel";
import { Link } from "react-router-dom";
import ServiceOption2 from "../../components/ServiceOption2/ServiceOption2";

export default function Home({ language }) {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Verificar si el dispositivo es móvil
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Se considera móvil si el ancho de la pantalla es menor que 768px
    };

    window.addEventListener("resize", handleResize); // Escuchar cambios en el tamaño de la ventana

    handleResize(); // Llamar a la función inicialmente para establecer el estado en función del tamaño de la pantalla actual

    return () => {
      window.removeEventListener("resize", handleResize); // Limpiar el evento de cambio de tamaño al desmontar el componente
    };
  }, []);

  return (
    <div className="body">
      <VideoFrame
        src={"/assets/video2.mp4"}
        h1={language.main_title}
        h2={language.sub_title}
      />
      <div className="content">
        <div className="phrase-section">
          <h2>{language.phrase}</h2>
          <Link className="button" to={language.phrase_href}>
            <b>{language.phrase_href_txt.toUpperCase()}</b>
          </Link>
        </div>
        <div id="services" className="services-section">
          {isMobile ? <h2>{language.srv_title}</h2> : <></>}
          {!isMobile ? (
            <ServiceOption2 services={language.services} srv_title={language.srv_title} />
          ) : (
            <ServiceGrid services={language.services} />
          )}
          {/* <h2>{language.srv_title}</h2> */}
          {/* <ServiceGrid services={language.services} /> */}
        </div>
        <div className="experience-section">
          <h2>{language.exp_title}</h2>
          <ExperienceGrid areas={language.categories} />
        </div>
        <div className="clients-section">
          {/* agregar grid clients sections */}
          <h2>{language.clt_title}</h2>
          {/* <ClientsGrid/> */}
          <ClientsCarousel />
        </div>
      </div>
    </div>
  );
}

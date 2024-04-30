import React from "react";
import "./Team.css";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Team({ language }) {
  const location = useLocation();

  const coordinators = [
    {
      src: "",
      name: "Sandra Castro",
      email: "s.castroscarone@gmail.com",
      rol: location.pathname.includes("/en") ? "Coordinator" : "Coordinadora",
      linkedin: "https://music.youtube.com/",
    },
    {
      src: "",
      name: "Alessandra Tiribocci",
      rol: location.pathname.includes("/en") ? "Coordinator" : "Coordinadora",
      email: "",
      linkedin: "",
    },
  ];

  return (
    <div className="body">
      <ImageFrame src={language.src} h1={language.h1} h2={language.h2} />
      <div className="content">
        <div className="phrase-section">
          <h2>{language.phrase}</h2>
        </div>
        <div className="team-section">
          <h2>{language.text}</h2>
          <div
            className="team-grid"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "50px",
              width: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                width: "100%",
              }}
            >
              {coordinators.map((obj, index) => (
                <EmployeeCard obj={obj} key={index} />
              ))}
            </div>
            <h2>Áreas</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
                flexWrap: "wrap",
                width: "100%",
              }}
            >
              <div>
                <h3>Área</h3>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
              </div>
              <div>
                <h3>Área</h3>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
              </div>
              <div>
                <h3>Área</h3>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
              </div>
              <div>
                <h3>Área</h3>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
                <p>Nombre Apellido</p>
              </div>
            </div>
            <h2>Colaboraciones</h2>
          </div>
        </div>
        <div className="phrase-section">
          {/* <h2>{language.phrase}</h2> */}
          {location.pathname.includes("/en") ? (
            <Link className="button" to={"/en/about-us"}>
              <b>GO BACK</b>
            </Link>
          ) : (
            <Link className="button" to={"/sobre-nosotros"}>
              <b>VOLVER</b>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

function EmployeeCard({ obj }) {
  return (
    <div className="employee-card">
      <img src={obj?.src} alt={obj?.name + "imagen"} style={{ flex: 1 }} />
      <div
        style={{
          backgroundColor: "green",
          padding: "5px",
          color: "white",
        }}
      >
        <h3>{obj.name}</h3>
        <h4>{obj.rol}</h4>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            marginTop: "10px",
          }}
        >
          <img
            style={{
              width: "50px",
              height: "50px",
              filter: "brightness(0) invert(1)",
              cursor: "pointer",
            }}
            src="/assets/images/icons/email.svg"
            alt="email icon"
            onClick={() => (window.location.href = "mailto:" + obj.email)}
          />
          <img
            style={{
              width: "50px",
              height: "50px",
              filter: "brightness(0) invert(1)",
              cursor: "pointer",
            }}
            src="/assets/images/icons/linkedin.svg"
            alt="email icon"
            onClick={() => window.open(obj.linkedin, "_blank")}
          />
        </div>
      </div>
    </div>
  );
}

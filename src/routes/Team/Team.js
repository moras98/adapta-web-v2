import React from "react";
import "./Team.css";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Team({ language }) {
  const location = useLocation();

  const coordinators = [
    {
      src: "/assets/images/sandra.jpg",
      name: "Sandra Castro",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis nisl quis eros fringilla lacinia. Sed porttitor finibus ligula, ut sodales justo elementum sed. Nam vestibulum vel eros sit amet consequat. Maecenas in dui eget erat accumsan lobortis lobortis eget odio. Aliquam ante velit, consectetur at orci eget, hendrerit fermentum sem. Pellentesque et sapien in diam accumsan vestibulum. Nam ante enim, eleifend at mollis fermentum, varius a elit. Nunc eu justo finibus, sollicitudin est tincidunt, accumsan nisi. Nullam posuere ornare nisl, vitae fermentum justo ornare at. Integer nec libero a magna laoreet viverra. Donec finibus blandit libero at bibendum. Integer ut elementum orci. Donec efficitur augue quis laoreet vehicula. Nunc sit amet ullamcorper velit. Cras non orci odio.

Donec a laoreet est. Mauris sapien turpis, ultrices eu justo lacinia, gravida tincidunt erat. Donec ullamcorper aliquet commodo. Sed tincidunt dolor ut mi porta, vitae pharetra eros varius. Proin vitae bibendum eros. Sed mauris ante, feugiat nec massa vel, ornare finibus augue. Cras ex lectus, ultrices malesuada dignissim nec, luctus eu lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.`,
      email: "scastro@adapta.uy",
      rol: location.pathname.includes("/en") ? "Coordinator" : "Coordinadora",
      linkedin: "https://music.youtube.com/",
    },
    {
      src: "/assets/images/alessandra.jpg",
      name: "Alessandra Tiribocci",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis nisl quis eros fringilla lacinia. Sed porttitor finibus ligula, ut sodales justo elementum sed. Nam vestibulum vel eros sit amet consequat. Maecenas in dui eget erat accumsan lobortis lobortis eget odio. Aliquam ante velit, consectetur at orci eget, hendrerit fermentum sem. Pellentesque et sapien in diam accumsan vestibulum. Nam ante enim, eleifend at mollis fermentum, varius a elit. Nunc eu justo finibus, sollicitudin est tincidunt, accumsan nisi. Nullam posuere ornare nisl, vitae fermentum justo ornare at. Integer nec libero a magna laoreet viverra. Donec finibus blandit libero at bibendum. Integer ut elementum orci. Donec efficitur augue quis laoreet vehicula. Nunc sit amet ullamcorper velit. Cras non orci odio.

Donec a laoreet est. Mauris sapien turpis, ultrices eu justo lacinia, gravida tincidunt erat. Donec ullamcorper aliquet commodo. Sed tincidunt dolor ut mi porta, vitae pharetra eros varius. Proin vitae bibendum eros. Sed mauris ante, feugiat nec massa vel, ornare finibus augue. Cras ex lectus, ultrices malesuada dignissim nec, luctus eu lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.`,

      rol: location.pathname.includes("/en") ? "Coordinator" : "Coordinadora",
      email: "atiribocchi@adapta.uy",
      linkedin: "https://music.youtube.com/",
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
          {/* <h2>{language.text}</h2> */}
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
                flexDirection: "column",
                width: "100%",
              }}
            >
              {coordinators.map((obj, index) => (
                <LeftEmployee obj={obj} key={index} />
              ))}
            </div>
          </div>
        </div>
        {/* <div className="employee-section">
          <h2>No seríamos lo mismo sin ellos</h2>
          <div
            className="employee-grid"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
              flexWrap: "wrap",
              width: "100%",
              marginTop: "50px",
            }}
          >
            <SmallEmployee name={"Nombre Apellido"} rol={"Area X"} />
            <SmallEmployee name={"Nombre Apellido"} rol={"Area X"} />
            <SmallEmployee name={"Nombre Apellido"} rol={"Area X"} />
            <SmallEmployee name={"Nombre Apellido"} rol={"Area X"} />
            <SmallEmployee name={"Nombre Apellido"} rol={"Area X"} />
            <SmallEmployee name={"Nombre Apellido"} rol={"Area X"} />
            <SmallEmployee name={"Nombre Apellido"} rol={"Area X"} />
            <SmallEmployee name={"Nombre Apellido"} rol={"Area X"} />
            <SmallEmployee name={"Nombre Apellido"} rol={"Area X"} />
            <SmallEmployee name={"Nombre Apellido"} rol={"Area X"} />
            <SmallEmployee name={"Nombre Apellido"} rol={"Area X"} />
            <SmallEmployee name={"Nombre Apellido"} rol={"Area X"} />
          </div>
        </div> */}
        <div className="phrase-section">
          <h2>Cada miembro de nuestro equipo está comprometido con la excelencia en el servicio al cliente y aporta una persepectiva única a la tarea.</h2>
        </div>
        <div className="employee-section">
          {/* <h3>En ADAPTA creemos en el poder de la colaboración para crear un futuro mejor para nuestros clientes, el planeta y las personas. Cada miembro de nuestro equipo está comprometido con la excelencia en el servicio al cliente y aporta una persepectiva única a la tarea. Trabajamos en estrecha colaboración con nuestros clientes para comprender sus necesidades y desarrollar soluciones personalizadas que les ayuden a alcanzar sus objetivos de sostenibilidad. Nos integramos a los equipos de nuestros clientes para brindarles el apoyo y la experiencia que necesitan para tener éxito. Estamos comprometidos a trabajar con nuestros clientes, socios y la comunidad global para crear un futuro más sostenible para todos.</h3> */}
          <div className="employee-area">
            <div className="left">
              <h2>Área</h2>
            </div>
            <div className="right">
            <p>Nombre Apellido</p>
            <p>Nombre Apellido</p>
            <p>Nombre Apellido</p>
            </div>
          </div>
          <div className="employee-area">
            <div className="left">
              <h2>Área</h2>
            </div>
            <div className="right">
            <p>Nombre Apellido</p>
            <p>Nombre Apellido</p>
            <p>Nombre Apellido</p>
            </div>
          </div>
          <div className="employee-area">
            <div className="left">
              <h2>Área</h2>
            </div>
            <div className="right">
            <p>Nombre Apellido</p>
            <p>Nombre Apellido</p>
            <p>Nombre Apellido</p>
            </div>
          </div>
        </div>
        {/* <div className="colaboration-section">
          <h2>Profesionales con quienes colaboramos</h2>
        </div> */}
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

function LeftEmployee({ obj }) {
  return (
    <div
      className="left-employee"
    >
      <div
        className="coordinator-img-container"
      >
        <img
          src={obj?.src}
          alt={obj?.name + " imagen"}
          style={{
            height: "100%",
            width: "auto",
            objectFit: "cover",
            filter: "grayscale(1)",
          }}
        />
      </div>
      <div
        style={{
          width: "60%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          paddingLeft: "20px",
          textAlign: "justify",
          gap: "20px",
          height: '100%',
        }}
      >
        <h2>
          <b style={{ fontWeight: 200, color: "gray" }}>{obj.name}, </b>
          <b style={{ fontWeight: 400 }}>{obj.rol}</b>
        </h2>
        <p>{obj?.description}</p>
      </div>
      <div
        // style={{
        //   width: "20%",
        //   display: "flex",
        //   flexDirection: "column",
        //   alignItems: "flex-start",
        //   justifyContent: "center",
        //   gap: "20px",
        //   paddingLeft: "20px",
        // }}
        className="coordinator-links"
      >
        <IconInformation
          icon={"/assets/images/icons/linkedin.svg"}
          text={obj.name}
          url={obj.linkedin}
        />
        <IconInformation
          icon={"/assets/images/icons/email.svg"}
          text={obj.email}
          url={"mailto:" + obj.email}
        />
      </div>
    </div>
  );
}

function IconInformation({ icon, text, url }) {
  const openUrl = () => {
    if (url.startsWith("mailto:")) {
      window.location.href = url;
    } else {
      window.open(url, "_blank");
    }
  };
  return (
    <div className="icon-information-container" onClick={openUrl}>
      <div className="icon-container">
        <img src={icon} alt={text} />
      </div>
      <div className="text-container">
        <p>{text}</p>
      </div>
    </div>
  );
}

// function SmallEmployee({ name, rol }) {
//   return (
//     <div
//       style={{
//         borderRadius: "8px",
//         backgroundColor: "white",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         padding: "10px",
//         width: "fit-content",
//         // border: "1px solid gray",
//         boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
//       }}
//     >
//       <h3>{rol}</h3>
//       <p style={{ color: "gray" }}>{name}</p>
//     </div>
//   );
// }

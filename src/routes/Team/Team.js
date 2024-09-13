import React from "react";
import "./Team.css";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import { useLocation } from "react-router-dom";
import TeamMemberGrid from "../../components/TeamMembers/TeamMemberGrid";

export default function Team({ language }) {
  const location = useLocation();

  const coordinators = [
    {
      src: "/assets/images/sandra.jpg",
      name: "Sandra Castro",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis nisl quis eros fringilla lacinia. Sed porttitor finibus ligula, ut sodales justo elementum sed. Nam vestibulum vel eros sit amet consequat. Maecenas in dui eget erat accumsan lobortis lobortis eget odio. Aliquam ante velit, consectetur at orci eget, hendrerit fermentum sem. Pellentesque et sapien in diam accumsan vestibulum. Nam ante enim, eleifend at mollis fermentum, varius a elit. Nunc eu justo finibus, sollicitudin est tincidunt, accumsan nisi. Nullam posuere ornare nisl, vitae fermentum justo ornare at. Integer nec libero a magna laoreet viverra. Donec finibus blandit libero at bibendum. Integer ut elementum orci. Donec efficitur augue quis laoreet vehicula. Nunc sit amet ullamcorper velit. Cras non orci odio.

Donec a laoreet est. Mauris sapien turpis, ultrices eu justo lacinia, gravida tincidunt erat. Donec ullamcorper aliquet commodo. Sed tincidunt dolor ut mi porta, vitae pharetra eros varius. Proin vitae bibendum eros. Sed mauris ante, feugiat nec massa vel, ornare finibus augue. Cras ex lectus, ultrices malesuada dignissim nec, luctus eu lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.`,
      email: "scastro@adapta.uy",
      rol: location.pathname.includes("/en") ? "Partner-Director" : "Socia-Directora",
      linkedin: "https://music.youtube.com/",
    },
    {
      src: "/assets/images/alessandra.jpg",
      name: "Alessandra Tiribocci",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus iaculis nisl quis eros fringilla lacinia. Sed porttitor finibus ligula, ut sodales justo elementum sed. Nam vestibulum vel eros sit amet consequat. Maecenas in dui eget erat accumsan lobortis lobortis eget odio. Aliquam ante velit, consectetur at orci eget, hendrerit fermentum sem. Pellentesque et sapien in diam accumsan vestibulum. Nam ante enim, eleifend at mollis fermentum, varius a elit. Nunc eu justo finibus, sollicitudin est tincidunt, accumsan nisi. Nullam posuere ornare nisl, vitae fermentum justo ornare at. Integer nec libero a magna laoreet viverra. Donec finibus blandit libero at bibendum. Integer ut elementum orci. Donec efficitur augue quis laoreet vehicula. Nunc sit amet ullamcorper velit. Cras non orci odio.

Donec a laoreet est. Mauris sapien turpis, ultrices eu justo lacinia, gravida tincidunt erat. Donec ullamcorper aliquet commodo. Sed tincidunt dolor ut mi porta, vitae pharetra eros varius. Proin vitae bibendum eros. Sed mauris ante, feugiat nec massa vel, ornare finibus augue. Cras ex lectus, ultrices malesuada dignissim nec, luctus eu lacus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In hac habitasse platea dictumst.`,

      rol: location.pathname.includes("/en") ? "Partner-Director" : "Socia-Directora",
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
        <div className="phrase-section">
          <h2>{language.phrase2}</h2>
        </div>
        <div className="employee-section">
          <TeamMemberGrid/>
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
        className="coordinator-texts"
      >
        <h2>
          <b style={{ fontWeight: 200 }}>{obj.name}, </b>
          <b style={{ fontWeight: 500 }}>{obj.rol}</b>
        </h2>
        <p style={{color: 'gray'}}>{obj?.description}</p>
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

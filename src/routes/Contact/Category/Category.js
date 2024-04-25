import React from "react";
import ImageFrame from "../../../components/ImageFrame/ImageFrame";
import ExperienceInfo from "../../../components/ExperienceInfo/ExperienceInfo";
import "./Category.css";
import { useLocation, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Category({ categories }) {
  const { category } = useParams();
  // const currentPath = window.location.pathname;
  const language = categories[category];
  const location = useLocation();
  // let h1 = '';
  // let src = '/assets/images/banner.jpg';
  //
  // if (language.areas.length > 1) {
  //     h1 = language.title
  //     src = language.src
  // } else {
  //     if (currentPath.includes('/en')){
  //         h1 = 'Experience';
  //     } else {
  //         h1 = 'Experiencia'
  //     }
  // }
  let h1 = language.title;
  let src = language.src;

  return (
    <div className="body">
      <ImageFrame src={src} h1={h1} h2="" />
      <div className="content">
        <div className="categories-info-section">
          {language.areas.map((area, index) => {
            return <ExperienceInfo key={index} area={area} />;
          })}
        </div>
        <div className="phrase-section">
          {/* <h2>{language.phrase}</h2> */}
          {location.pathname.includes("/en/experience") ? (
            <Link className="button" to={"/en/experience"}>
              <b>GO BACK</b>
            </Link>
          ) : (
            <Link className="button" to={"/experiencia"}>
              <b>VOLVER</b>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

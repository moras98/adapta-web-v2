import React from "react";
import Overlay from "../Overlay/Overlay";
import "./CategorieInfo.css";
// import AreasGrid from "../AreasGrid/AreasGrid";
import { useNavigate } from "react-router-dom";

export default function CategorieInfo({ categorie, index }) {
  const navigate = useNavigate();

  const handleCategorieClick = () => {
    // Obtén la categoría o cualquier otra información que necesites para construir la URL
    // const categoryName = categorie.title; // Ajusta según tu estructura de datos

    // Construye la URL según la ruta y el idioma actual
    const url = `${index}`;

    // Realiza la redirección
    navigate(url);
    window.scrollTo(0, 0);
  };
  let h2 = "|";
  // if (categorie.areas.length > 1) {
  for (const area of categorie.areas) {
    h2 += area.title + " | ";
  }
  // }

  return (
    <div className="categorie-info-container" onClick={handleCategorieClick}>
      <div className="categorie-info-img">
        <img src={categorie.src} alt={categorie.title} />
        <Overlay h1={categorie.title} h2={h2} />
      </div>
      {/* {categorie.areas.length >1 ?<AreasGrid areas={categorie.areas}/> : <></>} */}
    </div>
  );
}


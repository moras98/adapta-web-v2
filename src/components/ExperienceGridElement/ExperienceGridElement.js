import React from "react";
import './ExperienceGridElement.css'
import { useNavigate } from "react-router-dom";

export default function ExperienceGridElement({src, h2, index}){
	const navigate = useNavigate();
	const currentPath = window.location.pathname;

    const handleCategorieClick = () => {
        // Obtén la categoría o cualquier otra información que necesites para construir la URL
        // const categoryName = categorie.title; // Ajusta según tu estructura de datos

        // Construye la URL según la ruta y el idioma actual
		let url = '';
		if(currentPath.includes('/en')){
			url = `/en/experience/${index}`
		} else {
			url = `/experiencia/${index}`
		}

        // Realiza la redirección
        navigate(url);
        window.scrollTo(0, 0);
    };

	return(
		<div className="exp-grid-element" onClick={handleCategorieClick}>
			<img src={src} alt={h2+" picture"}/>
			<h2>{h2}</h2>
		</div>
	);
}

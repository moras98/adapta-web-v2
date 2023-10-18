import React from "react";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import './Contact.css';

export default function Contact({lenguage}){
	return(
		<div className="body">
			<ImageFrame src="/assets/images/banner4.jpg" h1="Contacto" h2=""/>
			<div className="content">
				<div className="phrase-section">
					<h2>Frase</h2>
				</div>
			</div>
		</div>
	);
}

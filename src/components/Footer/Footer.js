import React from "react";
import './Footer.css'
import { footer_en, footer_es } from "../../locales/footer";

export default function Footer({language}){
	let content = {};
	if(language === 'es'){
		content = footer_es
	} else {
		content = footer_en
	}

	return(
		<div className="footer">
			<div className="footer-grid">
				<div className="footer-element">
					<h2><b>{content.emailTxt}</b></h2>
					<p>{content.email}</p>
				</div>
				<div className="footer-element">
					<h2><b>{content.telTxt}</b></h2>
					<p>{content.tel}</p>
				</div>
				<div className="footer-element">
					<h2><b>{content.addressTxt}</b></h2>
					<p>{content.address}</p>
				</div>
				<div className="footer-logo">
					<img src="/assets/images/adapta_rgb_200px_Trsp_White.png" alt="adapta-logo"/>
				</div>
			</div>
		</div>
	);
}

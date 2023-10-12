import React from "react";
import Overlay from "../Overlay/Overlay";
import './VideoFrame.css'

export default function VideoFrame({src, h1, h2}){
	return(
		<div className="video-container">
			<video
			autoPlay
			muted
			loop
			playsInline
			type="video/mp4"
			src={src}
			>
				Tu navegador no admite la repoducción de video.
			</video>
			<Overlay h1={h1} h2={h2}/>
		</div>
	);
}

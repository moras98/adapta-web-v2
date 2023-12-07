import React from "react";
import ImageFrame from "../../../components/ImageFrame/ImageFrame";
import './Categories.css';

export default function Categories({language}){
    return(
        <div className="body">
            <ImageFrame src="/assets/images/banner.jpg" h1={language.h1} h2=""/>
            <div className="content">
                <div className="phrase-section">
                    <h2>{language.phrase}</h2>
                </div>
                <div className="categories-info-section"></div>
            </div>
        </div>
    )
}
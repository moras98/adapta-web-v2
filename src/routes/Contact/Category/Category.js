import React from "react";
import ImageFrame from "../../../components/ImageFrame/ImageFrame";
import ExperienceInfo from "../../../components/ExperienceInfo/ExperienceInfo";
import './Category.css';
import { useParams } from "react-router-dom";

export default function Category({categories}){
    const { category } = useParams();
    const language = categories[category];
    let h1 = '';
    if (language.areas.length > 1) {
        h1 = language.title
    } else {
        h1 = 'Experiencia'
    }
    return(
        <div className="body">
            <ImageFrame src="/assets/images/banner.jpg" h1={h1} h2=""/>
            <div className="content">
                <div className="phrase-section">
                    <h2>{language.phrase}</h2>
                </div>
                <div className="categories-info-section">
                    {language.areas.map((area, index)=>{return <ExperienceInfo key={index} area={area}/>})}
                </div>
            </div>
        </div>
    )
}
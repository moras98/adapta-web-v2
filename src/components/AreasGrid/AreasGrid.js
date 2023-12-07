import React from "react";
import './AreasGrid.css';

export default function AreasGrid({areas}){
    return(
        <div className="areas-grid">
            {areas.map((area, index)=>
                <div key={index} className="area-grid-element">
                    <div className="areas-titles">
                        <h2 className="area-title">{area.title}</h2>
                    </div>
                </div>
            )}
        </div>
    );
}
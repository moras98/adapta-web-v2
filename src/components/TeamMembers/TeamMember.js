import React from "react";
import './TeamMember.css';

export default function TeamMember({ member }) {
    return (
        <div className="member-card">
            <img src={member.image} alt={member.name} className="member-image"/>
            <div className="information">
                <p className="name">{member.name}</p>
                <p className="area">{member.area}</p>
            </div>
        </div>
    );
}

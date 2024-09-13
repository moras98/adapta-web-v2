import React from "react";
import './TeamMember.css';
import TeamMember from "./TeamMember";

export default function TeamMemberGrid(){
    const members = [
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 1'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 1'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 1'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 1'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 1'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 1'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 1'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 1'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 1'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 1'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 1'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 1'},
    ];

    return(
        <div className="team-member-grid">
            {members.map((member, i) => <TeamMember key={i} member={member}/>)}
        </div>
    );
}
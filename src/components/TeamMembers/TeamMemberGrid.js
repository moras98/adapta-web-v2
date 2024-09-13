import React from "react";
import './TeamMember.css';
import TeamMember from "./TeamMember";

export default function TeamMemberGrid(){
    const members = [
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 1'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 2'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 3'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 4'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 5'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 6'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 7'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 8'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 9'},
        {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 10'},
        // {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 11'},
        // {image: "/assets/images/silueta.png", name: 'Nombre Apellido', area: 'Area 12'},
    ];

    return(
        <div className="team-member-grid">
            {members.map((member, i) => <TeamMember key={i} member={member}/>)}
        </div>
    );
}
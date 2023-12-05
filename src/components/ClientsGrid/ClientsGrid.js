import React from "react";
import './ClientsGrid.css';
import * as clients from '../../locales/clients'; 

export default function ClientsGrid(){
    return(
        <div className="clients-grid">
            {Object.keys(clients).map(key =>{
            const client = clients[key];
            return (<div key={key}><img src={client.src} alt={client.name}/></div>);
        })}
        </div>
    );
}





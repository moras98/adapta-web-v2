// import React, { useState, useEffect } from "react";
// import './ClientsCarousel.css';
import * as clients from '../../locales/clients';

// export default function ClientsCarousel() {
//   const itemsPerPage = 9; // Número de elementos a mostrar en cada página del carrusel
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       // Incrementa el índice para mostrar el siguiente elemento del carrusel
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % Object.keys(clients).length);
//     }, 1000); // Cambia el tiempo en milisegundos según tus preferencias

//     // Limpia el intervalo cuando el componente se desmonta
//     return () => clearInterval(intervalId);
//   }, []); // El segundo parámetro del useEffect vacío asegura que solo se ejecutará al montar y desmontar el componente

//   const renderClients = () => {
//     const clientElements = [];
//     for (let i = 0; i < itemsPerPage; i++) {
//       const index = (currentIndex + i) % Object.keys(clients).length;
//       const client = clients[Object.keys(clients)[index]];
//       clientElements.push(
//         <div key={index} className="client">
//           <img src={client.src} alt={client.name} />
//         </div>
//       );
//     }
//     return clientElements;
//   };

//   return (
//     <div className="clients-carousel">
//       {renderClients()}
//     </div>
//   );
// }

import React from "react";
import './ClientsCarousel.css';

export default function ClientsCarousel() {

    // const clientsArr = Object.keys(clients).map(key => ({
    //     id: key,
    //     ...clients[key]
    // }));

    const clientsArr = [
        clients.alur, 
        clients.ancap, 
        clients.ute,
        clients.bid,
        clients.tether,
        clients.hive,
        clients.dh2,
        clients.ccfc,
        clients.imm,
        clients.tgm,
        clients.corporacion,
        clients.typsa,
        clients.jandenul,
        clients.juan_go,
        clients.upm,
        clients.cielo_azul,
        clients.cementos_artigas,
        clients.proquimur,
        clients.wsp,
        // clients.forestier,
        clients.typsa,
        // clients.powerchina
    ];


    return (
        <div className="carousel">
            <div className="clients-slide">
                {clientsArr.map((client, idx) => <img key={idx} src={client.src} alt={client.name}/>)}
            </div>
            <div className="clients-slide">
                {clientsArr.map((client, idx) => <img key={idx} src={client.src} alt={client.name}/>)}
            </div>
        </div>
    );
}
import React, { useState, useEffect } from "react";
import './ClientsCarousel.css';
import * as clients from '../../locales/clients';

export default function ClientsCarousel() {
  const itemsPerPage = 9; // Número de elementos a mostrar en cada página del carrusel
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Incrementa el índice para mostrar el siguiente elemento del carrusel
      setCurrentIndex((prevIndex) => (prevIndex + 1) % Object.keys(clients).length);
    }, 1000); // Cambia el tiempo en milisegundos según tus preferencias

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, []); // El segundo parámetro del useEffect vacío asegura que solo se ejecutará al montar y desmontar el componente

  const renderClients = () => {
    const clientElements = [];
    for (let i = 0; i < itemsPerPage; i++) {
      const index = (currentIndex + i) % Object.keys(clients).length;
      const client = clients[Object.keys(clients)[index]];
      clientElements.push(
        <div key={index} className="client">
          <img src={client.src} alt={client.name} />
        </div>
      );
    }
    return clientElements;
  };

  return (
    <div className="clients-carousel">
      {renderClients()}
    </div>
  );
}

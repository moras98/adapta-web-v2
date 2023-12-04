// import React from "react";
// import './ClientsGrid.css';
// import * as clients from '../../locales/clients'; 

// export default function ClientsGrid(){
//     return(
//         <div className="clients-grid">
//             {Object.keys(clients).map(key =>{
//             const client = clients[key];
//             return (<div key={key}><img src={client.src} alt={client.name}/></div>);
//         })}
//         </div>
//     );
// }

import React from "react";
import Slider from "react-slick";
import './ClientsGrid.css';
import * as clients from '../../locales/clients';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

export default function ClientsGrid() {

  const clientsArray = Object.values(clients); // Convertir a un arreglo
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
  };
  console.log(clientsArray);
  return (
    <div className="clients-grid">
        <Slider {...settings}>
            {clientsArray.map((client, index) => (
            <div key={index}>
                <img src={client.src} alt={client.name} />
            </div>
            ))}
        </Slider>
    </div>
  );
}




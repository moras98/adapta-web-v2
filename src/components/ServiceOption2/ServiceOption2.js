import React, { useState } from "react";

export default function ServiceOption2({ services }) {
  const [serviceSelected, setServiceSelected] = useState(null);

  const handleClick = (service) => {
    if (serviceSelected === service) {
      setServiceSelected(null); // Deselecciona la opción si ya está seleccionada
    } else {
      setServiceSelected(service); // Selecciona la opción si no está seleccionada
    }
  };

  return (
    <div
      className="service-option2"
      style={{
        width: "80%",
        display: "flex",
        flexDirection: "row",
        height: "400px",
        gap: "20px",
      }}
    >
      <div
        className="left-side"
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          gap: "10px",
        }}
      >
        <h2>
          {serviceSelected ? serviceSelected.title : "Servicios que proveemos"}
        </h2>
        <p>{serviceSelected ? serviceSelected.text : ""}</p>
      </div>
      <div
        className="right-side"
        style={{
          flex: 1,
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "25px",
          }}
        >
          {services.map((service, index) => (
            <ServiceElement
              key={index}
              service={service}
              onClick={() => handleClick(service)}
              isSelected={serviceSelected === service}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ServiceElement({ service, isSelected, onClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "15px",
        border: "3px solid #39ad00",
        transition: "all ease 0.5s",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
        color: isSelected ? "white" : isHovered ? "white" : "#39ad00",
        backgroundColor: isSelected
          ? "#39ad00"
          : isHovered
            ? "#39ad00"
            : "white",
        transform: isHovered ? "scale(1.1)" : "scale(1)",
        zIndex: isHovered ? 99 : isSelected ? 99 : 10,
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      <img
        src={service.icon}
        alt={service.title + " icon"}
        style={{
          height: "40px",
          filter: isSelected
            ? "brightness(0) invert(1)"
            : isHovered
              ? "brightness(0) invert(1)"
              : "invert(47%) sepia(62%) saturate(1758%) hue-rotate(64deg) brightness(95%) contrast(105%)",
        }}
      />
      <div
        style={{
          borderBottom: isSelected
            ? "2px solid white"
            : isHovered
              ? "2px solid white"
              : "2px solid #39ad00",
        }}
      >
        <h3>{service.title}</h3>
      </div>
    </button>
  );
}

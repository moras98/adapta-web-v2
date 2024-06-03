import React from "react";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import "./Contact.css";
import { useState } from "react";
import Map from "../../components/Map/Map";

export default function Contact({ language }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, como una solicitud HTTP a tu servidor.
    console.log("Datos del formulario:", formData);
  };

  return (
    <div className="body">
      <ImageFrame
        src="/assets/images/banner4.jpg"
        h1={language.h1}
        h2={language.h2}
      />
      <div className="content">
        {/* <div className="phrase-section">
          <h2>{language.phrase}</h2>
        </div> */}
        <div className="contact-section">
          <div className="contact-div">
            <h2>{language.form_title}</h2>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name">{language.form_name}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email">{language.form_mail}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message">{language.form_msg}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit">{language.form_send}</button>
            </form>
          </div>
          <div className="secondary-form-section">
            <h2>{language.other_title}</h2>
            <ul>
              <li>
                <b>{language.other_phone}:</b> (+598) 2706 7055
              </li>
              <li>
                <b>{language.other_mail}:</b> info@adapta.uy
              </li>
              <li>
                <b>{language.other_address}:</b> Blvr. Artigas 1132 / 001, CP
                11.300; Montevideo, Uruguay
              </li>{" "}
            </ul>{" "}
            <Map />
          </div>
        </div>
      </div>
    </div>
  );
}

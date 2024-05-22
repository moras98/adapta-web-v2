import React from "react";
import ImageFrame from "../../components/ImageFrame/ImageFrame";
import "./About.css";
import { Link } from "react-router-dom";

export default function About({ language }) {
  return (
    <div className="body">
      <ImageFrame src={language.src} h1={language.h1} h2={language.h2} />
      <div className="content">
        <div className="phrase-section">
          <h2>{language.phrase}</h2>
        </div>

        <div className="about-section">
          {language.texts.map((obj, index) => {
            return (
              <div key={index} className="text-about">
                <h2>{obj.title}</h2>
                <p>{obj.text}</p>
              </div>
            );
          })}
          {/* {language.texts2.map((obj, index) => {
            return (
              <div key={index} className="text-about">
                <h2>{obj.title}</h2>
                <p>{obj.text}</p>
              </div>
          )})} */}
        </div>

        {/* <div className="numbers-section">
          {language.numbers.map((obj, index) => {
            return (
              <div key={index} className="number-element">
                <h1>{obj.number}</h1>
                <h3>{obj.text?.toUpperCase()}</h3>
              </div>
            );
          })}
        </div> */}

        {/* <div className="about-section">
          {language.texts2.map((obj, index) => {
            return (
              <div key={index} className="text-about">
                <h2>{obj.title}</h2>
                <p>{obj.text}</p> */}
                {/* {obj.button ? (
                  <Link
                    className="button"
                    to={obj.button.route}
                    onClick={() => window.scrollTo({ top: 0 })}
                  >
                    <b>{obj.button.text.toUpperCase()}</b>
                  </Link>
                ) : (
                  <></>
                )} */}
              {/* </div>
            );
          })}
        </div> */}

        {/* <div className="colaboration-section"> */}
        {/*   <h2>{language.collaboration.h1}</h2> */}
        {/* </div> */}

        <div className="phrase-section">
          {/* <h2>{language.contact.title}</h2> */}
          <Link className="button" to={language.contact.href}>
            <b>{language.contact.text.toUpperCase()}</b>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "./Family.css";

const Family = () => {
  return (
    <section id="family" className="family-section">
      <div className="family-container">
        <div className="family-content">
          <h2 className="family-title">
            Com alegria no coração, descobrimos que Deus é tão bom!
          </h2>
          <div className="family-display">
            <div className="family-image-container">
              <div className="family-image-frame">
                <img
                  src="/assets/svg/family.jpeg"
                  alt="Família"
                  className="family-image"
                />
              </div>
            </div>
            <div className="family-gif-container">
              <img
                src="/assets/gif/abraao.gif"
                alt="Deus é amor"
                className="family-gif"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Family;

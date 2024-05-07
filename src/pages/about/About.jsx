import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./about.scss";
// import "./header.scss";

export default function About() {
  return (
    <div className="about-container">
      <Header />
      <div className="banner-and-list">
        <img
          src="./image-source2.png"
          alt="Image source 2"
          className="banner2"
        />
        <ul className="about-list">
          <li className="list-item">Fiabilité</li>
          <li className="list-item">Respect</li>
          <li className="list-item">Service</li>
          <li className="list-item">Sécurité</li>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

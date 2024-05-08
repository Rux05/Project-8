import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import ImgAboutBanner from "./../../assets/banner/image-source2.png";
import "./about.scss";
// import "./header.scss";

export default function About() {
  return (
    <div className="about-container">
      <Header />
      <div className="banner-and-list">
        <Banner img={ImgAboutBanner} />
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

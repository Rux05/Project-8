import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Banner from "../../components/banner/Banner";
import ImgAboutBanner from "./../../assets/banner/image-source2.png";
import "./about.scss";
// import "./../../components/header/header.scss";
// import "./header.scss";

export default function About() {
  return (
    <div className="about-container">
      <Header />
      <div className="banner-and-list">
        <Banner img={ImgAboutBanner} />
        <ul className="about-list">
          <div className="list-item">
            <li>Fiabilité</li>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
          <div className="list-item">
            <li>Respect</li>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
          <div className="list-item">
            <li>Service</li>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
          <div className="list-item">
            <li>Sécurité</li>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
        </ul>
      </div>
      <Footer />
    </div>
  );
}

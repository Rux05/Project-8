import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./page404.scss";
import errorImage from "./../../assets/error/404.png";

export default function Page404() {
  return (
    <div className="error-page-container">
      <Header />
      <div className="error-image-title">
        <img src={errorImage} alt="Page 404" className="error-image" />
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        {/* <a href="" className="retourner">Retourner sur la page d’accueil</a> */}
        <NavLink to="/error-404" className="retourner"></NavLink>
      </div>
      <Footer />
    </div>
  );
}

import React from "react";
import Logo from "../logo/Logo";
import ImgLogoFooter from "./../../assets/logo/LOGO2.png";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      <Logo img={ImgLogoFooter} />
      <div className="footer-text">
        <p>
          <i className="fa-regular fa-copyright"></i>
          2020 Kasa. All rights reserved
        </p>
      </div>
    </div>
  );
}

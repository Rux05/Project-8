import React from "react";
import "./footer.scss";

export default function Footer() {
  return (
    <div className="footer-container">
      {/* <Footer/> */}
      <img src="./LOGO2.png" className="logo2" alt="Logo2" />
      <p>
        <i className="fa-regular fa-copyright"></i>
        2020 Kasa. All rights reserved
      </p>
    </div>
  );
}

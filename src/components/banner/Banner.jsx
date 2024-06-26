import React from "react";
import "./banner.scss";

export default function Banner({ img, title }) {
  return (
    <div className="banner-container">
      <img src={img} alt="Image source 1" className="banner" />
      {title ? <h1 className="banner-title">{title}</h1> : ""}
    </div>
  );
}

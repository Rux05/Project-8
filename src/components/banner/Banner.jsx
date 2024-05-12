import React from "react";
import "./banner.scss";

export default function Banner({ img, title }) {
  return (
    <>
      <img src={img} alt="Image source 1" className="banner" />
      <h1>{title}</h1>
    </>
  );
}

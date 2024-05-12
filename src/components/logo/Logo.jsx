import React from "react";
import "./logo.scss";

export default function Logo({ img }) {
  return (
    <>
      <img src={img} alt="Logo" className="logo" />
    </>
  );
}

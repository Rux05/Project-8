import React from "react";
import Header from "../../components/header/Header";
import Body from "../../components/body/Body";
import Footer from "../../components/footer/Footer";
import "./home.scss";

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

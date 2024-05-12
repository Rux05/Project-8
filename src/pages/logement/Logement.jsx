import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import ImgLogementBanner from "./../../assets/banner/image-source1.png";
import "./logement.scss";
import Footer from "../../components/footer/Footer";

export default function Logement() {
  const { id } = useParams();
  console.log(id);
  const [property, setProperty] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties/${id}")
      .then((response) => response.json())
      .then((data) => setProperty(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, [id]);
  return (
    <>
      <div className="logement-container">
        <Header />
        <div className="logement-banner">
          <Banner img={ImgLogementBanner} />
          <h2>{property.title}</h2>
          <p>{property.description}</p>
        </div>
        <Footer />
      </div>
    </>
  );
}

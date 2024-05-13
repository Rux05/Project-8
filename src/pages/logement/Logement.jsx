import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import "./logement.scss";
import Footer from "../../components/footer/Footer";
import ImageSlider from "../../components/image slider/ImageSlider";

export default function Logement() {
  const { id } = useParams();
  console.log(id);
  const slides = [];
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
        <div className="slides-container">
          <ImageSlider slides={slides} />
        </div>
        <h2>{property.title}</h2>
        <p>{property.description}</p>
        <Footer />
      </div>
    </>
  );
}

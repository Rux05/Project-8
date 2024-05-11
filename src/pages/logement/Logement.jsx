import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import "./logement.scss";

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
      <Header />
      <div className="logement-container">
        <h2>{property.title}</h2>
        <p>{property.description}</p>
        {/* Alte detalii despre proprietate */}
      </div>
    </>
  );
}

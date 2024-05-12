import React, { useState, useEffect } from "react";
import "./body.scss";
import Banner from "../banner/Banner";
import ImgHomeBanner from "./../../assets/banner/image-source1.png";
import { Link } from "react-router-dom";

export default function Body() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((response) => response.json())
      .then((data) => setProperties(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="body-container">
      <Banner img={ImgHomeBanner} title="Chez vous, partout et ailleurs" />
      <ul className="property-grid">
        {properties.map((property) => (
          <li key={property.id}>
            <Link to={`/logement/${property.id}`} className="card">
              {/* <div className="gradient"> */}
              <img src={property.cover} alt={property.title} />
              {/* </div> */}
              <p className="property-title">{property.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

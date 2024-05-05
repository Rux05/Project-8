import React, { useState, useEffect } from "react";
import "./body.scss";

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
      <img src="./image-source1.png" alt="Image source 1" className="banner" />
      <h1>Chez vous, partout et ailleurs</h1>
      <ul className="property-grid">
        {properties.map((property) => (
          <li key={property.id}>
            <h2>{property.name}</h2>
            <div className="property-image-container">
              <img src={property.cover} alt={property.name} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

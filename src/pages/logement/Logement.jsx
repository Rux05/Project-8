import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../../components/header/Header";
import "./logement.scss";
import Footer from "../../components/footer/Footer";
import ImageSlider from "../../components/image slider/ImageSlider";
import Accordion from "../../components/accordion/Accordion";
import Rating from "../../components/rating/Rating";
import Tags from "../../components/tags/Tags";
// import { sliderArrowLeft } from "./../../assets/slider/arrow-left.png";
// import { sliderArrowRight } from "./../../assets/slider/arrow-right.png";

export default function Logement() {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [property, setProperty] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/properties/${id}`)
      .then((response) => {
        if (!response.ok) {
          navigate("/page-404");
          return null;
        }
        return response.json();
      })
      .then((data) => {
        if (data) {
          setProperty(data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
        navigate("/page-404");
      });
  }, [id, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <>
      <div className="logement-container">
        <Header />
        <div className="slider-container">
          <ImageSlider slides={property.pictures} />
          <div className="container">
            <div className="left-content">
              <h2>{property.title}</h2>
              <p>{property.location}</p>
              <Tags tags={property.tags} />
            </div>
            <div className="right-content">
              <div className="host-details">
                <p className="host-name">{property.host.name}</p>
                <img
                  src={property.host.picture}
                  alt="Host picture"
                  className="host-picture"
                />
              </div>
              <Rating rate={property.rating} />
            </div>
          </div>
          <div className="container-collapse">
            <Accordion title="Description" content={property.description} />
            <div className="description-equipments-separator"></div>
            <Accordion title="Équipements" content={property.equipments} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

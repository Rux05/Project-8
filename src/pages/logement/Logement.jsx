import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Banner from "../../components/banner/Banner";
import "./logement.scss";

export default function Logement() {
  const { id } = useParams();
  console.log(id);
  // const [id, setProperties] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8080/api/properties")
  //     .then((response) => response.json())
  //     .then((data) => setProperties(data))
  //     .catch((error) => console.error("Error fetching data:", error));
  // }, []);
  // return (
  //   <Header />;
  // );
}

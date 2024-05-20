import { useState } from "react";
import sliderArrowLeft from "./../../assets/slider/arrow-left.png";
import sliderArrowRight from "./../../assets/slider/arrow-right.png";
import "./imageslider.scss";

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  //   useEffect(() => {
  //     fetch("http://localhost:8080/api/properties/${id}")
  //       .then((response) => response.json())
  //       .then((data) => setProperty(data))
  //       .catch((error) => console.error("Error fetching data:", error));
  //   }, [id]);

  const goToPrevious = function () {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = function () {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <img
        src={slides[currentIndex]}
        alt="slider-images"
        className="slider-images"
      />
      {/* <i className="fa-solid fa-chevron-left" onClick={goToPrevious}></i>
      <i className="fa-solid fa-chevron-right" onClick={goToNext}></i> */}
      <img
        src={sliderArrowLeft}
        alt="slider arrow left"
        className="arrow-left"
        onClick={goToPrevious}
      />
      <img
        src={sliderArrowRight}
        alt="slider arrow right"
        className="arrow-right"
        onClick={goToNext}
      />
      <div className="indicators">{currentIndex + 1 + "/" + slides.length}</div>
    </div>
  );
}

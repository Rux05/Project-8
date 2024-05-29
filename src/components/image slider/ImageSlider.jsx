import { useState } from "react";
import sliderArrowLeft from "./../../assets/slider/arrow-left.png";
import sliderArrowRight from "./../../assets/slider/arrow-right.png";
import "./imageslider.scss";

export default function ImageSlider({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
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
      {slides.length > 1 && (
        <>
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
          <div className="indicators">
            <p>{currentIndex + 1 + "/" + slides.length}</p>
          </div>
        </>
      )}
    </div>
  );
}

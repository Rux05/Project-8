import { useState } from "react";
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
    <div className="slider-styles">
      <img src={slides[currentIndex]} alt="" />
      <i className="fa-solid fa-chevron-left" onClick={goToPrevious}></i>
      <i className="fa-solid fa-chevron-right" onClick={goToNext}></i>
      <div className="indicators">{currentIndex + 1 + "/" + slides.length}</div>
    </div>
  );
}

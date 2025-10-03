import React, { useState, useEffect } from "react";

const Banner = () => {
const slides = [
  {
   image: "https://picsum.photos/600/400?2", 
  },
  {
   image: "https://picsum.photos/600/400?3", 
  },
  {
     image: "https://picsum.photos/600/400?4", 
  },
  
];


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="banner-slider">
      <div className="slide">
        <div className="banner-content">
          <h1>{slides[currentIndex].title}</h1>
          <p>{slides[currentIndex].description}</p>
          <button className="shop-btn">{slides[currentIndex].buttonText}</button>
        </div>

        <div className="banner-image">
          <img
            src={slides[currentIndex].image}
            alt="banner"
            style={{ maxWidth: "100%", borderRadius: "8px" }}
          />
        </div>
      </div>

      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? "dot active" : "dot"}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
     
    </div>
  );
};

export default Banner;

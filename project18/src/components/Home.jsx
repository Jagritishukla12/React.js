import React, { useState, useEffect } from "react";


const Banner = () => {
  const slides = [
    {
      title: "Built to Last. Engineered for Strength.",
      description:
        "Discover premium industrial fasteners designed for maximum durability.",
      buttonText: "Shop Now",
      image:"/images/washers.png"
    },
    {
      title: "Quality You Can Trust.",
      description: "High-performance bolts and washers for every industry.",
      buttonText: "Explore",
      image: "/images/bolts.png",
    },
    {
      title: "Strength Meets Reliability.",
      description: "Fasteners crafted for heavy-duty performance.",
      buttonText: "Buy Now",
      image: "/images/washers.png",
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
          <img src={slides[currentIndex].image} alt="banner" />
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

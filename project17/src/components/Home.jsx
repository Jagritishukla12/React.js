import React, { useState, useEffect } from "react";

const images = [
  "https://picsum.photos/1200/500?1",
  "https://picsum.photos/1200/500?2",
  "https://picsum.photos/1200/500?3",
];

function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);   
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
      <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden rounded-lg">
        <img
          src={images[current]}
          alt="Hero"
          className="w-full h-full object-cover transition duration-1000"
        />
        
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-10 md:px-20 text-white">
          <p className="font-semibold text-lg mb-2">Featured</p>
          <h2 className="text-3xl md:text-5xl font-bold leading-snug">
            Breaking Into Product Design: Advice from Untitled Founder, Frankie
          </h2>
          <p className="mt-4 text-gray-200 max-w-lg">
            Let’s get one thing out of the way: you don’t need a fancy
            Bachelor’s Degree to get into Product Design...
          </p>
          <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded transition">
            Read More
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;

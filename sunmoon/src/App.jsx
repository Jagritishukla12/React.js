import React, { useState, useEffect } from "react";
import "./App.css";

export default function OrbitAnimation() {
  const [planetAngle, setPlanetAngle] = useState(0);
  const [moonAngle, setMoonAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlanetAngle((prev) => (prev + 1) % 360); 
      setMoonAngle((prev) => (prev + 5) % 360);   
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const planetX = 120 * Math.cos((planetAngle * Math.PI) / 180);
  const planetY = 120 * Math.sin((planetAngle * Math.PI) / 180);

  const moonX = 30 * Math.cos((moonAngle * Math.PI) / 180);
  const moonY = 30 * Math.sin((moonAngle * Math.PI) / 180);

  return (
    <div className="space">
      
      <div className="sun"></div>

  
      <div
        className="planet"
        style={{ transform: `translate(${planetX}px, ${planetY}px)` }}
      >
      
        <div
          className="moon"
          style={{ transform: `translate(${moonX}px, ${moonY}px)` }}
        ></div>
      </div>
    </div>
  );
}
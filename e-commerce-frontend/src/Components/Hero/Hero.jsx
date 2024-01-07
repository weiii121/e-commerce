import React from "react";
import "./Hero.css";
import ad from "../Assets/fasion.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-right">
        <img src={ad} alt="hero" />
      </div>
    </div>
  );
};

export default Hero;

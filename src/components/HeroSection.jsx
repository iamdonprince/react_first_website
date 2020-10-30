import React from "react";
import Button from "./Button";
import "./HeroSection.css";
import "../App.css";
function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video1.mp4" autoPlay loop muted></video>
      <h1>ADVENTURE AWAIT</h1>
      <p>what are you waiting for ?</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          WATCH TRAILER <i className="far fa-play-circle"></i>
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;

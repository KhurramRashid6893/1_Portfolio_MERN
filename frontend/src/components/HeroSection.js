import React from 'react';
import { Link } from 'react-router-dom';
import '../css/HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Hi, I'm Khurram Rashid</h1>
        <p>B.Tech CSE | Full + MERN Stack Developer | AI/ML Enthusiast</p>
        <Link to="/projects">
          <button className="hero-btn">View My Work</button>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;

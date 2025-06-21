import React from 'react';
import '../css/About.css';


const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="about-content">
        <img 
          src="https://via.placeholder.com/200" 
          alt="Khurram Rashid" 
          className="about-img"
        />
        <div className="about-text">
          <p>
            Hi! I’m <strong>Khurram Rashid</strong>, a B.Tech Computer Science & Engineering student at Amity University, Mumbai (2023-27), currently serving as Google Developer Groups On-Campus Lead (2024-25).
          </p>
          <p>
            I’m passionate about Full + MERN stack development, AI/ML, IoT, cybersecurity, and creating impactful projects. I love exploring technology, reading, playing chess, and contributing to open-source.
          </p>
          <p>
            <strong>Skills:</strong> MERN stack, Python, JavaScript, C, C++, Java, PHP, HTML, CSS, GraphQL, AI/ML, IoT, cybersecurity, data analytics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

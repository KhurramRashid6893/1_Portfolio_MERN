import React from 'react';
import '../css/Projects.css';

const projectsData = [
  {
    title: 'Blogging Website',
    tech: 'MERN Stack',
    link: '#',
    desc: 'A full-featured blog platform built with MERN stack.'
  },
  {
    title: 'Rock-Paper-Scissors Game',
    tech: 'Python, Flask, OpenCV',
    link: '#',
    desc: 'A real-time gesture recognition game.'
  },
  {
    title: 'Amazon Sales Dashboard',
    tech: 'Streamlit',
    link: 'https://amazonsalesinnobytes.streamlit.app/',
    desc: 'An AI-powered sales analytics dashboard.'
  },
  {
    title: 'SolarVision',
    tech: 'Yolov8, Gemini, Flask',
    link: '#',
    desc: 'A solar panel placement app using computer vision.'
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p><strong>Tech:</strong> {project.tech}</p>
            <p>{project.desc}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

import React from 'react';
import '../css/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'MERN Stack', level: '90%' },
    { name: 'Python', level: '85%' },
    { name: 'AI/ML', level: '80%' },
    { name: 'Cybersecurity', level: '75%' }
  ];

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      {skills.map((s, index) => (
        <div key={index} className="skill-bar">
          <div className="skill-name">{s.name}</div>
          <div className="skill-level" style={{ width: s.level }}>{s.level}</div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

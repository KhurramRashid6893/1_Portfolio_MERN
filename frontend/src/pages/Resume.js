import React from 'react';

const Resume = () => {
  return (
    <div style={{ padding: '60px 20px', textAlign: 'center' }}>
      <h2>Resume / CV</h2>
      <p>Download my resume below:</p>
      <a 
        href="/khurram_rashid_resume.pdf" 
        target="_blank" 
        rel="noopener noreferrer" 
        style={{ color: '#007BFF', textDecoration: 'none', fontSize: '1.2rem' }}>
        Download Resume
      </a>
    </div>
  );
};

export default Resume;

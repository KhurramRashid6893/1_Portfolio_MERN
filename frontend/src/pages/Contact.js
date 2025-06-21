import React from 'react';
import '../css/Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <div className="social-links">
        <a href="mailto:Khurramrashid0786@gmail.com">Email</a>
        <a href="https://github.com/khurramrashid6893" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/khurram-rashid" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {/* Replace URLs with your actual profiles */}
      </div>
    </div>
  );
};

export default Contact;

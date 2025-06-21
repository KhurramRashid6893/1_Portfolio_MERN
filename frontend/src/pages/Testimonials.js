import React from 'react';
import '../css/Testimonials.css';

const testimonials = [
  {
    name: 'Jane Doe',
    feedback: 'Khurram is a brilliant developer. His work on our project exceeded expectations.'
  },
  {
    name: 'John Smith',
    feedback: 'An exceptional problem solver. Highly recommend for any tech task.'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <div className="testimonials-list">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p>"{t.feedback}"</p>
            <h4>- {t.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

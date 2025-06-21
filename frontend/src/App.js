import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects'; // ✅ Import the Projects component
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PostDetails from './pages/PostDetails';
import Testimonials from './pages/Testimonials';
import Resume from './pages/Resume';
import Skills from './pages/Skills';
import './App.css'; 

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar">
          <div className="nav-container">
            <Link to="/" className="nav-logo">Khurram Portfolio</Link>
            <div className="nav-links">
              <Link to="/">Home</Link>
              <Link to="/skills">Skills</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/testimonials">Testimonials</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<PostDetails />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />

        </Routes>

          


      </div>
      <footer style={{ backgroundColor: '#007BFF', padding: '20px', color: 'white', textAlign: 'center' }}>
            © {new Date().getFullYear()} Khurram Rashid | All rights reserved
          </footer>
    </Router>

    


  );
}



export default App;

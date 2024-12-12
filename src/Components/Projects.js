import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './App.css';

// Base Page Component (template for other pages)
function BasePage({ title, children }) {
  return (
    <div className="home-page">
      <div className="background"></div>
      
      <nav className="nav-buttons">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/skills" className="nav-link">Skills</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="contact-button">Contact Me</Link>
      </nav>

      <motion.div 
        className="landing-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="name-description">
          <h2>{title}</h2>
        </div>
      </motion.div>

      {children}
    </div>
  );
}

// Home Page with Name and Quote
function Home() {
  return (
    <div className="home-page">
      <div className="background"></div>

      <nav className="nav-buttons">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/details" className="nav-link">Posts</Link>
        <Link to="/skills" className="nav-link">CV</Link>
        <Link to="/projects" className="nav-link">Projects</Link>
        <Link to="/contact" className="contact-button">Contact Me</Link>
      </nav>

      <motion.div 
        className="landing-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="name-description">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Arkapratim Mondal
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Student & Aspiring Software Engineer
          </motion.p>
        </div>
      </motion.div>

      <motion.section 
        className="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>About Me</h2>
        <p>I'm a passionate computer science student with a keen interest in software development and emerging technologies. My goal is to create innovative solutions that make a positive impact.</p>
      </motion.section>
    </div>
  );
}

// Detailed About Page
function About() {
  return (
    <BasePage title="About Details">
      <motion.section 
        className="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>More About Me</h2>
        <p>Detailed information about my background, education, and professional journey.</p>
      </motion.section>
    </BasePage>
  );
}

// Skills Page
function Skills() {
  return (
    <BasePage title="My Skills">
      <motion.section 
        className="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Technical Skills</h2>
        <p>Proficient in React, JavaScript, Python, and various web technologies.</p>
      </motion.section>
    </BasePage>
  );
}

// Projects Page
function Projects() {
  return (
    <BasePage title="My Projects">
      <motion.section 
        className="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Project Showcase</h2>
        <p>A collection of my software development projects.</p>
      </motion.section>
    </BasePage>
  );
}

// Contact Page
function Contact() {
  return (
    <BasePage title="Contact Information">
      <motion.section 
        className="section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Get in Touch</h2>
        <p>Contact details and communication methods.</p>
      </motion.section>
    </BasePage>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="./Componenets/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
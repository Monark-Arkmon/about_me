import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import project1Image from './project.jpg';
import CV from './CV_Arkapratim_Mondal.pdf';
import profileImage from './profile.jpg';

function Portfolio() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isImageHovered, setIsImageHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const ExperienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    // Ensure page is fully loaded before triggering animations
    const handleLoad = () => {
      setIsPageLoaded(true);
    };

    window.addEventListener('load', handleLoad);

    // Fallback in case load event doesn't fire
    const timer = setTimeout(() => {
      setIsPageLoaded(true);
    }, 1000);

    // Rest of the existing useEffect logic for section observation
    const sections = [
      { id: 'home', ref: homeRef },
      { id: 'about', ref: aboutRef },
      { id: 'experience', ref: ExperienceRef },
      { id: 'projects', ref: projectsRef },
      { id: 'skills', ref: skillsRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1 }
    );

    sections.forEach(({ id, ref }) => {
      if (ref.current) {
        ref.current.id = id;
        observer.observe(ref.current);
      }
    });

    return () => {
      window.removeEventListener('load', handleLoad);
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      id: 1,
      name: 'Project 1',
      image: project1Image,
      description: 'This is a description of Project 1.',
      githubLink: 'https://github.com/yourusername/project1'
    },
    {
      id: 2,
      name: 'Project 2',
      image: project1Image,
      description: 'This is a description of Project 2.',
      githubLink: 'https://github.com/yourusername/project2'
    },
    {
      id: 3,
      name: 'Project 3',
      image: project1Image,
      description: 'This is a description of Project 3.',
      githubLink: 'https://github.com/yourusername/project3'
    },
    {
      id: 4,
      name: 'Project 1',
      image: project1Image,
      description: 'This is a description of Project 1.',
      githubLink: 'https://github.com/yourusername/project4'
    },
    {
      id: 5,
      name: 'Project 2',
      image: project1Image,
      description: 'This is a description of Project 2.',
      githubLink: 'https://github.com/yourusername/project5'
    },
    {
      id: 6,
      name: 'Project 3',
      image: project1Image,
      description: 'This is a description of Project 3.',
      githubLink: 'https://github.com/yourusername/project6'
    },
    {
      id: 7,
      name: 'Project 1',
      image: project1Image,
      description: 'This is a description of Project 1.',
      githubLink: 'https://github.com/yourusername/project1'
    },
    {
      id: 8,
      name: 'Project 2',
      image: project1Image,
      description: 'This is a description of Project 2.',
      githubLink: 'https://github.com/yourusername/project2'
    },
    {
      id: 9,
      name: 'Project 3',
      image: project1Image,
      description: 'This is a description of Project 3.',
      githubLink: 'https://github.com/yourusername/project3'
    }
  ];

  const ExperienceEvents = [
    {
      id: 1,
      year: '2020 - 2021',
      title: 'Database Administrator & Systems Lead',
      description: 'Managed and maintained databases, and led system administration at Brahma Kumaris.',
      icon: '🖥️'
    },
    {
      id: 2,
      year: '2020 - 2022',
      title: 'Social Media Assistant',
      description: 'Managed social media accounts, enhancing online engagement and communication for Brahma Kumaris.',
      icon: '📱'
    },
    {
      id: 3,
      year: '2022 - 2023',
      title: 'Volunteer, Amitasha Program',
      description: 'Contributed to the social service program teaching underprivileged girls, promoting education and empowerment.',
      icon: '💡'
    },
    {
      id: 4,
      year: '2023',
      title: '3rd Place Prize, Vidyarthi Vigyan Manthan, India',
      description: 'Awarded 3rd place in the state-level science competition for innovative project work.',
      icon: '🥉'
    },
    {
      id: 5,
      year: '2023 - 2024',
      title: 'Committee Member, Tech Syndicate Club, Amity International School',
      description: 'Contributed to the activities of the largest tech club at school, organizing events and workshops.',
      icon: '🔧'
    },
    {
      id: 6,
      year: 'Sep 2024 - Present',
      title: 'Programming Lead, Manchester CanSat Project',
      description: 'Leading the programming team for the CanSat project, overseeing system design and implementation.',
      icon: '🛰️'
    },
    {
      id: 7,
      year: 'Sep 2024 - Present',
      title: 'Lead Events Officer, Google Developers Group, UoM',
      description: 'Organizing events and activities for the Google Developers Group at the University of Manchester.',
      icon: '📅'
    }
  ];

  const renderNavigation = () => (
    <nav className="nav-buttons">
      <button 
        onClick={() => scrollToSection(homeRef)} 
        className={`nav-link ${activeSection === 'home' ? 'active' : ''}`}
      >
        Home
      </button>
      <button 
        onClick={() => scrollToSection(aboutRef)} 
        className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
      >
        About
      </button>
      <button 
        onClick={() => scrollToSection(ExperienceRef)} 
        className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
      >
        Experience
      </button>
      <button 
        onClick={() => scrollToSection(projectsRef)} 
        className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
      >
        Projects
      </button>
      <button 
        onClick={() => scrollToSection(skillsRef)} 
        className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`}
      >
        Skills
      </button>
      <a href={CV} download>
        <button 
          className={`nav-link download-cv-button ${activeSection === 'cv' ? 'active' : ''}`}
        >
          Download CV
        </button>
      </a>
    </nav>
  );
  
  const renderContactDropdown = () => (
    <div 
      className="contact-dropdown-container"
      onMouseEnter={() => setIsContactOpen(true)}
      onMouseLeave={() => setIsContactOpen(false)}
    >
      <button className="contact-button">
        Contact Me
      </button>
      
      {isContactOpen && (
        <div className="contact-dropdown">
          <a 
            href="mailto:arkapratimmondal@gmail.com" 
            className="contact-dropdown-item"
          >
            Mail me
          </a>
          <a 
            href="https://www.linkedin.com/in/arkapratim-mondal" 
            target="_blank" 
            rel="noopener noreferrer"
            className="contact-dropdown-item"
          >
            LinkedIn
          </a>
        </div>
      )}
    </div>
  );

  return (
    <div className="portfolio-container">
      {renderNavigation()}
      <div className="contact">
        {renderContactDropdown()}
      </div>

    <div className="portfolio-container">
      {renderNavigation()}
      <div className="contact">
        {renderContactDropdown()}
      </div>

      {/* Home Page */}
      <div ref={homeRef} className="landing-page">
        <div className="background"></div>
        <div className="name-description">
          <motion.div 
            className="profile-image-container"
            onMouseEnter={() => setIsImageHovered(true)}
            onMouseLeave={() => setIsImageHovered(false)}
          >
            <motion.img 
              src={profileImage} 
              width="250" 
              height="250"
              loading="lazy"
              alt="Arkapratim Mondal" 
              className={`profile-image ${isImageHovered ? 'image-hover' : ''}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />
          </motion.div>
          {isPageLoaded && (
            <>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    duration: 0.8,
                    ease: "easeOut"
                  }
                }}
              >
                Arkapratim Mondal
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ 
                  opacity: 1, 
                  x: 0,
                  transition: {
                    duration: 0.8,
                    delay: 0.4,
                    ease: "easeOut"
                  }
                }}
              >
                Student & Aspiring Software Engineer
              </motion.p>
            </>
          )}
        </div>
      </div>

      {/* Experience Section */}
      <section 
        ref={aboutRef}
        className="section about-section"
      >
        <h2>About Me</h2>
        <p>Hello! I am Arkapratim Mondal, a passionate and curious first-year Computer Science student at the University of Manchester. I have a keen interest in technology, problem-solving, and building things from scratch. During my high school years, I became fascinated with coding by experimenting with automation scripts for games, and this led me to pursue a career in software development.</p>

  <p>Currently, I am focused on exploring the vast field of computer science, diving into web development, and learning new technologies like React.js. I am always excited to work on projects that challenge my abilities, such as building interactive websites and developing algorithms. When I am not coding, you can find me playing games, exploring new tech trends, or contributing to tech communities.</p>

  <p>I believe in creating solutions that not only solve problems but also make an impact. Whether it’s through my work on university projects or in my personal time, I strive to build technologies that make life easier and more enjoyable for everyone.</p>

  <p>Feel free to browse through my portfolio to learn more about my projects and experiences!</p>
      </section>

      {/* Experience Section */}
      <motion.section 
        ref={ExperienceRef}
        className="section Experience-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <h2>My Journey</h2>
        <p>A chronological overview of my key achievements and milestones.</p>
        <div className="Experience-container">
          {ExperienceEvents.map((event, index) => (
            <motion.div 
              key={event.id}
              className={`Experience-item ${index % 2 === 0 ? 'left' : 'right'}`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: 0.2 * index }}
              viewport={{ once: true }}
            >
              <div className="Experience-content">
                <div className="Experience-icon">{event.icon}</div>
                <div className="Experience-info">
                  <h3>{event.year}</h3>
                  <h4>{event.title}</h4>
                  <p>{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        ref={projectsRef}
        className="section projects-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Project Showcase</h2>
        <p>A collection of my software development projects.</p>
        <div className="project-container">
          {projects.map((project, index) => (
            <motion.div
              className="project-box"
              key={project.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { 
                  duration: 0.2,
                  type: "tween",
                  ease: "easeOut"
                }
              }}
              transition={{ 
                duration: 0.1, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              onClick={() => window.open(project.githubLink, '_blank')}
            >
              <img src={project.image} alt={project.name} loading="lazy"/>
              <div className="overlay">
                <h3>{project.name}</h3>
                <p>{project.description}</p>
                <div className="github-link-indicator">
                  <span>View on GitHub</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section 
        ref={skillsRef}
        className="section skills-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2>My Skills</h2>
        <p>A showcase of my technical and interpersonal skills.</p>
        <div className="skills-container">
          {[
            { name: 'JavaScript', icon: '🟨' },
            { name: 'Python', icon: '🐍' },
            { name: 'React.js', icon: '⚛️' },
            { name: 'HTML & CSS', icon: '🌐' },
            { name: 'MySQL', icon: '🐬' },
            { name: 'Verilog', icon: '📡' },
            { name: 'RISC-V', icon: '💡' },
            { name: 'Unity', icon: '🎮' },
            { name: 'Django', icon: '🐍' },
            { name: 'API Integration', icon: '🔌' },
            {name: 'PHP', icon: '🔥'},
            { name: 'Git & GitHub', icon: '🔧' },
            { name: 'Team Collaboration', icon: '🤝' },
            { name: 'Problem Solving', icon: '🧠' }
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-box"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  </div>
  );
}

export default Portfolio;
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import project1Image from './project.jpg';
import CV from './CV_Arkapratim_Mondal.pdf';
import { Banner } from './Banner';

function Portfolio() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  // Create refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const ExperienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    setIsPageLoaded(true);

    const sections = [
      { id: 'home', ref: homeRef },
      { id: 'about', ref: aboutRef },
      { id: 'experience', ref: ExperienceRef },
      { id: 'projects', ref: projectsRef },
      { id: 'skills', ref: skillsRef },
    ];

    // Function to calculate which section is most visible
    const calculateVisibleSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      // Special handling for home and about sections due to overlap
      if (scrollPosition < window.innerHeight * 0.8) {
        return 'home';
      }
      
      // For other sections, find the one most visible
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const element = section.ref.current;
          const rect = element.getBoundingClientRect();
          const sectionTop = rect.top + window.scrollY;
          
          if (scrollPosition >= sectionTop) {
            return section.id;
          }
        }
      }
      
      return 'home'; // Default to home if no section is found
    };

    // Add scroll event listener
    const handleScroll = () => {
      const newActiveSection = calculateVisibleSection();
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  const createStarfield = () => {
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    
    // Create regular stars
    for (let i = 0; i < 200; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Random size between 1-3px
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Random position
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Random twinkle duration
      star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
      
      starsContainer.appendChild(star);
    }
    
    // Create shooting stars
    for (let i = 0; i < 3; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      
      // Random position and delay
      shootingStar.style.left = `${Math.random() * 100}%`;
      shootingStar.style.top = `${Math.random() * 50}%`;
      shootingStar.style.animationDelay = `${Math.random() * 5}s`;
      
      starsContainer.appendChild(shootingStar);
    }
    
    // Add aurora effect
    const aurora = document.createElement('div');
    aurora.className = 'aurora';
    starsContainer.appendChild(aurora);
    
    document.body.appendChild(starsContainer);
  };
  
  // Call when component mounts
  useEffect(() => {
    createStarfield();
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

      {/* Home Page */}
      <div ref={homeRef} className="landing-page">
        <div className="background"></div>
        <div className="name-description">
        < Banner />
          {isPageLoaded && (
            <>
            </>
          )}
        </div>
      </div>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="about-section"
      >
        <h2>
          About Me
        </h2>
        <p>
        Hello! I am Arkapratim Mondal, a first-year Computer Science student at the University of Manchester, driven by a passion for technology, problem-solving, and innovation. My interest in coding sparked during my high school years when I created automation scripts for games. This led me to pursue a career in software development, where I continuously challenge myself to learn and grow.
        </p>
        <p>
        I have experience in web development, including building projects using modern technologies like React.js, Python, and Django. I am also passionate about UI/UX design and always strive to create user-friendly and intuitive interfaces.
        </p>
        <p>
        When I’m not coding, you can find me exploring new tech trends or working on personal projects.
        </p>
        
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
        className="projects-section"
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
  );
}

export default Portfolio;
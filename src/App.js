import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import project1Image from './project-imgs/face.png';
import project2Image from './project-imgs/cricket.png';
import project3Image from './project-imgs/finance.png';
import project4Image from './project-imgs/planchester.png';
import project5Image from './project-imgs/keep.png';
import project6Image from './project-imgs/game.png';
import CV from './CV_Arkapratim_Mondal.pdf';
import Intro from './Intro';
import AboutSection from './AboutSection';
import ContactButton from './ContactButton';
import { FaDesktop, FaMobileAlt, FaLightbulb, FaTrophy, FaWrench, FaSatellite, FaCalendarAlt } from 'react-icons/fa';
import { FaCode, FaJsSquare, FaPython, FaReact, FaHtml5, FaDatabase, FaMicrochip, FaPlug } from 'react-icons/fa';

function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  
  const homeRef = useRef(null);
  const ExperienceRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    setIsPageLoaded(true);

    const sections = [
      { id: 'home', ref: homeRef },
      { id: 'experience', ref: ExperienceRef },
      { id: 'projects', ref: projectsRef },
      { id: 'skills', ref: skillsRef },
    ];

    const calculateVisibleSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      
      if (scrollPosition < window.innerHeight * 0.8) {
        return 'home';
      }
      
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
      
      return 'home';
    };

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

      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;

      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;

      star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
      
      starsContainer.appendChild(star);
    }
    
    // Create shooting stars
    for (let i = 0; i < 3; i++) {
      const shootingStar = document.createElement('div');
      shootingStar.className = 'shooting-star';
      
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
  
  useEffect(() => {
    createStarfield();
  }, []);

  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      id: 1,
      name: 'Facial Recognition Attendance System',
      image: project1Image,
      description: 'Developed a face recognition system using FastAPI, OpenCV, and KNN for real-time identification and attendance tracking. Implemented face detection, feature extraction, and data management with pickle for efficient storage. Achieved high recognition accuracy with a confidence-based classification approach.',
      githubLink: 'https://github.com/Monark-Arkmon/Face_Recog_Attendance_Frontend'
    },
    {
      id: 2,
      name: 'Cricket Prediction App',
      image: project2Image,
      description: 'Developed an IPL match winner prediction model using machine learning with advanced feature engineering (team performance, player form, weather). Trained and optimized multiple models (Random Forest, XGBoost, Gradient Boosting, SVM, CatBoost, LightGBM, Logistic Regression) using ensemble techniques. Achieved 70.32% accuracy with an ensemble model, evaluated using GridSearchCV and feature importance analysis.',
      githubLink: 'https://github.com/Monark-Arkmon/IPL_prediction'
    },
    {
      id: 3,
      name: 'Full-Stack Finance Tracker App',
      image: project3Image,
      description: 'A finance tracker app to monitor income, expenses, and savings trends. Made using React.js, Ant Design(UI and Visualization) for Frontend, Papaparse for file parsing and Firebase for Backend.',
      githubLink: 'https://github.com/Monark-Arkmon/FinTrack'
    },
    {
      id: 4,
      name: 'Planchester',
      image: project4Image,
      description: 'Planchester is a React-based web application for planning trips in Manchester, featuring user authentication, profile management, and itinerary generation. Integrated Firebase for authentication and Firestore for data storage. Implemented responsive UI and utilized TripAdvisor API, Google Maps API, and geolocation for dynamic itinerary suggestions and location-based services.',
      githubLink: 'https://github.com/Monark-Arkmon/Hotel-Management-System'
    },
    {
      id: 5,
      name: 'Google Keep Clone',
      image: project5Image,
      description: 'A clone of Google Keep for note-taking and organizing tasks. Made using React.js, MUI Library(Material and Styles), uuid, react-beautiful-dnd and react-router.',
      githubLink: 'https://github.com/Monark-Arkmon/keep_clone'
    },
    {
      id: 6,
      name: 'Coffee Addict Game',
      image: project6Image,
      description: 'A Python game where players catch falling coffee beans to earn points, with powerups and challenges. Made using Python and Tkinter.',
      githubLink: 'https://github.com/Monark-Arkmon/Coffee_Addict'
    }
  ];

  const ExperienceEvents = [
    {
      id: 1,
      year: '2020 - 2021',
      title: 'Database Administrator & Systems Lead',
      description: 'Managed and maintained databases, and led system administration at Brahma Kumaris.',
      icon: <FaDesktop />
    },
    {
      id: 2,
      year: '2020 - 2022',
      title: 'Social Media Assistant',
      description: 'Managed social media accounts, enhancing online engagement and communication for Brahma Kumaris.',
      icon: <FaMobileAlt />
    },
    {
      id: 3,
      year: '2022 - 2023',
      title: 'Volunteer, Amitasha Program',
      description: 'Contributed to the social service program teaching underprivileged girls, promoting education and empowerment.',
      icon: <FaLightbulb />
    },
    {
      id: 4,
      year: '2023',
      title: '3rd Place Prize, Vidyarthi Vigyan Manthan, India',
      description: 'Awarded 3rd place in the state-percentage science competition for innovative project work.',
      icon: <FaTrophy />
    },
    {
      id: 5,
      year: '2023 - 2024',
      title: 'Committee Member, Tech Syndicate Club, Amity International School',
      description: 'Contributed to the activities of the largest tech club at school, organizing events and workshops.',
      icon: <FaWrench />
    },
    {
      id: 6,
      year: 'Sep 2024 - Present',
      title: 'Programming Lead, Manchester CanSat Project',
      description: 'Leading the programming team for the CanSat project, overseeing system design and implementation.',
      icon: <FaSatellite />
    },
    {
      id: 7,
      year: 'Sep 2024 - Present',
      title: 'Lead Events Officer, Google Developers Group, UoM',
      description: 'Organizing events and activities for the Google Developers Group at the University of Manchester.',
      icon: <FaCalendarAlt />
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

  return (
    <div className="portfolio-container">
      {renderNavigation()}
      <ContactButton />

      {/* Home Page */}
      <div ref={homeRef} className="landing-page">
        <div className="background"></div>
        <motion.div 
          className="home-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '50px',
            padding: '0 40px',
            height: '100vh'
          }}
        >
          <div style={{ flex: 1 }}>
            <AboutSection />
          </div>
          <div style={{ flex: 1 }}>
            <Intro />
          </div>
        </motion.div>
      </div>

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
            { name: 'JavaScript', icon: <FaJsSquare />, percentage: 90, color: '#F7DF1E' },
            { name: 'Python', icon: <FaPython />, percentage: 85, color: '#3776AB' },
            { name: 'React.js', icon: <FaReact />, percentage: 88, color: '#61DAFB' },
            { name: 'HTML & CSS', icon: <FaHtml5 />, percentage: 92, color: '#E34F26' },
            { name: 'MySQL', icon: <FaDatabase />, percentage: 80, color: '#4479A1' },
            { name: 'Verilog, RISC-V', icon: <FaMicrochip />, percentage: 75, color: '#FF6B6B' },
            { name: 'C++', icon: <FaCode />, percentage: 20, color: '#4CAF50' },
            { name: 'API Integration', icon: <FaPlug />, percentage: 85, color: '#9B59B6' },
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              className="skill-box"
              initial={{ scale: 0, rotate: 180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.2, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="skill-content">
                <div className="skill-icon">{skill.icon}</div>
                <h4>{skill.name}</h4>
                <div className="skill-bar-container">
                  <motion.div
                    className="skill-bar"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                <div className="skill-percentage">{skill.percentage}%</div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

    </div>
  );
}

export default Portfolio;
import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, User, Rocket } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const tags = [
    { name: 'Problem Solver', icon: <Rocket /> },
    { name: 'Web Developer', icon: <Code /> },
    { name: 'Tech Enthusiast', icon: <Cpu /> }
  ];

  const cardData = [
    {
      title: 'Who I Am',
      icon: <User />,
      content: `First-year Computer Science student at the University of Manchester, 
                driven by a passion for technology and innovation. My journey began 
                with game automation scripts and evolved into a deep fascination 
                with software development.`
    },
    {
      title: 'What I Do',
      icon: <Code />,
      content: `I craft user-friendly web applications using React.js and Python, 
                while exploring the realms of data management with MySQL and API 
                integrations. Currently focused on expanding my expertise in full-stack 
                development and cloud technologies.`
    }
  ];

  return (
    <section className="about-section">
      <div className="about-container">
        <motion.div 
          className="about-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="about-title">About Me</h2>
          <div className="about-divider" />
        </motion.div>

        <div className="about-grid">
          {cardData.map((card, index) => (
            <motion.div 
              key={card.title}
              className="about-card"
              {...fadeInUp}
              transition={{ delay: 0.2 * (index + 1) }}
            >
              <div className="card-header">
                <div className="icon-wrapper">
                  {card.icon}
                </div>
                <h3 className="card-title">{card.title}</h3>
              </div>
              <p className="card-content">{card.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="tags-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          {tags.map((tag, index) => (
            <motion.div
              key={tag.name}
              className="tag"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <span className="tag-icon">{tag.icon}</span>
              {tag.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
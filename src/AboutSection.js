import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, User, Rocket } from 'lucide-react';
import './AboutSection.css';

const AboutSection = () => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
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
      <motion.div 
        className="about-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-header">
          <motion.h2 
            className="about-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
        </div>

        <motion.div 
          className="about-content"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { 
              opacity: 1,
              transition: { 
                staggerChildren: 0.3,
                delayChildren: 0.3
              }
            }
          }}
        >
          {cardData.map((card, index) => (
            <motion.div 
              key={card.title}
              className="about-card"
              variants={cardVariants}
              whileHover="hover"
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
        </motion.div>

        <motion.div 
          className="tags-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {tags.map((tag, index) => (
            <motion.div
              key={tag.name}
              className="tag"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ delay: 1 + index * 0.2 }}
            >
              <span className="tag-icon">{tag.icon}</span>
              {tag.name}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
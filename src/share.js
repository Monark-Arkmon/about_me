const projects = [
    {
      id: 1,
      name: '',
      image: project1Image,
      description: '',
      githubLink: ''
    },
    {
      id: 2,
      name: '',
      image: project2Image,
      description: '',
      githubLink: ''
    },
    {
      id: 3,
      name: '',
      image: project3Image,
      description: '',
      githubLink: ''
    },    
  ];

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
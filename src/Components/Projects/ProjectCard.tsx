import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Project } from '../../types';
import styles from './project.module.css';

interface ProjectCardProps {
  project: Project;
  index: number;
  inView: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6,
        delay: index * 0.2 
      },
    },
  };

  return (
    <motion.div
      className={styles.projectCard}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      <div className={styles.projectImage}>
        <img src={project.imageUrl} alt={project.title} />
        
        <motion.div
          className={styles.projectOverlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className={styles.projectLinks}>
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                className={styles.projectLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt"></i>
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                className={styles.projectLink}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </motion.a>
            )}
          </div>
        </motion.div>
      </div>

      <div className={styles.projectContent}>
        <div className={styles.projectCategory}>{project.category}</div>
        
        <h3 className={styles.projectTitle}>{project.title}</h3>
        
        <p className={styles.projectDescription}>{project.description}</p>

        <div className={styles.projectTech}>
          {project.technologies.map((tech) => (
            <span key={tech} className={styles.techTag}>
              {tech}
            </span>
          ))}
        </div>

        <div className={styles.projectStats}>
          {project.stats.map((stat, statIndex) => (
            <div key={statIndex} className={styles.stat}>
              <span className={styles.statValue}>{stat.value}</span>
              <span className={styles.statLabel}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

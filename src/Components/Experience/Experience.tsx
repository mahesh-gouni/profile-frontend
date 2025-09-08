import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { experiences } from '../../data/portfolio';
import styles from './exprience.module.css';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8 },
    },
  };

  const getIcon = (type: string) => {
    return type === 'work' ? 'fas fa-briefcase' : 'fas fa-graduation-cap';
  };

  return (
    <section id="experience" className={styles.experience} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Professional Experience</h2>
          <p>My journey in software development and education</p>
        </motion.div>

        <motion.div
          className={styles.timeline}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Timeline Line */}
          <motion.div
            className={styles.timelineLine}
            initial={{ height: 0 }}
            animate={inView ? { height: '100%' } : {}}
            transition={{ duration: 2, delay: 0.5 }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`${styles.timelineItem} ${
                index % 2 === 0 ? styles.left : styles.right
              }`}
              variants={itemVariants}
            >
              {/* Timeline Marker */}
              <motion.div
                className={styles.timelineMarker}
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                whileHover={{ scale: 1.2 }}
              >
                <i className={getIcon(exp.type)}></i>
              </motion.div>

              {/* Timeline Content */}
              <motion.div
                className={styles.timelineContent}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className={styles.timelineHeader}>
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 + (index * 0.2) }}
                  >
                    {exp.title}
                  </motion.h3>
                  
                  <motion.span
                    className={styles.company}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.2) }}
                  >
                    {exp.company}
                  </motion.span>
                  
                  <motion.div
                    className={styles.timelineDate}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + (index * 0.2) }}
                  >
                    <span className={styles.duration}>{exp.duration}</span>
                    <span className={styles.location}>{exp.location}</span>
                  </motion.div>
                </div>

                <motion.div
                  className={styles.timelineDescription}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
                >
                  <ul>
                    {exp.responsibilities.map((responsibility, respIndex) => (
                      <motion.li
                        key={respIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ 
                          duration: 0.5, 
                          delay: 0.9 + (index * 0.2) + (respIndex * 0.1) 
                        }}
                      >
                        {responsibility}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className={styles.timelineTechnologies}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + (index * 0.2) }}
                >
                  {exp.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className={styles.techBadge}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ 
                        duration: 0.3, 
                        delay: 1.3 + (index * 0.2) + (techIndex * 0.05) 
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Achievements */}
        <motion.div
          className={styles.achievementsGrid}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <h3>Key Achievements</h3>
          
          <div className={styles.achievementsList}>
            {[
              {
                icon: 'fas fa-trophy',
                title: 'High Performance Projects',
                description: '95% accuracy in YOLO object detection system',
                color: '#f39c12'
              },
              {
                icon: 'fas fa-rocket',
                title: 'Scalable Solutions',
                description: 'Processing 10,000+ transactions per minute in fraud detection',
                color: '#e74c3c'
              },
              {
                icon: 'fas fa-code-branch',
                title: 'Best Practices',
                description: 'Implemented SOLID principles and clean architecture',
                color: '#3498db'
              },
              {
                icon: 'fas fa-docker',
                title: 'Modern DevOps',
                description: 'Containerization with Docker and microservices architecture',
                color: '#2ecc71'
              }
            ].map((achievement, index) => (
              <motion.div
                key={index}
                className={styles.achievementBox}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 2.2 + (index * 0.1) }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: `0 10px 20px ${achievement.color}20`
                }}
              >
                <div 
                  className={styles.achievementIcon}
                  style={{ backgroundColor: achievement.color }}
                >
                  <i className={achievement.icon}></i>
                </div>
                <div className={styles.achievementText}>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

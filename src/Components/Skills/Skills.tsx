import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skills } from '../../data/portfolio';
import { Skill } from '../../types';
import styles from './skills.module.css';

const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    database: 'Database & Storage',
    tools: 'Tools & DevOps'
  };

  const categoryIcons = {
    frontend: 'fas fa-paint-brush',
    backend: 'fas fa-server',
    database: 'fas fa-database',
    tools: 'fas fa-tools'
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="skills" className={styles.skills} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Technical Skills</h2>
          <p>Technologies and tools I work with</p>
        </motion.div>

        <motion.div
          className={styles.skillsContainer}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {Object.entries(groupedSkills).map(([category, categorySkills], index) => (
            <motion.div
              key={category}
              className={styles.skillCategory}
              variants={categoryVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.categoryHeader}>
                <i className={categoryIcons[category as keyof typeof categoryIcons]}></i>
                <h3>{categoryTitles[category as keyof typeof categoryTitles]}</h3>
              </div>

              <div className={styles.skillsGrid}>
                {categorySkills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className={styles.skillCard}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: (index * 0.2) + (skillIndex * 0.1) }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className={styles.skillIcon}
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <i className={skill.icon}></i>
                    </motion.div>
                    
                    <span className={styles.skillName}>{skill.name}</span>
                    
                    <div className={styles.skillBar}>
                      <motion.div
                        className={styles.skillProgress}
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.5, delay: (index * 0.2) + (skillIndex * 0.1) }}
                      />
                    </div>
                    
                    <span className={styles.skillLevel}>{skill.level}%</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;

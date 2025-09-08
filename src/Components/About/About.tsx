import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/portfolio';
import styles from './about.module.css';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: 'fas fa-graduation-cap',
      title: 'Education',
      subtitle: 'B.Tech in Computer Science',
      description: 'AAR Mahaveer Engineering College',
      color: '#667eea'
    },
    {
      icon: 'fas fa-certificate',
      title: 'Certification',
      subtitle: 'Full Stack Web Development',
      description: 'Unified Mentor (AICTE Authorized)',
      color: '#f093fb'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      subtitle: 'Active Developer',
      description: 'mahesh-gouni',
      color: '#4facfe'
    }
  ];

  const personalDetails = [
    { label: 'Name', value: personalInfo.name },
    { label: 'Email', value: personalInfo.email },
    { label: 'Location', value: personalInfo.location },
    { label: 'Phone', value: personalInfo.phone }
  ];

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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className={styles.about} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p>Get to know more about my background and expertise</p>
        </motion.div>

        <motion.div
          className={styles.aboutContent}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* About Text */}
          <motion.div className={styles.aboutText} variants={itemVariants}>
            <div className={styles.aboutDescription}>
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                I'm a passionate <strong>Java Full Stack Developer</strong> with a strong background in 
                designing and transforming ideas into cutting-edge web applications. I have implemented 
                the complete Software Development Life Cycle (SDLC), ensuring efficient project execution 
                from planning through to deployment and maintenance.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                My expertise spans across modern technologies including <strong>Spring Boot</strong>, 
                <strong>React</strong>, <strong>MySQL</strong>, <strong>Docker</strong>, and 
                <strong>Microservices Architecture</strong>. I'm skilled in project planning and 
                collaborating with cross-functional teams to deliver impactful software solutions.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                I have successfully implemented <strong>SOLID</strong> and <strong>DRY</strong> principles 
                in my projects, applied advanced <strong>design patterns</strong>, and optimized database 
                performance. My experience with <strong>Docker containerization</strong> and 
                <strong>API Gateway implementation</strong> demonstrates my commitment to modern development practices.
              </motion.p>
            </div>

            <motion.div 
              className={styles.aboutInfo}
              variants={itemVariants}
            >
              {personalDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  className={styles.infoItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                >
                  <span className={styles.infoLabel}>{detail.label}:</span>
                  <span className={styles.infoValue}>{detail.value}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className={styles.aboutButtons}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <motion.a
                href="/Mahesh_JAVA.pdf"
                className={`${styles.btn} ${styles.btnPrimary}`}
                download
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-download"></i>
                Download Resume
              </motion.a>
              
              <motion.a
                href="#contact"
                className={`${styles.btn} ${styles.btnOutline}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <i className="fas fa-envelope"></i>
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Achievements */}
          <motion.div className={styles.aboutAchievements} variants={itemVariants}>
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className={styles.achievementCard}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.2) }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                style={{ '--accent-color': achievement.color } as React.CSSProperties}
              >
                <motion.div
                  className={styles.achievementIcon}
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <i className={achievement.icon}></i>
                </motion.div>
                
                <div className={styles.achievementContent}>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.subtitle}</p>
                  <span>{achievement.description}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className={styles.skillsSummary}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3>Core Competencies</h3>
          <div className={styles.competencyGrid}>
            {[
              'Java & Spring Boot Development',
              'RESTful API Design & Implementation',
              'Database Design & Optimization',
              'Docker & Microservices',
              'Frontend Development (React)',
              'Version Control & CI/CD'
            ].map((competency, index) => (
              <motion.div
                key={index}
                className={styles.competencyItem}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.7 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <i className="fas fa-check-circle"></i>
                <span>{competency}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/portfolio';
import styles from './hero.module.css';
import ParticleBackground from '../ParticleBackground/ParticleBackground';
import { ReactTyped } from 'react-typed';
import Mahesh from '../../assests/profile.jpg';
const Hero: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [counters, setCounters] = useState({
    accuracy: 0,
    transactions: 0,
    projects: 0,
  });

  useEffect(() => {
    if (inView) {
      // Animate counters
      const timer = setInterval(() => {
        setCounters(prev => ({
          accuracy: prev.accuracy < 95 ? prev.accuracy + 1 : 95,
          transactions: prev.transactions < 10000 ? prev.transactions + 200 : 10000,
          projects: prev.projects < 4 ? prev.projects + 1 : 4,
        }));
      }, 50);

      return () => clearInterval(timer);
    }
  }, [inView]);

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
    <section id="home" className={styles.hero} ref={ref}>
      <ParticleBackground />
      
      <div className={styles.heroContainer}>
        <motion.div
          className={styles.heroContent}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.heroText} variants={itemVariants}>
            <motion.h1 className={styles.heroTitle}>
              <motion.span 
                className={styles.greeting}
                variants={itemVariants}
              >
                Hi, I'm
              </motion.span>
              
              <motion.span 
                className={styles.name}
                variants={itemVariants}
              >
                {personalInfo.name}
              </motion.span>
              
              <span className={styles.role}>
             <ReactTyped
  strings={[
    'Java Full Stack Developer',
    'Spring Boot Expert',
    'React Developer',
    'Database Designer'

  ]}
  typeSpeed={50}
  backSpeed={30}
  loop
/>
              </span>
            </motion.h1>

            <motion.p 
              className={styles.heroDescription}
              variants={itemVariants}
            >
              {personalInfo.summary}
            </motion.p>

            <motion.div 
              className={styles.heroStats}
              variants={itemVariants}
            >
              <div className={styles.stat}>
                <span className={styles.statNumber}>{counters.accuracy}</span>
                <span className={styles.statLabel}>% Accuracy in ML Projects</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{counters.transactions.toLocaleString()}+</span>
                <span className={styles.statLabel}>Transactions/min Processed</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>{counters.projects}+</span>
                <span className={styles.statLabel}>Major Projects Completed</span>
              </div>
            </motion.div>

            <motion.div 
              className={styles.heroButtons}
              variants={itemVariants}
            >
              <motion.a
                href="#projects"
                className={`${styles.btn} ${styles.btnPrimary}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <i className="fas fa-code"></i>
                View My Work
              </motion.a>
              
              <motion.a
                href="/MaheshGouni.pdf"
                className={`${styles.btn} ${styles.btnOutline}`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                download
              >
                <i className="fas fa-download"></i>
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className={styles.heroImage}
            variants={itemVariants}
          >
            <div className={styles.imageContainer}>
              <motion.img
                src={Mahesh}
                alt={personalInfo.name}
                className={styles.profileImg}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className={styles.imageDecoration}>
                <motion.div
                  className={styles.decorationCircle}
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className={styles.decorationDots} />
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.heroScroll}
          variants={itemVariants}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <a
            href="#about"
            className={styles.scrollDown}
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className={styles.scrollText}>Scroll Down</span>
            <div className={styles.scrollIndicator}>
              <span></span>
            </div>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

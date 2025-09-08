import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../data/portfolio';
import styles from './footer.module.css';

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: 'fab fa-github',
      href: personalInfo.github,
      color: '#333'
    },
    {
      name: 'LinkedIn',
      icon: 'fab fa-linkedin',
      href: personalInfo.linkedin,
      color: '#0077b5'
    },
    {
      name: 'Email',
      icon: 'fas fa-envelope',
      href: `mailto:${personalInfo.email}`,
      color: '#ea4335'
    },
    {
      name: 'Phone',
      icon: 'fas fa-phone',
      href: `tel:${personalInfo.phone}`,
      color: '#34a853'
    }
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Footer Content */}
        <motion.div
          className={styles.footerContent}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Footer Info */}
          <div className={styles.footerSection}>
            <motion.div
              className={styles.footerLogo}
              whileHover={{ scale: 1.05 }}
            >
              <span className={styles.logoText}>&lt;MaheshGouni/&gt;</span>
            </motion.div>
            
            <p className={styles.footerDescription}>
              Java Full Stack Developer passionate about creating innovative web solutions 
              and transforming ideas into cutting-edge applications.
            </p>
            
            <div className={styles.footerContact}>
              <p>
                <i className="fas fa-envelope"></i>
                {personalInfo.email}
              </p>
              <p>
                <i className="fas fa-phone"></i>
                {personalInfo.phone}
              </p>
              <p>
                <i className="fas fa-map-marker-alt"></i>
                {personalInfo.location}
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul className={styles.footerLinks}>
              {footerLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.footerSection}>
            <h3>Services</h3>
            <ul className={styles.footerServices}>
              {[
                'Full Stack Web Development',
                'Java & Spring Boot Development',
                'React Frontend Development',
                'Database Design & Optimization',
                'API Development & Integration',
                'DevOps & Deployment'
              ].map((service, index) => (
                <motion.li
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className={styles.footerSection}>
            <h3>Connect With Me</h3>
            <div className={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className={styles.socialLink}
                  target={social.href.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.2, 
                    y: -3,
                    boxShadow: `0 5px 15px ${social.color}40`
                  }}
                  whileTap={{ scale: 0.9 }}
                  viewport={{ once: true }}
                  style={{ '--social-color': social.color } as React.CSSProperties}
                >
                  <i className={social.icon}></i>
                  <span>{social.name}</span>
                </motion.a>
              ))}
            </div>

            {/* Newsletter */}
            <div className={styles.newsletter}>
              <h4>Stay Updated</h4>
              <p>Get notified about my latest projects and articles</p>
              <div className={styles.newsletterForm}>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className={styles.newsletterInput}
                />
                <motion.button
                  className={styles.newsletterBtn}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className="fas fa-paper-plane"></i>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className={styles.footerBottom}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className={styles.footerCopyright}>
            <p>
              &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
            <p>
              Designed and developed with <i className="fas fa-heart"></i> by Mahesh Gouni
            </p>
          </div>

          <div className={styles.footerTech}>
            <span>Built with React & TypeScript</span>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      <motion.button
        className={`${styles.backToTop} ${showBackToTop ? styles.show : ''}`}
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: showBackToTop ? 1 : 0, 
          scale: showBackToTop ? 1 : 0 
        }}
        whileHover={{ scale: 1.1, y: -3 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <i className="fas fa-arrow-up"></i>
      </motion.button>
    </footer>
  );
};

export default Footer;

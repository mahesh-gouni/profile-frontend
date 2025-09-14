import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './header.module.css';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, sectionName: string) => {
    setActiveSection(sectionName.toLowerCase());
    setIsMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header 
      className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className={styles.navbar}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <motion.div 
            className={styles.navLogo}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#home" onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home', 'home');
            }}>
              <span className={styles.logoText}>&lt;MaheshGouni/&gt;</span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className={`${styles.navMenu} ${isMenuOpen ? styles.show : ''}`}>
            <ul className={styles.navList}>
              {navItems.map((item, index) => (
                <motion.li 
                  key={item.name}
                  className={styles.navItem}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.href}
                    className={`${styles.navLink} ${
                      activeSection === item.name.toLowerCase() ? styles.active : ''
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href, item.name);
                    }}
                  >
                    {item.name}
                  </a>
                </motion.li>
              ))}
            </ul>

            <button 
              className={styles.navClose}
              onClick={() => setIsMenuOpen(false)}
            >
              <i className="fas fa-times"></i>
            </button>
          </div>

          {/* Mobile Menu Toggle Only */}
          <div className={styles.navActions}>
            <button
              className={styles.navToggle}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;

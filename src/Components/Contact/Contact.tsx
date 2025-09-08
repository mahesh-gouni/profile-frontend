import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { personalInfo } from '../../data/portfolio';
import { useStoreContactDetails } from '../../hooks/profile-api';
import styles from './contact.module.css';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const { mutate } = useStoreContactDetails();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    mutate(formData, {
      onSuccess: () => {
        setSubmitStatus('success');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      },
      onError: () => {
        setSubmitStatus('error');
        setIsSubmitting(false);
        setTimeout(() => setSubmitStatus(null), 5000);
      },
    });
  };

  const contactItems = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: 'fas fa-phone',
      title: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: personalInfo.location,
      href: '#',
    },
  ];

  const socialLinks = [
    {
      icon: 'fab fa-github',
      href: personalInfo.github,
      label: 'GitHub',
    },
    {
      icon: 'fab fa-linkedin',
      href: personalInfo.linkedin,
      label: 'LinkedIn',
    },
    {
      icon: 'fas fa-envelope',
      href: `mailto:${personalInfo.email}`,
      label: 'Email',
    },
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

  const messageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section id="contact" className={styles.contact} ref={ref}>
      <div className="container">
        <motion.div
          className={styles.sectionTitle}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2>Get In Touch</h2>
          <p>Let's discuss your next project or opportunity</p>
        </motion.div>

        <motion.div
          className={styles.contactContent}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Contact Info */}
          <motion.div className={styles.contactInfo} variants={itemVariants}>
            {contactItems.map((item, index) => (
              <motion.div
                key={index}
                className={styles.contactItem}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                role="group"
                aria-label={`${item.title} contact information`}
              >
                <div className={styles.contactIcon}>
                  <i className={item.icon}></i>
                </div>
                <div className={styles.contactDetails}>
                  <h3>{item.title}</h3>
                  <p>{item.value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className={styles.contactSocial}
              variants={itemVariants}
            >
              <h3>Follow Me</h3>
              <div className={styles.socialLinks}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={social.label}
                  >
                    <i className={social.icon}></i>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className={styles.contactFormContainer}
            variants={itemVariants}
          >
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="name"
                  name="fullName" // Fixed from "name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="name">Full Name</label>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="email">Email Address</label>
              </div>

              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="subject">Subject</label>
              </div>

              <div className={styles.formGroup}>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
                <label htmlFor="message">Message</label>
              </div>

              <motion.button
                type="submit"
                className={`${styles.btn} ${styles.btnPrimary} ${styles.btnFull} ${
                  isSubmitting ? styles.loading : ''
                }`}
                disabled={isSubmitting}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className={styles.btnText}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <span className={styles.btnLoading}>
                  <i className="fas fa-spinner fa-spin"></i>
                </span>
              </motion.button>

              {/* Status Messages */}
              <AnimatePresence mode="wait">
                {submitStatus === 'success' && (
                  <motion.div
                    key="success"
                    className={styles.successMessage}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <i className="fas fa-check-circle"></i>
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    key="error"
                    className={styles.errorMessage}
                    variants={messageVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <i className="fas fa-exclamation-circle"></i>
                    Something went wrong. Please try again later.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
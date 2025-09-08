import React from 'react';
import { motion } from 'framer-motion';
import styles from './loadingScreen.module.css';

const LoadingScreen: React.FC = () => {
  const codeLines = [
    'public class MaheshGouni {',
    '    private String role = "FullStackDeveloper";',
    '    public static  void main(String [] args) {',
    '        System.out.println("Welcome!");',
    '    }',
    '}'
  ];

  return (
    <motion.div
      className={styles.loadingScreen}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className={styles.loader}>
        <div className={styles.codeLines}>
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              className={styles.line}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.3, duration: 0.5 }}
            >
              {line}
            </motion.div>
          ))}
        </div>
        
        <motion.div
          className={styles.progressBar}
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 2.5, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;

import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = ({ onGetStartedClick }) => {
  return (
    <section className={styles.heroSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.heroTitle}>
          Unlock Your <span className={styles.highlight}>Potential</span> in the Job Market
        </h1>
        <p className={styles.heroSubtitle}>
          Explore thousands of job opportunities and find the career that matches your passion.
        </p>
        <div className={styles.buttons}>
          <button className={styles.primaryButton} onClick={onGetStartedClick}>
            Get Started
          </button>
          <button className={styles.secondaryButton}>Browse Jobs</button>
        </div>
      </div>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>500+</h2>
          <p className={styles.statLabel}>New Jobs Added Daily</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>200+</h2>
          <p className={styles.statLabel}>Companies Hiring</p>
        </div>
        <div className={styles.statItem}>
          <h2 className={styles.statNumber}>50K+</h2>
          <p className={styles.statLabel}>Job Seekers</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

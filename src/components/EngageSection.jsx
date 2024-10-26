import React from 'react';
import styles from './EngageSection.module.css';

const EngageSection = () => {
  return (
    <div className={styles.heroSection}>
      <div className={styles.contentWrapper}>
        <h1>
          Millions Of Jobs. <br />
          <span className={styles.highlight}>Find The One That's Right For You</span>
        </h1>
        <p>
          Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide.
          <br /> The right job is out there.
        </p>
        <div className={styles.buttonGroup}>
          <button className={styles.searchButton}>Search Job</button>
          <button className={styles.learnButton}>Learn More</button>
        </div>
      </div>
      <div className={styles.statsWrapper}>
        <div className={styles.textContainer}>
          <p className={styles.animatedImage}>Our company has branches across multiple industries.</p>
          <h1>Our Office</h1>
          <h3>17+</h3>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.animatedImage}>We take pride in our highly skilled professional team.</p>
          <h1>Skilled People</h1>
          <h3>86+</h3>
        </div>
        <div className={styles.textContainer}>
          <p className={styles.animatedImage}>We provide comprehensive solutions for businesses globally.</p>
          <h1>Complete Cases</h1>
          <h3>25k+</h3>
        </div>
      </div>
    </div>
  );
};

export default EngageSection;

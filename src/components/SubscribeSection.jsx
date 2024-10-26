import React from 'react';
import styles from './SubscribeSection.module.css';
import backgroundImage from './images/bgimage.jpg'; // Background image

const SubscribeSection = () => {
  return (
    <section
      className={styles.subscribeSection}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >

      <h2>New Things Will Always Update Regularly</h2>
      <div className={styles.formContainer}>
        <input
          type="email"
          placeholder="Enter your email"
          className={styles.emailInput}
        />
        <button className={styles.subscribeButton}>Subscribe</button>
      </div>
    </section>
  );
};

export default SubscribeSection;

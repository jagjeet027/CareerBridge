import React from 'react';
import styles from './WhyChooseUs.module.css'; // Importing module CSS
import { FaHandshake, FaRocket, FaHeadset } from 'react-icons/fa'; // Icons

const WhyChooseUs = () => {
  return (
    <section className={styles.whyChooseSection}>
      <div className={styles.whyChooseContainer}>
        <h2 className={styles.sectionTitle}>
          Why Choose <span className={styles.highlight}>Us?</span>
        </h2>
        <p className={styles.sectionSubtitle}>
          We provide the best resources and opportunities to help you succeed in your career.
        </p>
        <div className={styles.features}>
          <div className={styles.featureItem}>
            <FaRocket className={styles.icon} />
            <h3 className={styles.featureTitle}>Fast Job Search</h3>
            <p className={styles.featureDescription}>
              Find job opportunities quickly with our user-friendly interface and advanced search tools.
            </p>
          </div>
          <div className={styles.featureItem}>
            <FaHandshake className={styles.icon} />
            <h3 className={styles.featureTitle}>Trusted by Companies</h3>
            <p className={styles.featureDescription}>
              Hundreds of top companies trust our platform to find qualified candidates like you.
            </p>
          </div>
          <div className={styles.featureItem}>
            <FaHeadset className={styles.icon} />
            <h3 className={styles.featureTitle}>24/7 Support</h3>
            <p className={styles.featureDescription}>
              Our support team is available 24/7 to help you with any questions or issues.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;

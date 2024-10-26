import styles from './HiringBanner.module.css';

const HiringBanner = () => {
  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerContent}>
        <div className={styles.bannerLeft}>
          <div className={styles.searchIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.svgIcon}
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <div className={styles.bannerText}>
            <h1>
              We are <span className={styles.hiring}>Hiring</span>
            </h1>
            <p>Let's Work Together & Explore Opportunities</p>
          </div>
        </div>
        <button className={styles.applyButton}>Apply Now</button>
        <div className={styles.bannerRight}>
          <div className={styles.interviewIcon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.svgIcon}
            >
              <rect x="3" y="3" width="18" height="12" rx="2" ry="2"></rect>
              <path d="M7 21v-4a4 4 0 014-4h2a4 4 0 014 4v4"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringBanner;

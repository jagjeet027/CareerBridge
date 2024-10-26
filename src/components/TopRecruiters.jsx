import React, { useEffect, useState } from 'react';
import styles from './TopRecruiters.module.css';
import tesla from './companies/tesla.jpg';
import handm from './companies/h&m.png';
import google from './companies/google.jpeg';
import amazon from './companies/amazon.jpeg';
import microsoft from './companies/microsoft.png';
import ambuja from './companies/ambuja.jpeg';
import apple from './companies/apple.jpeg';
import cisco from './companies/cisco.jpeg';
import android from './companies/android.jpeg';
import cocacola from './companies/cococola.png';
import honda from './companies/honda.jpeg';
import hp from './companies/hp.jpg';
import lg from './companies/lg.png';
import ranger from './companies/ranger.jpeg';
import suzuki from './companies/suzuki.jpeg';
import walmart from './companies/walemart.jpeg';

const recruitersData = [
  { id: 1, name: 'Tesla', rating: 4.8, reviews: 120, location: 'Chicago, US', logo: tesla },
  { id: 2, name: 'H&M', rating: 4.5, reviews: 85, location: 'New York, US', logo: handm },
  { id: 3, name: 'Google', rating: 4.9, reviews: 200, location: 'Mountain View, US', logo: google },
  { id: 4, name: 'Amazon', rating: 4.6, reviews: 150, location: 'Seattle, US', logo: amazon },
  { id: 5, name: 'Microsoft', rating: 4.7, reviews: 180, location: 'Redmond, US', logo: microsoft },
  { id: 6, name: 'Ambuja', rating: 4.3, reviews: 180, location: 'Bangalore, India', logo: ambuja },
  { id: 7, name: 'Android', rating: 4.7, reviews: 180, location: 'Redmond, US', logo: android },
  { id: 8, name: 'Apple', rating: 4.9, reviews: 280, location: 'New York, US', logo: apple },
  { id: 9, name: 'Cisco', rating: 3.7, reviews: 150, location: 'Pune, India', logo: cisco },
  { id: 10, name: 'Coca-Cola', rating: 4.5, reviews: 200, location: 'Ludhiana, Punjab', logo: cocacola },
  { id: 11, name: 'Honda', rating: 4.7, reviews: 180, location: 'Mumbai, Maharashtra', logo: honda },
  { id: 12, name: 'HP', rating: 4.7, reviews: 180, location: 'Redmond, US', logo: hp },
  { id: 13, name: 'LG', rating: 4.2, reviews: 230, location: 'California, US', logo: lg },
  { id: 14, name: 'Ranger Rover', rating: 3.7, reviews: 300, location: 'Chennai, Tamil Nadu', logo: ranger },
  { id: 15, name: 'Suzuki', rating: 5, reviews: 380, location: 'Pune, India', logo: suzuki },
  { id: 16, name: 'Walmart', rating: 4.8, reviews: 220, location: 'Bihar, India', logo: walmart },
];

const TopRecruiters = () => {
  const [visibleCards, setVisibleCards] = useState(6); // Show 6 cards initially
  const [showAll, setShowAll] = useState(false);

  const handleShowMore = () => {
    setShowAll(!showAll);
    setVisibleCards(showAll ? 6 : recruitersData.length);
  };

  return (
    <section className={styles.recruitersSection}>
      <div className={styles.header}>
        <h2>Top Recruiters</h2>
        <p>Discover your next career move, freelance gig, or internship</p>
      </div>
      <div className={styles.recruitersGrid}>
        {recruitersData.slice(0, visibleCards).map((recruiter) => (
          <div key={recruiter.id} className={styles.recruiterCard}>
            <div className={styles.logoContainer}>
              <img src={recruiter.logo} alt={`${recruiter.name} logo`} />
            </div>
            <h3>{recruiter.name}</h3>
            <div className={styles.rating}>
              <span>⭐ {recruiter.rating}</span>
              <span>({recruiter.reviews} Reviews)</span>
            </div>
            <p className={styles.location}>
              <i className="fas fa-map-marker-alt"></i> {recruiter.location}
            </p>
          </div>
        ))}
      </div>
      <button onClick={handleShowMore} className={styles.showMoreButton}>
        {showAll ? 'Show Less' : 'Show More'}
      </button>
    </section>
  );
};

export default TopRecruiters;

import React, { useState } from 'react';
import styles from './WorkOfTheDay.module.css';
import th from '../assets/images/th.jpeg';
import digital from '../assets/images/digital-marketing-design-vector.jpg';
import UIUX from '../assets/images/UI-UX-011.webp';
import DataSci from '../assets/images/dataSci.jpeg';
import proCo from '../assets/images/proCo.jpeg';
import proMan from '../assets/images/ProMan.jpeg';
import contWri from '../assets/images/coWri.jpeg';
import devops from '../assets/images/Devops.jpeg';
import GD from '../assets/images/gdesign.jpg';
import SEO from '../assets/images/SEO.jpeg';
import BA from '../assets/images/BusinessAly.jpg';
import HR from '../assets/images/hrmanager.jpeg';
import SoftArc from '../assets/images/softwareArchi.jpeg';
import NetEng from '../assets/images/networkEng.jpeg';
import CloudEng from '../assets/images/cloudEnginner.png';
import security from '../assets/images/security.jpg';
import AiMl from '../assets/images/aiml.jpg';
import sys from '../assets/images/sysAdm.jpg';

const roleList = [
  { id: 1, title: 'Digital Marketing', location: 'Denmark', imageSrc: digital },
  { id: 2, title: 'Full Stack Developer', location: 'USA', imageSrc: th},
  { id: 3, title: 'UI/UX Designer', location: 'England', imageSrc: UIUX },
  { id: 4, title: 'Data Scientist', location: 'Germany', imageSrc:DataSci},
  { id: 5, title: 'Product Manager', location: 'Canada', imageSrc: proMan },
  { id: 6, title: 'Project Coordinator', location: 'Australia', imageSrc:proCo },
  { id: 7, title: 'Content Writer', location: 'France', imageSrc: contWri },
  { id: 8, title: 'DevOps Engineer', location: 'Netherlands', imageSrc: devops },
  { id: 9, title: 'Graphic Designer', location: 'Spain', imageSrc: GD },
  { id: 10, title: 'SEO Specialist', location: 'India', imageSrc: SEO },
  { id: 11, title: 'Business Analyst', location: 'USA', imageSrc:BA },
  { id: 12, title: 'HR Manager', location: 'UK', imageSrc: HR },
  { id: 13, title: 'Software Architect', location: 'Germany', imageSrc: SoftArc },
  { id: 14, title: 'Network Engineer', location: 'Sweden', imageSrc: NetEng },
  { id: 15, title: 'Cloud Engineer', location: 'Canada', imageSrc: CloudEng },
  { id: 16, title: 'Security Specialist', location: 'USA', imageSrc:security },
  { id: 17, title: 'AI/ML Engineer', location: 'Japan', imageSrc: AiMl},
  { id: 18, title: 'Systems Administrator', location: 'Australia', imageSrc:sys}
];

const WorkOfTheDay = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  const handleNext = () => {
    setCurrentGroup((prev) => (prev + 1) % 5); // Move to the next group
  };

  const handlePrev = () => {
    setCurrentGroup((prev) => (prev === 0 ? 4 : prev - 1)); // Move to the previous group
  };

  const handleDotClick = (index) => {
    setCurrentGroup(index); // Set group based on dot clicked
  };

  const displayedRoles = roleList.slice(currentGroup * 4, currentGroup * 4 + 4);

  return (
    <div className={styles.workContainer}>
      <h2>Work of the Day</h2>
      <p>Explore today's opportunities in different fields</p>

      <div className={styles.slider}>
        <button onClick={handlePrev} className={styles.prevButton}>❮</button>
        <div className={styles.roleList}>
          {displayedRoles.map((role) => (
            <div key={role.id} className={styles.roleCard}>
              <img src={role.imageSrc} alt={role.title} className={styles.roleImage} />
              <h3>{role.title}</h3>
              <p>{role.location}</p>
            </div>
          ))}
        </div>
        <button onClick={handleNext} className={styles.nextButton}>❯</button>
      </div>

      <div className={styles.dots}>
        {[0, 1, 2, 3, 4].map((dot, index) => (
          <span
            key={index}
            className={`${styles.dot} ${currentGroup === index ? styles.active : ''}`}
            onClick={() => handleDotClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default WorkOfTheDay;

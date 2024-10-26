import React from 'react';
import styles from './CategorySection.module.css';

const categories = [
  {
    name: 'Retail & Product',
    jobsAvailable: 4,
    icon: '🛍️',
    description: 'Find retail and product management jobs',
  },
  {
    name: 'Content Writer',
    jobsAvailable: 5,
    icon: '✍️',
    description: 'Discover content writing opportunities',
  },
  {
    name: 'Human Resource',
    jobsAvailable: 6,
    icon: '👥',
    description: 'Explore HR management positions',
  },
  {
    name: 'Market Research',
    jobsAvailable: 3,
    icon: '📊',
    description: 'Market analysis and research jobs available',
  },
  {
    name: 'Software',
    jobsAvailable: 10,
    icon: '💻',
    description: 'Software development and engineering roles',
  },
  {
    name: 'Finance',
    jobsAvailable: 7,
    icon: '💼',
    description: 'Finance and accounting opportunities',
  },
  {
    name: 'Management',
    jobsAvailable: 4,
    icon: '📋',
    description: 'Management and leadership roles',
  },
  {
    name: 'Marketing',
    jobsAvailable: 5,
    icon: '📢',
    description: 'Digital marketing and advertising roles',
  },
];

const CategorySection = () => {
  const handleViewButton=()=>{
    prompt('dabane ka shok chdha hai ?')
    let enterprompt='yes '
    if(prompt==='enterprompt' || 'enterAlert'){
      window.confirm("are you searching for the job?")
    }else{
      alert('You have not entered the prompt')
    }

  }
  return (
    <section className={styles.categorySection}>
      <h2 className={styles.sectionTitle}>Browse by Category</h2>
      <p className={styles.sectionSubtitle}>
        Find the job that’s perfect for you. About 800+ new jobs every day.
      </p>
      <div className={styles.categoryList}>
        {categories.map((category, index) => (
          <div key={index} className={styles.categoryCard}>
            <div className={styles.categoryIcon}>{category.icon}</div>
            <h3 className={styles.categoryName}>{category.name}</h3>
            <p className={styles.categoryDescription}>{category.description}</p>
            <p className={styles.jobsAvailable}>{category.jobsAvailable} jobs available</p>
            <button className={styles.viewJobsButton} onClick={handleViewButton}>View Jobs</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;

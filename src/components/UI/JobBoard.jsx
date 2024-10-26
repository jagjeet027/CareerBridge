import React, { useState } from 'react';
import { 
  User, 
  Briefcase, 
  MapPin, 
  Globe, 
  CheckCircle, 
  Send,
  Clock,
  Building2,
  Coffee,
  Star,
  Heart,
  Target
} from 'lucide-react';
import styles from './JobBoard.module.css';

const JobBoard = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    domain: '',
    workType: '',
    location: '',
    experience: '',
    company: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const isFormFilled = Object.values(formData).every(value => value !== '');

  const benefits = [
    { icon: <Star size={18} />, text: "Competitive Salary" },
    { icon: <Target size={18} />, text: "Career Growth" },
    { icon: <Heart size={18} />, text: "Health Benefits" },
    { icon: <Coffee size={18} />, text: "Work-Life Balance" }
  ];

  const formSection = (
    <div className={styles.cardContainer}>
      <div className={styles.gridLayout}>
        {/* Left Section */}
        <div className={styles.sidebar}>
          <div className={styles.sidebarContent}>
            <div className={styles.logoSection}>
              <Briefcase size={32} className={styles.logoIcon} />
              <h1 className={styles.logoTitle}>CareerBridge</h1>
            </div>
            
            <div>
              <h2 className={styles.benefitsTitle}>Join Our Team</h2>
              <p className={styles.benefitsText}>
                Take the next step in your career journey with us. We're looking for passionate 
                individuals to join our growing team.
              </p>
              
              <div className={styles.benefitsSection}>
                <h3 className={styles.benefitsTitle}>What We Offer</h3>
                <ul className={styles.benefitsList}>
                  {benefits.map((benefit, index) => (
                    <li key={index} className={styles.benefitItem}>
                      {benefit.icon}
                      {benefit.text}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.formSection}>
          <h2 className={styles.formTitle}>Application Form</h2>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGrid}>
              {/* Full Name */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>Full Name</label>
                <div className={styles.inputWrapper}>
                  <User size={18} className={styles.icon} />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              {/* Company */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>Current Company</label>
                <div className={styles.inputWrapper}>
                  <Building2 size={18} className={styles.icon} />
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="Current Company"
                    required
                  />
                </div>
              </div>

              {/* Domain */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>Domain</label>
                <div className={styles.inputWrapper}>
                  <Globe size={18} className={styles.icon} />
                  <input
                    type="text"
                    name="domain"
                    value={formData.domain}
                    onChange={handleInputChange}
                    className={styles.input}
                    placeholder="e.g. Web Development"
                    required
                  />
                </div>
              </div>

              {/* Experience */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>Experience</label>
                <div className={styles.inputWrapper}>
                  <Clock size={18} className={styles.icon} />
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className={styles.select}
                    required
                  >
                    <option value="">Select Experience</option>
                    <option value="fresher">Fresher</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
              </div>

              {/* Work Type */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>Work Type</label>
                <div className={styles.inputWrapper}>
                  <Briefcase size={18} className={styles.icon} />
                  <select
                    name="workType"
                    value={formData.workType}
                    onChange={handleInputChange}
                    className={styles.select}
                    required
                  >
                    <option value="">Select Work Type</option>
                    <option value="full-time">Full Time</option>
                    <option value="part-time">Part Time</option>
                    <option value="remote">Remote</option>
                    <option value="hybrid">Hybrid</option>
                  </select>
                </div>
              </div>

              {/* Location */}
              <div className={styles.inputGroup}>
                <label className={styles.label}>Location</label>
                <div className={styles.inputWrapper}>
                  <MapPin size={18} className={styles.icon} />
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className={styles.select}
                    required
                  >
                    <option value="">Select Location</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Chennai">Chennai</option>
                    <option value="Pune">Pune</option>
                  </select>
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={!isFormFilled}
              className={styles.submitButton}
            >
              <Send size={18} />
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  const successSection = (
    <div className={styles.successContainer}>
      <div className={styles.successIcon}>
        <CheckCircle size={80} />
      </div>
      <h2 className={styles.successTitle}>
        Application Submitted Successfully!
      </h2>
      <div>
        <p className={styles.successMessage}>
          Thank you for your interest in joining our team. We appreciate the time 
          you've taken to apply for this position.
        </p>
        <p className={styles.successMessage}>
          Our hiring team will carefully review your application and get back to 
          you within 3-5 business days with the next steps.
        </p>
      </div>
      <h3 className={styles.thankYou}>
        Thank You!
      </h3>
    </div>
  );

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        {!isSubmitted ? formSection : successSection}
      </div>
    </div>
  );
};

export default JobBoard;
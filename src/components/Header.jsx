import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState(''); // Add state for profile picture

  useEffect(() => {
    const user = localStorage.getItem('user');
    const picture = localStorage.getItem('profilePicture'); // Retrieve profile picture from local storage
    if (user) {
      setIsAuthenticated(true);
      setUsername(user);
      if (picture) {
        setProfilePicture(picture); // Set profile picture if available
      }
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('profilePicture'); // Remove profile picture from local storage
    setIsAuthenticated(false);
    setUsername('');
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/" className={styles.logoLink}>CareerBridge</Link>
      </div>

      <nav className={styles.nav}>
        <Link to="/" className={styles.navLink}>Home</Link>
        <Link to="/HiringBanner" className={styles.navLink}>Find a Job</Link>
        <Link to="/recruits" className={styles.navLink}>Recruits</Link>
        <Link to="/candidates" className={styles.navLink}>About</Link>
        <Link to="/blogs" className={styles.navLink}>FAQ</Link>
        <Link to="/pages" className={styles.navLink}>Pages</Link>
      </nav>

      <div className={styles.authButtons}>
        {isAuthenticated ? (
          <div className={styles.userInfo}>
            {profilePicture ? (
              <img src={profilePicture} alt="Profile" className={styles.profilePicture} />
            ) : (
              <span className={styles.profilePlaceholder}>Welcome, {username}</span>
            )}
            <button onClick={handleSignOut} className={styles.signOutBtn}>Sign Out</button>
          </div>
        ) : (
          <>
            <Link to="/register" className={styles.registerBtn}>Register</Link>
            <Link to="/signIn" className={styles.signInBtn}>Sign In</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;

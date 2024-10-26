import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaUser, FaLock, FaGoogle, FaGithub} from 'react-icons/fa';
import styles from './SignIn.module.css';
import sideImage from './images/jobIdea1.jpg';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Please accept the terms and conditions');
      return;
    }
    const user = { email, password };

    try {
      const response = await fetch('http://localhost:5000/api/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('user', data.name);
        navigate('/');
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      console.error('Error during sign in:', error);
      alert('An error occurred. Please try again.');
    }
  };

  const handleGoogleSignIn = () => {
    window.open('http://localhost:5000/auth/google', '_self');
  };
  
  // Add the handleGithubSignIn function with your GitHub auth endpoint
const handleGithubSignIn = () => {
  window.open('http://localhost:5000/auth/github', '_self');
};
  
  

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBox}>
        <div className={styles.iconContainer}>
          <FaUserShield className={styles.adminIcon} />
        </div>
        <h2 className={styles.heading}>Welcome Back!</h2>
        <form onSubmit={handleSignIn} className={styles.form}>
          <div className={styles.inputWrapper}>
            <FaUser className={styles.icon} />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={styles.inputField}
              required
            />
          </div>
          <div className={styles.inputWrapper}>
            <FaLock className={styles.icon} />
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
              required
            />
          </div>
          <div className={styles.termsWrapper}>
            <input  
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => setTermsAccepted(e.target.checked)}
              className={styles.checkbox}
            />
            <label htmlFor="terms" className={styles.termsLabel}>
              I agree to the <a href="/terms" className={styles.link}>Terms and Conditions</a>
            </label>
          </div>
          <button type="submit" className={styles.submitButton}>Login</button>
        </form>
        <div className={styles.divider}>
          <span>OR</span>
        </div>
        <div className={styles.socialSignIn}>
          <button onClick={handleGoogleSignIn} className={styles.socialButton}>
            <FaGoogle className={styles.socialIcon} />
            Sign in with Google
          </button>
          <button onClick={handleGithubSignIn} className={styles.socialButton}>
            <FaGithub className={styles.socialIcon} />Sign in with GitHub</button>
        </div>
        <p className={styles.linkText}>
          Don't have an account? <a href="/register" className={styles.link}>Register here</a>
        </p>
      </div>
      <div className={styles.sideImageContainer}>
        <img src={sideImage} alt="Login side background" className={styles.sideImage} />
      </div>
    </div>
  );
};

export default SignIn;
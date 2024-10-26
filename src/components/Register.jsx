import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserShield, FaUser, FaEnvelope, FaLock, FaUserCircle } from 'react-icons/fa';
import styles from './Register.module.css';
import jobIdea from './images/jobIdea.jpg';

const InputField = ({ type, placeholder, value, onChange, icon: Icon }) => (
  <div className={styles.inputWrapper}>
    <Icon className={styles.inputIcon} />
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={styles.input}
      required
    />
  </div>
);

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [profilePicture, setProfilePicture] = useState(null); // For profile picture
  const [errorMessage, setErrorMessage] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);

  // Load profile picture from localStorage when the component mounts
  useEffect(() => {
    const storedProfilePicture = localStorage.getItem('profilePicture');
    if (storedProfilePicture) {
      setProfilePicture(storedProfilePicture); // Set profile picture from localStorage
    }
  }, []);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageData = reader.result;
        setProfilePicture(imageData); // Set profile picture in state
        localStorage.setItem('profilePicture', imageData); // Store profile picture in localStorage
      };
      reader.readAsDataURL(file);
    }
  };

  // Reset profile picture on click and remove from localStorage
  const handleProfileIconClick = () => {
    setProfilePicture(null); // Clear the profile picture in the state
    localStorage.removeItem('profilePicture'); // Remove profile picture from localStorage
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMessage('');
  
    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match');
      return;
    }
  
    const userData = {
      email,
      password,
      name,
      username,
    };
  
    if (profilePicture) {
      userData.profilePicture = profilePicture;
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Send JSON if no files are involved
        },
        body: JSON.stringify(userData),
        credentials: 'include',
      });
  
      if (response.ok) {
        localStorage.setItem('user', name);
        setIsRegistered(true);
        setTimeout(() => navigate('/'), 2000);
      } else {
        const data = await response.json();
        setErrorMessage(data.message || 'Registration failed');
      }
    } catch (error) {
      setErrorMessage('Network error: Unable to register. Please try again later.');
      console.error('Error during registration:', error);
    }
  };
  

  return (
    <div className={styles.container}>
      <div className={styles.leftContainer}>
        <h1>Create your Account</h1>
        <p>Share your skills here and get jobs!</p>
        <img src={jobIdea} alt="Background" className={styles.backgroundImage} />
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.iconContainer} onClick={handleProfileIconClick}>
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="Profile"
              className={styles.profilePreview}
            />
          ) : (
            <FaUserShield className={styles.adminIcon} />
          )}
        </div>
        <div className={styles.inputWrapper}>
          <label>Profile Picture</label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleProfilePictureChange}
            className={styles.input}
            style={{ display: 'none' }} // Hide the input field
          />
        </div>
        {errorMessage && <p className={styles.error}>{errorMessage}</p>}
        <form onSubmit={handleRegister}>
          <InputField
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            icon={FaUser}
          />
          <InputField
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={FaEnvelope}
          />
          <InputField
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            icon={FaUserCircle}
          />
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            icon={FaLock}
          />
          <InputField
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            icon={FaLock}
          />
          {isRegistered ? (
            <div className={styles.welcomeMessage}>Welcome, {name}!</div>
          ) : (
            <button type="submit" className={styles.submitButton}>
              Join us
            </button>
          )}
        </form>
        <p>
          Already have an account? <a href="/signin" className={styles.link}>Sign in here</a>
          </p>
        </div>
      </div>
    );
  };

export default Register;

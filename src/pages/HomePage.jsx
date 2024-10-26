import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import HeroSection from '../components/HeroSection';
import CategorySection from '../components/CategorySection';
import HiringBanner from '../components/HiringBanner';
import WorkOfTheDay from '../components/WorkOfTheDay';
import EngageSection from '../components/EngageSection';
import TopRecruiters from '../components/TopRecruiters';
import SubscribeSection from '../components/SubscribeSection';
import Footer from '../components/Footer';
import Header from '../components/Header';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleGetStartedClick = () => {
    navigate('/jobboard'); // Navigate to JobBoard when Get Started is clicked
  };

  return (
    <>
      <Header />
      <HeroSection onGetStartedClick={handleGetStartedClick} /> {/* Pass the handler */}
      <CategorySection />
      <HiringBanner />
      <WorkOfTheDay />
      <EngageSection />
      <TopRecruiters />
      <SubscribeSection />
      <Footer />
    </>
  );
};

export default HomePage;

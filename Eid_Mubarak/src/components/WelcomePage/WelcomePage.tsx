import React from 'react';
import './WelcomePage.css';
import Lanterns from '../Lanterns/Lanterns';
import Fireworks from '../Fireworks/Fireworks';

interface WelcomePageProps {
  onNext: () => void;
  onStartAudio: () => void;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ onNext, onStartAudio }) => {
  const startJourney = () => {
    console.log('Starting the Eid Journey...');
    // Attempt to start audio on user interaction - critical for mobile
    onStartAudio();
    
    // Small delay for the button animation before transitioning
    setTimeout(() => {
      onNext();
    }, 300);
  };

  return (
    <div className="welcome-container">
      {/* Background with Gradient */}
      <div className="background-gradient"></div>

      {/* Animated Lanterns */}
      <Lanterns />

      {/* Animated Fireworks */}
      <Fireworks />

      {/* Content */}
      <div className="welcome-content">
        <h1 className="eid-mubarak-text">Eid Mubarak!</h1>
        <p className="welcome-subtext">May your day be filled with joy and blessings.</p>
        
        <button className="start-button" onClick={startJourney}>
          Start the Eid Journey
        </button>
      </div>
    </div>
  );
};

export default WelcomePage;

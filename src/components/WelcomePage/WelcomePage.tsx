import React, { useState, useRef, useEffect } from 'react';
import './WelcomePage.css';
import Lanterns from '../Lanterns/Lanterns';
import Fireworks from '../Fireworks/Fireworks';

const WelcomePage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const startJourney = () => {
    // Logic for transitioning to the next page can be added here
    console.log('Starting the Eid Journey...');
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().catch(error => {
        console.error("Audio playback failed:", error);
      });
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    // Optional: Auto-play logic with error handling for browser restrictions
    // Most browsers require user interaction before playing audio
  }, []);

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

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Placeholder link
      />
    </div>
  );
};

export default WelcomePage;

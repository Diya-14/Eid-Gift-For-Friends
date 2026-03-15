import React, { useRef, useState } from 'react';
import './CelebrationPage.css';
import StarsBackground from '../Background/StarsBackground';
import Confetti from './Confetti';

interface CelebrationPageProps {
  onNext: () => void;
}

const CelebrationPage: React.FC<CelebrationPageProps> = ({ onNext }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.error("Audio play failed", e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="celebration-container">
      <StarsBackground />
      <Confetti />
      
      <div className="celebration-content">
        <h1 className="main-greeting">Eid Mubarak,</h1>
        <h1 className="sub-greeting">Dear Friend!</h1>
        
        <p className="celebration-message">
          May your life be as colorful as the confetti and as bright as the stars.
        </p>

        <div className="action-buttons">
          <button className={`music-button ${isPlaying ? 'playing' : ''}`} onClick={toggleMusic}>
            {isPlaying ? '🎵 Playing Joyful Music' : '🔈 Play Eid Music'}
          </button>
          
          <button className="next-button highlight" onClick={onNext}>
            Next Surprise
          </button>
        </div>
      </div>

      <audio 
        ref={audioRef}
        loop
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" // Placeholder joyful track
      />
    </div>
  );
};

export default CelebrationPage;

import React, { useState } from 'react';
import './GiftPage.css';
import StarsBackground from '../Background/StarsBackground';
import Fireworks from '../Fireworks/Fireworks';
import GiftBox from './GiftBox';

const GiftPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFinish = () => {
    // Logic to reset or end the journey
    window.location.reload();
  };

  return (
    <div className="gift-page-container">
      <StarsBackground />
      {isOpen && <Fireworks />}
      
      <div className="gift-page-content">
        <h1 className="gift-title">The Final Surprise!</h1>
        <p className="gift-subtitle">
          {isOpen ? "Mubarak! Here is your Virtual Eidi ✨" : "Click the gift box below to receive your surprise..."}
        </p>

        {/* Revealed Content (Visible ONLY when isOpen) */}
        <div className={`revealed-reward ${isOpen ? 'show' : ''}`}>
          <div className="eidi-icon">💰</div>
          <h2 className="reward-text">Special Eidi For You!</h2>
          <p className="reward-subtext">May your life be filled with prosperity and endless joy.</p>
        </div>

        <div className="box-container">
          <GiftBox isOpen={isOpen} onClick={() => setIsOpen(true)} />
        </div>

        {isOpen && (
          <div className="final-actions">
            <h3 className="final-wish-text">Mubarak to you and your family!</h3>
            <button className="finish-btn highlight" onClick={handleFinish}>
              Finish the Eid Journey
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftPage;

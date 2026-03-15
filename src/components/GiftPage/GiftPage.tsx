import React, { useState } from 'react';
import './GiftPage.css';
import StarsBackground from '../Background/StarsBackground';
import Fireworks from '../Fireworks/Fireworks';
import GiftBox from './GiftBox';
import GoldRain from './GoldRain';

const GiftPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFinish = () => {
    window.location.reload();
  };

  return (
    <div className={`gift-page-container ${isOpen ? 'finale-active' : ''}`}>
      <StarsBackground />
      {isOpen && (
        <>
          <Fireworks />
          <GoldRain />
          <div className="festive-banner">Eid Mubarak</div>
        </>
      )}
      
      <div className="gift-page-content">
        <h1 className="gift-title">The Ultimate Surprise!</h1>
        
        <div className={`grand-reveal ${isOpen ? 'show' : ''}`}>
          <div className="reveal-icons">
            <span className="big-icon">🕌</span>
            <span className="big-icon featured">💰</span>
            <span className="big-icon">🌙</span>
          </div>
          <h2 className="grand-wish-title">Mubarak! You've Unlocked Your Eidi</h2>
          <p className="grand-wish-text">
            May your path be always illuminated with gold, your heart with peace, 
            and your life with infinite happiness.
          </p>
        </div>

        {!isOpen && (
          <p className="instruction-text">Tap the Royal Gift to begin the celebration...</p>
        )}

        <div className="box-container">
          <GiftBox isOpen={isOpen} onClick={() => setIsOpen(true)} />
        </div>

        {isOpen && (
          <div className="finale-actions">
            <h3 className="sub-wish">Wishing you a blessed and joyful Eid with your loved ones!</h3>
            <button className="finish-btn trophy" onClick={handleFinish}>
              Celebrate Again ✨
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftPage;

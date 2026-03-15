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
        <h1 className="gift-title">Your Eid Surprise!</h1>
        <p className="gift-subtitle">
          {isOpen ? "Mubarak! You found your Virtual Eidi! ✨" : "Click the gift box to open your surprise..."}
        </p>

        <div className="box-container">
          <GiftBox isOpen={isOpen} onClick={() => setIsOpen(true)} />
        </div>

        {isOpen && (
          <div className="final-actions">
            <h2 className="final-wish">May this Eid bring you endless joy and prosperity!</h2>
            <button className="finish-button" onClick={handleFinish}>
              Finish the Eid Journey
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftPage;

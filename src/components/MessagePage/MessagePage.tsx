import React, { useState } from 'react';
import './MessagePage.css';
import StarsBackground from '../Background/StarsBackground';

interface MessagePageProps {
  onNext: () => void;
}

const MessagePage: React.FC<MessagePageProps> = ({ onNext }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="message-container">
      <StarsBackground />
      
      <div className="message-content">
        <h2 className="message-title">A Special Surprise for You</h2>
        
        <div className={`eid-card ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="card-front">
            <div className="card-decoration top">🌙</div>
            <h3>To My Dear Friend</h3>
            <p>Click to Open Your Gift</p>
            <div className="card-decoration bottom">✨</div>
          </div>
          
          <div className="card-inside">
            <div className="inside-decoration">🕌</div>
            <h3>Eid Mubarak!</h3>
            <p className="personal-message">
              "On this blessed occasion, I want to thank you for being such a wonderful part of my life. 
              May your journey be filled with success, your heart with peace, and your home with happiness."
            </p>
            <p className="signature">With Love & Prayers</p>
            <div className="card-decoration bottom">💐</div>
          </div>
        </div>

        {isOpen && (
          <div className="final-celebration">
            <p>May Allah accept our prayers and deeds. Happy Eid!</p>
            <button className="restart-button highlight" onClick={onNext}>
              Final Surprise ✨
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MessagePage;

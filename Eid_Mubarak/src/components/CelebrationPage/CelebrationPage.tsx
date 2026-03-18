import React from 'react';
import './CelebrationPage.css';
import StarsBackground from '../Background/StarsBackground';
import Confetti from './Confetti';

const CelebrationPage: React.FC = () => {
  const handleShare = async () => {
    const shareData = {
      title: 'A Special Eid Gift For You 🎁',
      text: 'Open this to reveal your special Eid Mubarak surprise! ✨',
      url: window.location.origin,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log('Shared successfully');
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback: Copy to clipboard if Web Share API is not available
      try {
        await navigator.clipboard.writeText(window.location.origin);
        alert('Gift link copied to clipboard! Share it with your friends. 🎁');
      } catch (err) {
        console.log('Failed to copy link:', err);
      }
    }
  };

  return (
    <div className="celebration-container">
      <StarsBackground />
      <Confetti />
      
      <div className="celebration-content">
        <div className="greeting-group">
          <h1 className="main-greeting">Eid Mubarak,</h1>
          <h1 className="sub-greeting">Dear Friend!</h1>
        </div>
        
        <div className="mascot-wrapper">
          <div className="simple-speech-bubble">
            <p>May your life be as colorful as the confetti and as bright as the stars. ✨</p>
          </div>
          
          <div className="simple-emoji-character">
            <svg viewBox="0 0 120 120" width="160" height="160">
              {/* Simple Yellow Face */}
              <circle cx="60" cy="60" r="45" fill="#FFD700" stroke="#DAA520" strokeWidth="2" />
              
              {/* Happy Eyes */}
              <circle cx="45" cy="50" r="5" fill="#2d3436" />
              <circle cx="75" cy="50" r="5" fill="#2d3436" />
              
              {/* Big Smile */}
              <path d="M40 70 Q60 90 80 70" fill="none" stroke="#2d3436" strokeWidth="4" strokeLinecap="round" />
              
              {/* Waving Hands (Simple Style) */}
              <g className="hand-left">
                <circle cx="15" cy="80" r="12" fill="#fff" stroke="#DAA520" strokeWidth="2" />
              </g>
              
              <g className="hand-right">
                <circle cx="105" cy="80" r="12" fill="#fff" stroke="#DAA520" strokeWidth="2" />
              </g>
            </svg>
          </div>
        </div>

        <button className="share-button" onClick={handleShare}>
          Share the Joy 🎁
        </button>
      </div>
    </div>
  );
};

export default CelebrationPage;

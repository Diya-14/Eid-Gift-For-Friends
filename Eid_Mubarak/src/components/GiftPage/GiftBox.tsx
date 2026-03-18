import React from 'react';
import './GiftBox.css';

interface GiftBoxProps {
  isOpen: boolean;
  onClick: () => void;
}

const GiftBox: React.FC<GiftBoxProps> = ({ isOpen, onClick }) => {
  return (
    <div className={`svg-gift-container ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <svg width="200" height="200" viewBox="0 0 200 200" className="gift-svg">
        {/* Box Body */}
        <rect x="40" y="80" width="120" height="100" fill="#ff4500" stroke="#ffd700" strokeWidth="3" rx="5" />
        <rect x="90" y="80" width="20" height="100" fill="#ffd700" /> {/* Vertical Ribbon */}
        
        {/* Box Lid */}
        <g className="gift-lid">
          <rect x="30" y="60" width="140" height="30" fill="#ff4500" stroke="#ffd700" strokeWidth="3" rx="3" />
          <rect x="90" y="60" width="20" height="30" fill="#ffd700" /> {/* Ribbon on Lid */}
          
          {/* Bow (Simple SVG Path) */}
          <path d="M70 60 C 70 30, 90 30, 100 60 C 110 30, 130 30, 130 60" fill="none" stroke="#ffd700" strokeWidth="5" strokeLinecap="round" />
        </g>
      </svg>
      
      {/* Sparkles (Always around the box) */}
      <div className="sparkle s1">✨</div>
      <div className="sparkle s2">✨</div>
      <div className="sparkle s3">✨</div>
    </div>
  );
};

export default GiftBox;

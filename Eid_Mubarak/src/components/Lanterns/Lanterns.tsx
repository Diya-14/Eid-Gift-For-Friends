import React from 'react';
import './Lanterns.css';

const Lanterns: React.FC = () => {
  return (
    <div className="lanterns-container">
      {/* Left Lanterns */}
      <div className="lantern lantern-1">
        <svg width="100" height="150" viewBox="0 0 100 150">
          <path d="M50 0 L50 30" stroke="#ffd700" strokeWidth="2" />
          <path d="M20 30 L80 30 L90 80 L50 110 L10 80 Z" fill="#b22222" stroke="#ffd700" strokeWidth="2" />
          <circle cx="50" cy="70" r="15" fill="#ffd700" className="lantern-light" />
        </svg>
      </div>
      
      <div className="lantern lantern-2">
        <svg width="80" height="120" viewBox="0 0 100 150">
          <path d="M50 0 L50 30" stroke="#ffd700" strokeWidth="2" />
          <path d="M30 30 L70 30 L80 80 L50 110 L20 80 Z" fill="#ffd700" stroke="#DAA520" strokeWidth="2" opacity="0.8"/>
          <circle cx="50" cy="70" r="12" fill="#fff" className="lantern-light" />
        </svg>
      </div>

      {/* Right Lanterns */}
      <div className="lantern lantern-3">
        <svg width="100" height="150" viewBox="0 0 100 150">
          <path d="M50 0 L50 30" stroke="#ffd700" strokeWidth="2" />
          <path d="M20 30 L80 30 L90 80 L50 110 L10 80 Z" fill="#228B22" stroke="#ffd700" strokeWidth="2" />
          <circle cx="50" cy="70" r="15" fill="#ffd700" className="lantern-light" />
        </svg>
      </div>

      <div className="lantern lantern-4">
        <svg width="80" height="120" viewBox="0 0 100 150">
          <path d="M50 0 L50 30" stroke="#ffd700" strokeWidth="2" />
          <path d="M30 30 L70 30 L80 80 L50 110 L20 80 Z" fill="#ffd700" stroke="#DAA520" strokeWidth="2" opacity="0.8" />
          <circle cx="50" cy="70" r="12" fill="#fff" className="lantern-light" />
        </svg>
      </div>
    </div>
  );
};

export default Lanterns;

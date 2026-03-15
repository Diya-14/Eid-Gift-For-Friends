import React from 'react';
import './GamePage.css';

interface LanternProps {
  isLit: boolean;
  onClick: () => void;
  delay?: string;
}

const Lantern: React.FC<LanternProps> = ({ isLit, onClick, delay = '0s' }) => {
  return (
    <div 
      className={`elegant-lantern ${isLit ? 'lit' : ''}`} 
      onClick={onClick}
      style={{ animationDelay: delay }}
    >
      <svg width="120" height="180" viewBox="0 0 100 150">
        {/* Hanging Rope */}
        <line x1="50" y1="0" x2="50" y2="20" stroke="#DAA520" strokeWidth="2" />
        
        {/* Top Cap */}
        <path d="M30 20 L70 20 L80 40 L20 40 Z" fill="#8B4513" stroke="#DAA520" strokeWidth="1" />
        
        {/* Main Body */}
        <rect x="25" y="40" width="50" height="70" rx="5" fill="#5D2E0A" stroke="#DAA520" strokeWidth="2" />
        
        {/* Window/Glow Area */}
        <rect x="35" y="50" width="30" height="50" rx="3" className="lantern-window" />
        
        {/* Decorative Lines */}
        <line x1="35" y1="65" x2="65" y2="65" stroke="#DAA520" strokeWidth="1" opacity="0.3" />
        <line x1="35" y1="85" x2="65" y2="85" stroke="#DAA520" strokeWidth="1" opacity="0.3" />
        <line x1="50" y1="50" x2="50" y2="100" stroke="#DAA520" strokeWidth="1" opacity="0.3" />
        
        {/* Bottom Cap */}
        <path d="M25 110 L75 110 L85 125 L15 125 Z" fill="#8B4513" stroke="#DAA520" strokeWidth="1" />
        
        {/* The Glow (Inner Light) */}
        {isLit && (
          <circle cx="50" cy="75" r="25" className="inner-glow" />
        )}
      </svg>
    </div>
  );
};

export default Lantern;

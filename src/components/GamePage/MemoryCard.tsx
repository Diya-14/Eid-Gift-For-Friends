import React from 'react';
import './MemoryCard.css';

interface MemoryCardProps {
  card: { id: number; symbol: string; matched: boolean };
  flipped: boolean;
  onClick: (card: { id: number; symbol: string; matched: boolean }) => void;
  disabled: boolean;
}

const MemoryCard: React.FC<MemoryCardProps> = ({ card, flipped, onClick, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      onClick(card);
    }
  };

  return (
    <div className={`memory-card ${flipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="card-inner">
        <div className="card-front">
          <span className="card-symbol">{card.symbol}</span>
        </div>
        <div className="card-back">
          <span className="card-logo">🌙</span>
        </div>
      </div>
    </div>
  );
};

export default MemoryCard;

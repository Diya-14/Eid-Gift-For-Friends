import React, { useMemo } from 'react';
import './GoldRain.css';

const GoldRain: React.FC = () => {
  const particles = useMemo(() => {
    const symbols = ['💰', '✨', '💎', '⭐', '🟡'];
    return Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      delay: `${Math.random() * 3}s`,
      duration: `${Math.random() * 2 + 2}s`,
      size: `${Math.random() * 1.5 + 1}rem`,
    }));
  }, []);

  return (
    <div className="gold-rain-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="gold-particle"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            fontSize: p.size,
          }}
        >
          {p.symbol}
        </div>
      ))}
    </div>
  );
};

export default GoldRain;

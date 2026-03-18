import React, { useMemo } from 'react';
import './Confetti.css';

const Confetti: React.FC = () => {
  const pieces = useMemo(() => {
    const colors = ['#ffd700', '#ff00ff', '#00ffff', '#ff4500', '#adff2f', '#ffffff'];
    return Array.from({ length: 80 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 3 + 4}s`,
      size: `${Math.random() * 10 + 5}px`,
      rotation: `${Math.random() * 360}deg`,
    }));
  }, []);

  return (
    <div className="confetti-container">
      {pieces.map((p) => (
        <div
          key={p.id}
          className="confetti-piece"
          style={{
            left: p.left,
            backgroundColor: p.color,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
            transform: `rotate(${p.rotation})`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Confetti;

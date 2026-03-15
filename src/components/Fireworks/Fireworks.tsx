import React, { useEffect, useState } from 'react';
import './Fireworks.css';

const Fireworks: React.FC = () => {
  const [particles, setParticles] = useState<{ id: number; top: string; left: string; color: string; delay: string }[]>([]);

  useEffect(() => {
    const colors = ['#ffd700', '#ff00ff', '#00ffff', '#ff4500', '#adff2f'];
    const newParticles = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 80 + 10}%`,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: `${Math.random() * 5}s`
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fireworks-container">
      {particles.map((p) => (
        <div
          key={p.id}
          className="firework"
          style={{
            top: p.top,
            left: p.left,
            color: p.color,
            animationDelay: p.delay
          }}
        >
          <div className="explosion"></div>
        </div>
      ))}
    </div>
  );
};

export default Fireworks;

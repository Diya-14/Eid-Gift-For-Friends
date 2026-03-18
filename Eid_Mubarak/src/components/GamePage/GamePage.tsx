import React, { useState } from 'react';
import './GamePage.css';
import StarsBackground from '../Background/StarsBackground';
import Lantern from './Lantern';

interface GamePageProps {
  onNext: () => void;
}

const GamePage: React.FC<GamePageProps> = ({ onNext }) => {
  const [litLanterns, setLitLanterns] = useState<boolean[]>(new Array(5).fill(false));

  const handleLightUp = (index: number) => {
    const newLit = [...litLanterns];
    newLit[index] = true;
    setLitLanterns(newLit);
  };

  const isComplete = litLanterns.every((l) => l === true);

  return (
    <div className={`lantern-ceremony-container ${isComplete ? 'all-lit' : ''}`}>
      <StarsBackground />

      <div className="ceremony-content">
        <h2 className="ceremony-title">Lantern Lighting Ceremony</h2>
        <p className="ceremony-instruction">
          {isComplete 
            ? "Mubarak! The night is bright with your blessings." 
            : "Ignite the lanterns to brighten the festive night..."}
        </p>

        <div className="lanterns-display">
          {litLanterns.map((isLit, index) => (
            <Lantern
              key={index}
              isLit={isLit}
              onClick={() => handleLightUp(index)}
              delay={`${index * 0.2}s`}
            />
          ))}
        </div>

        {isComplete && (
          <div className="ceremony-victory">
            <h3 className="victory-text">A Radiant Eid Awaits!</h3>
            <button className="next-button elegant" onClick={onNext}>
              Next Surprise
            </button>
          </div>
        )}
      </div>

      {/* Decorative Crescent Moon */}
      <div className="decorative-moon">🌙</div>
    </div>
  );
};

export default GamePage;

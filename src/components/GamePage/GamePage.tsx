import React, { useState, useEffect, useRef, useCallback } from 'react';
import './GamePage.css';
import StarsBackground from '../Background/StarsBackground';

interface GameItem {
  id: number;
  x: number;
  y: number;
  symbol: string;
  speed: number;
}

interface GamePageProps {
  onNext: () => void;
}

const symbols = ['🌙', '🏮', '🎁', '🍬', '✨', '🕌'];
const GAME_HEIGHT = 500;
const TRAY_WIDTH = 120;
const TRAY_HEIGHT = 60;
const ITEM_SIZE = 40;
const WIN_SCORE = 100;

const GamePage: React.FC<GamePageProps> = ({ onNext }) => {
  const [score, setScore] = useState(0);
  const [items, setItems] = useState<GameItem[]>([]);
  const [basketX, setBasketX] = useState(50); // percentage
  const [isWon, setIsWon] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const lastTimeRef = useRef<number>();

  const spawnItem = useCallback(() => {
    const newItem: GameItem = {
      id: Date.now() + Math.random(),
      x: Math.random() * 90 + 5, // 5% to 95%
      y: -50,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      speed: Math.random() * 2 + 2,
    };
    setItems((prev) => [...prev, newItem]);
  }, []);

  const updateItems = useCallback((time: number) => {
    if (lastTimeRef.current !== undefined) {
      setItems((prev) => {
        const nextItems = prev.map((item) => ({
          ...item,
          y: item.y + item.speed,
        }));

        // Collision detection and cleanup
        const filteredItems = nextItems.filter((item) => {
          // Check collision with tray
          const trayY = GAME_HEIGHT - TRAY_HEIGHT;
          const itemInTrayY = item.y + ITEM_SIZE >= trayY && item.y <= GAME_HEIGHT;
          
          const trayXStart = basketX - (TRAY_WIDTH / (gameAreaRef.current?.clientWidth || 1) * 100) / 2;
          const trayXEnd = basketX + (TRAY_WIDTH / (gameAreaRef.current?.clientWidth || 1) * 100) / 2;
          const itemInTrayX = item.x >= trayXStart && item.x <= trayXEnd;

          if (itemInTrayY && itemInTrayX) {
            setScore((s) => s + 10);
            return false;
          }

          // Remove if off screen
          return item.y < GAME_HEIGHT + 50;
        });

        return filteredItems;
      });
    }
    lastTimeRef.current = time;
    if (!isWon) {
      requestRef.current = requestAnimationFrame(updateItems);
    }
  }, [basketX, isWon]);

  // Game loop
  useEffect(() => {
    requestRef.current = requestAnimationFrame(updateItems);
    const spawner = setInterval(spawnItem, 1500);

    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      clearInterval(spawner);
    };
  }, [updateItems, spawnItem]);

  // Check win condition
  useEffect(() => {
    if (score >= WIN_SCORE) {
      setIsWon(true);
    }
  }, [score]);

  // Controls
  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (gameAreaRef.current && !isWon) {
      const rect = gameAreaRef.current.getBoundingClientRect();
      const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
      const x = ((clientX - rect.left) / rect.width) * 100;
      setBasketX(Math.max(5, Math.min(95, x)));
    }
  };

  return (
    <div className="game-container">
      <StarsBackground />

      <div className="game-content">
        <h2 className="game-title">Eid Gift Catcher</h2>
        <p className="game-instruction">
          Catch {WIN_SCORE / 10} gifts on the golden tray to unlock the surprise!
        </p>

        <div className="score-board">
          Score: <span className="score-value">{score}</span> / {WIN_SCORE}
        </div>

        <div 
          className="game-area" 
          ref={gameAreaRef} 
          onMouseMove={handleMove}
          onTouchMove={handleMove}
          style={{ height: GAME_HEIGHT }}
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="falling-item"
              style={{
                left: `${item.x}%`,
                top: `${item.y}px`,
              }}
            >
              {item.symbol}
            </div>
          ))}

          <div 
            className="tray"
            style={{ 
              left: `${basketX}%`,
              width: TRAY_WIDTH,
              height: TRAY_HEIGHT,
              bottom: 0
            }}
          >
            <div className="tray-base"></div>
            <div className="tray-detail"></div>
          </div>
        </div>

        {isWon && (
          <div className="victory-overlay">
            <div className="victory-card">
              <h3>Mubarak! 🎊</h3>
              <p>You caught enough gifts for the celebration!</p>
              <button className="next-button highlight" onClick={onNext}>
                Next Surprise
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;

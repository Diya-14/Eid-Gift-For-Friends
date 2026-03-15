import React, { useState, useEffect, useCallback } from 'react';
import './GamePage.css';
import MemoryCard from './MemoryCard';
import StarsBackground from '../Background/StarsBackground';

const cardSymbols = ['🌙', '🕌', '🕯️', '🎁', '📅', '📿'];

interface Card {
  id: number;
  symbol: string;
  matched: boolean;
}

interface GamePageProps {
  onNext: () => void;
}

const GamePage: React.FC<GamePageProps> = ({ onNext }) => {
  const [cards, setCards] = useState<Card[]>([]);
  const [choiceOne, setChoiceOne] = useState<Card | null>(null);
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null);
  const [disabled, setDisabled] = useState(false);
  const [pairsFound, setPairsFound] = useState(0);

  // Shuffle cards
  const shuffleCards = useCallback(() => {
    const shuffled = [...cardSymbols, ...cardSymbols]
      .sort(() => Math.random() - 0.5)
      .map((symbol, index) => ({ id: index, symbol, matched: false }));

    setCards(shuffled);
    setChoiceOne(null);
    setChoiceTwo(null);
    setPairsFound(0);
    setDisabled(false);
  }, []);

  // Handle choice
  const handleChoice = (card: Card) => {
    if (card.id === choiceOne?.id || card.matched) return;
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare two cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.symbol === choiceTwo.symbol) {
        setCards((prev) =>
          prev.map((card) =>
            card.symbol === choiceOne.symbol ? { ...card, matched: true } : card
          )
        );
        setPairsFound((prev) => prev + 1);
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setDisabled(false);
  };

  // Initial shuffle
  useEffect(() => {
    shuffleCards();
  }, [shuffleCards]);

  const isGameWon = pairsFound === cardSymbols.length;

  return (
    <div className="game-container">
      <StarsBackground />

      <div className="game-content">
        <h2 className="game-title">Eid Memory Match</h2>
        <p className="game-instruction">Find all matching pairs to reveal a surprise!</p>

        <div className={`game-grid ${isGameWon ? 'won' : ''}`}>
          {cards.map((card) => (
            <MemoryCard
              key={card.id}
              card={card}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              onClick={handleChoice}
              disabled={disabled || isGameWon}
            />
          ))}
        </div>

        {isGameWon && (
          <div className="victory-message">
            <h3>Fantastic! Mubarak!</h3>
            <p>You've found all the matching Eid symbols.</p>
            <button className="next-button" onClick={onNext}>
              Next Surprise
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GamePage;

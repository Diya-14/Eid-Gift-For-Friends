import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage/WelcomePage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import GamePage from './components/GamePage/GamePage';
import CelebrationPage from './components/CelebrationPage/CelebrationPage';
import MessagePage from './components/MessagePage/MessagePage';

function App() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'gallery' | 'game' | 'celebration' | 'message'>('welcome');

  const goToGallery = () => {
    setCurrentPage('gallery');
  };

  const goToGame = () => {
    setCurrentPage('game');
  };

  const goToCelebration = () => {
    setCurrentPage('celebration');
  };

  const goToMessage = () => {
    setCurrentPage('message');
  };

  return (
    <div className="App">
      {currentPage === 'welcome' && <WelcomePage onNext={goToGallery} />}
      {currentPage === 'gallery' && <GalleryPage onNext={goToGame} />}
      {currentPage === 'game' && <GamePage onNext={goToCelebration} />}
      {currentPage === 'celebration' && <CelebrationPage onNext={goToMessage} />}
      {currentPage === 'message' && <MessagePage />}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage/WelcomePage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import MessagePage from './components/MessagePage/MessagePage';

function App() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'gallery' | 'message'>('welcome');

  const goToGallery = () => {
    setCurrentPage('gallery');
  };

  const goToMessage = () => {
    setCurrentPage('message');
  };

  return (
    <div className="App">
      {currentPage === 'welcome' && <WelcomePage onNext={goToGallery} />}
      {currentPage === 'gallery' && <GalleryPage onNext={goToMessage} />}
      {currentPage === 'message' && <MessagePage />}
    </div>
  );
}

export default App;

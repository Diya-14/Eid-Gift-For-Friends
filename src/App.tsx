import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage/WelcomePage';
import GalleryPage from './components/GalleryPage/GalleryPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'gallery'>('welcome');

  const goToGallery = () => {
    setCurrentPage('gallery');
  };

  const goToNextSurprise = () => {
    // Placeholder for future next surprise
    console.log("Navigating to next surprise...");
  };

  return (
    <div className="App">
      {currentPage === 'welcome' ? (
        <WelcomePage onNext={goToGallery} />
      ) : (
        <GalleryPage onNext={goToNextSurprise} />
      )}
    </div>
  );
}

export default App;

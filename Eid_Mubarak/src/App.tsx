import React, { useState, useRef, useEffect } from 'react';
import WelcomePage from './components/WelcomePage/WelcomePage';
import GalleryPage from './components/GalleryPage/GalleryPage';
import GamePage from './components/GamePage/GamePage';
import CelebrationPage from './components/CelebrationPage/CelebrationPage';
import MessagePage from './components/MessagePage/MessagePage';
import GiftPage from './components/GiftPage/GiftPage';

function App() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'gallery' | 'game' | 'celebration' | 'message' | 'gift'>('welcome');
  const [isAudioPlaying, setIsAudioPlaying] = useState(false); // State to track audio playback
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Define navigation functions for the new order
  const goToGame = () => {
    setCurrentPage('game');
  };

  const goToMessage = () => {
    setCurrentPage('message');
  };

  const goToGallery = () => {
    setCurrentPage('gallery');
  };

  const goToGift = () => {
    setCurrentPage('gift');
  };

  const goToCelebration = () => {
    setCurrentPage('celebration');
  };

  // Correct URL for the Eid Mubarak song now located in public/music/
  const eidMubarakSongUrl = "/music/kun_anta.mp3"; 

  // Function to attempt playing the audio
  const playAudio = React.useCallback(() => {
    const audio = audioRef.current;
    if (audio) {
      // If audio is already playing, do nothing
      if (!audio.paused && !audio.ended && audio.currentTime > 0) {
        setIsAudioPlaying(true);
        return;
      }

      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
          setIsAudioPlaying(true);
        })
        .catch(error => {
          console.error("Audio playback failed:", error);
          setIsAudioPlaying(false);
        });
      }
    }
  }, []);

  // Function to be called explicitly on user interaction (like button click)
  const handleStartAudio = () => {
    playAudio();
  };

  // Effect to listen for user interactions as a fallback
  useEffect(() => {
    const handleInteraction = () => {
      if (!isAudioPlaying) {
        playAudio();
      }
    };

    document.addEventListener('pointerdown', handleInteraction, { once: true, passive: true });
    document.addEventListener('touchstart', handleInteraction, { once: true, passive: true });

    return () => {
      document.removeEventListener('pointerdown', handleInteraction);
      document.removeEventListener('touchstart', handleInteraction);
    };
  }, [isAudioPlaying, playAudio]);

  return (
    <div className="App">
      {/* Persistent audio element for the entire application */}
      <audio
        ref={audioRef}
        loop
        src={eidMubarakSongUrl}
        playsInline // Important for mobile browsers
        style={{ display: 'none' }}
      />

      {currentPage === 'welcome' && <WelcomePage onNext={goToGame} onStartAudio={handleStartAudio} />}
      {currentPage === 'game' && <GamePage onNext={goToMessage} />}
      {currentPage === 'message' && <MessagePage onNext={goToGallery} />}
      {currentPage === 'gallery' && <GalleryPage onNext={goToGift} />}
      {currentPage === 'gift' && <GiftPage onNext={goToCelebration} />}
      {currentPage === 'celebration' && <CelebrationPage />} {/* This is the last page */}
    </div>
  );
}

export default App;



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
    // Only attempt to play if the audio element exists and is not already playing
    if (audio && !isAudioPlaying) {
      const playPromise = audio.play();

      if (playPromise !== undefined) {
        playPromise.then(_ => {
          // Audio has started playing
          setIsAudioPlaying(true);
        })
        .catch(error => {
          // Autoplay was prevented or failed.
          console.error("Global audio autoplay failed:", error);
          // Ensure the state reflects that audio is not playing
          setIsAudioPlaying(false);
        });
      }
    }
  }, [isAudioPlaying]);

  // Effect to attempt playing audio on initial mount
  useEffect(() => {
    playAudio();
  }, [playAudio]); // Run when playAudio changes (which depends on isAudioPlaying)

  // Effect to listen for user interactions and attempt to play audio if it failed initially
  useEffect(() => {
    const handleInteraction = () => {
      // If audio is not playing and user interacts, try to play it.
      // This helps overcome browser autoplay restrictions after the first interaction.
      if (!isAudioPlaying) {
        playAudio();
      }
    };

    // Add event listeners for user interaction (covers mouse clicks, touch events, etc.)
    // Using 'pointerdown' is a broad event that captures most interactions.
    // 'once: true' ensures this listener is automatically removed after its first trigger.
    document.addEventListener('pointerdown', handleInteraction, { once: true, passive: true });

    // Cleanup the event listener when the component unmounts
    return () => {
      document.removeEventListener('pointerdown', handleInteraction);
    };
  }, [isAudioPlaying, playAudio]); // Re-run listener setup if isAudioPlaying changes

  return (
    <div className="App">
      {/* Persistent audio element for the entire application */}
      <audio
        ref={audioRef} // Attach ref to the audio element
        // autoPlay attribute removed; playback is managed imperatively
        loop
        src={eidMubarakSongUrl}
        style={{ display: 'none' }} // Hide the default audio controls
      />

      {currentPage === 'welcome' && <WelcomePage onNext={goToGame} />}
      {currentPage === 'game' && <GamePage onNext={goToMessage} />}
      {currentPage === 'message' && <MessagePage onNext={goToGallery} />}
      {currentPage === 'gallery' && <GalleryPage onNext={goToGift} />}
      {currentPage === 'gift' && <GiftPage onNext={goToCelebration} />}
      {currentPage === 'celebration' && <CelebrationPage />} {/* This is the last page */}
    </div>
  );
}

export default App;



import React, { useState, useEffect } from 'react';
import './GalleryPage.css';
import GalleryItem from './GalleryItem';
import StarsBackground from '../Background/StarsBackground';

interface GalleryPageProps {
  onNext: () => void;
}

const customGalleryItems = [
  { imageUrl: '/images/gallery/IMG_0425.jpg', text: 'Wishing you a peaceful and joyful Eid Mubarak!' },
  { imageUrl: '/images/gallery/IMG-20240710-WA0043.jpg', text: 'May this Eid bring you endless blessings and happiness.' },
  { imageUrl: '/images/gallery/IMG-20250226-WA0036.jpg', text: 'Eid is a day to cheer and to laugh with all your heart.' },
  { imageUrl: '/images/gallery/IMG-20250903-WA0066.jpg', text: 'May the divine blessings of Allah bring you hope and faith.' },
  { imageUrl: '/images/gallery/IMG-20251028-WA0057.jpg', text: 'Sending you love and warmth on this special day.' },
  { imageUrl: '/images/gallery/IMG-20251220-WA0107.jpg', text: 'May your home be filled with laughter and delicious food.' },
];

const GalleryPage: React.FC<GalleryPageProps> = ({ onNext }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [isEntering, setIsEntering] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if (isFinished || !imageLoaded) return;

    // Timer logic starts only after image is loaded
    const timer1 = setTimeout(() => {
      setIsFlipped(true);
    }, 2000); // Give 2 seconds to view the photo

    const timer2 = setTimeout(() => {
      if (activeIndex < customGalleryItems.length - 1) {
        setIsEntering(false);
        setTimeout(() => {
          setActiveIndex((prev) => prev + 1);
          setIsFlipped(false);
          setIsEntering(true);
          setImageLoaded(false); // Reset for next image
        }, 400);
      } else {
        setIsFinished(true);
      }
    }, 6000); // More time to view and read (2s view + 4s read)

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [activeIndex, isFinished, imageLoaded]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div className="gallery-container">
      <StarsBackground />

      <div className="gallery-content">
        <h2 className="gallery-title">Eid Moments & Wishes</h2>
        
        <div className={`single-card-container ${isEntering ? 'card-enter' : 'card-exit'}`}>
          {!isFinished && (
            <div className="gallery-item-wrapper">
              {!imageLoaded && (
                <div className="loading-container">
                  <div className="gold-pulse-loader"></div>
                  <p className="loading-text">Preparing Memory...</p>
                </div>
              )}
              <GalleryItem 
                imageUrl={customGalleryItems[activeIndex].imageUrl}
                text={customGalleryItems[activeIndex].text}
                isFlipped={isFlipped}
                onLoad={handleImageLoad}
              />
            </div>
          )}
          {isFinished && (
            <div className="gallery-completion">
              <h3 className="completion-text">Hope these memories brought a smile to your face!</h3>
              <p>May this Eid bring you even more wonderful moments.</p>
            </div>
          )}
        </div>

        {isFinished && (
          <button className="next-button fade-in" onClick={onNext}>
            Next Surprise ✨
          </button>
        )}

        <div className="gallery-progress">
            {!isFinished ? `${activeIndex + 1} / ${customGalleryItems.length}` : "Completed ✨"}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;

import React from 'react';
import './GalleryPage.css';
import GalleryItem from './GalleryItem';
import StarsBackground from '../Background/StarsBackground';

interface GalleryPageProps {
  onNext: () => void;
}

const wishes = [
  { wish: "Wishing you a peaceful and joyful Eid Mubarak!", color: "#ffd700" },
  { wish: "May this Eid bring you endless blessings and happiness.", color: "#ff4500" },
  { wish: "Eid is a day to cheer and to laugh with all your heart.", color: "#00ffff" },
  { wish: "May the divine blessings of Allah bring you hope and faith.", color: "#ff00ff" },
  { wish: "Sending you love and warmth on this special day.", color: "#adff2f" },
  { wish: "May your home be filled with laughter and delicious food.", color: "#ffd700" },
  { wish: "Wishing you a lifetime of success and prosperity.", color: "#ff4500" },
  { wish: "May this Eid be the beginning of another successful year.", color: "#00ffff" },
  { wish: "Enjoy this day with your loved ones to the fullest.", color: "#ff00ff" },
  { wish: "May Allah's mercy be with you always. Eid Mubarak!", color: "#adff2f" },
];

const GalleryPage: React.FC<GalleryPageProps> = ({ onNext }) => {
  return (
    <div className="gallery-container">
      <StarsBackground />

      <div className="gallery-content">
        <h2 className="gallery-title">Eid Moments & Wishes</h2>
        <div className="gallery-grid">
          {wishes.map((item, index) => (
            <GalleryItem 
              key={index}
              image={`https://picsum.photos/seed/${index + 10}/400/300`}
              wish={item.wish}
              color={item.color}
            />
          ))}
        </div>

        <button className="next-button" onClick={onNext}>
          Next Surprise
        </button>
      </div>
    </div>
  );
};

export default GalleryPage;

import React, { useState } from 'react';
import './GalleryPage.css';

interface GalleryItemProps {
  image: string;
  wish: string;
  color: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ image, wish, color }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="gallery-item"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => setIsHovered(!isHovered)} // Mobile friendly
    >
      <div className="image-wrapper">
        <img src={image} alt="Eid Moment" className="gallery-image" />
      </div>
      
      {isHovered && (
        <div className="wish-popup" style={{ borderBottomColor: color }}>
          <div className="wish-content" style={{ color: color }}>
            <span className="quote">“</span>
            {wish}
            <span className="quote">”</span>
          </div>
          <div className="popup-arrow" style={{ borderTopColor: color }}></div>
        </div>
      )}
    </div>
  );
};

export default GalleryItem;

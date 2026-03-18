import React from "react";
import "./GalleryPage.css";

interface GalleryItemProps {
  imageUrl: string;
  text: string;
  isFlipped?: boolean; // Optional: can be controlled from parent
  onClick?: () => void;
  onLoad?: () => void;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imageUrl, text, isFlipped = false, onClick, onLoad }) => {
  return (
    <div className="gallery-item" onClick={onClick}>
      <div className={`flip-card-inner ${isFlipped ? "flipped" : ""}`}>
        
        {/* FRONT SIDE (IMAGE) */}
        <div className="flip-card-front">
          <img
            src={imageUrl}
            alt="Gallery Item"
            className="gallery-image"
            onLoad={onLoad}
          />
        </div>

        {/* BACK SIDE (COLORFUL TEXT) */}
        <div className="flip-card-back">
          <div className="flip-card-text">
            ✨ {text} ✨
          </div>
        </div>

      </div>
    </div>
  );
};

export default GalleryItem;

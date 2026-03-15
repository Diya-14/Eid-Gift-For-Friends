import React from 'react';
import './GiftBox.css';

interface GiftBoxProps {
  isOpen: boolean;
  onClick: () => void;
}

const GiftBox: React.FC<GiftBoxProps> = ({ isOpen, onClick }) => {
  return (
    <div className={`gift-box-wrapper ${isOpen ? 'open' : ''}`} onClick={onClick}>
      <div className="gift-box">
        {/* Box Lid */}
        <div className="box-lid">
          <div className="lid-part lid-top"></div>
          <div className="lid-part lid-front"></div>
          <div className="lid-part lid-back"></div>
          <div className="lid-part lid-left"></div>
          <div className="lid-part lid-right"></div>
          <div className="ribbon-bow"></div>
        </div>
        
        {/* Box Body */}
        <div className="box-body">
          <div className="box-part box-front"></div>
          <div className="box-part box-back"></div>
          <div className="box-part box-left"></div>
          <div className="box-part box-right"></div>
          <div className="box-part box-bottom"></div>
        </div>

        {/* Gift Reveal Content */}
        <div className="gift-reveal">
          <div className="eidi-coin">🎁</div>
          <div className="reveal-text">Special Eidi for You</div>
        </div>
      </div>
    </div>
  );
};

export default GiftBox;

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
        <div className="box-lid">
          <div className="lid-top"></div>
          <div className="lid-side side-1"></div>
          <div className="lid-side side-2"></div>
          <div className="lid-side side-3"></div>
          <div className="lid-side side-4"></div>
          <div className="ribbon-v"></div>
          <div className="ribbon-h"></div>
          <div className="ribbon-bow"></div>
        </div>
        <div className="box-body">
          <div className="box-side side-1"></div>
          <div className="box-side side-2"></div>
          <div className="box-side side-3"></div>
          <div className="box-side side-4"></div>
          <div className="box-bottom"></div>
          <div className="ribbon-v"></div>
          <div className="ribbon-h"></div>
        </div>
        <div className="gift-content">
          <div className="eidi-coin">🪙</div>
          <div className="gift-text">Virtual Eidi</div>
        </div>
      </div>
    </div>
  );
};

export default GiftBox;

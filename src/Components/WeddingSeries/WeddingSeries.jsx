import React from 'react';
import './WeddingSeries.css';
import { Heart } from 'lucide-react';
import bn1 from '../../assets/bn1.webp';
import bn2 from '../../assets/bn2.jpg';
import bn3 from '../../assets/bn3.webp';
import bn4 from '../../assets/bn4.webp';
import bn5 from '../../assets/bn5.jpg';
import bn6 from '../../assets/bn6.webp';
import g1 from '../../assets/g1.webp';
import g4 from '../../assets/g4.jpg';

// Fixed syntax error by ensuring clean file content
const images = [bn1, bn2, bn3, bn4, bn5, bn6, g1, g4];

const WeddingSeries = () => {
  return (
    <div className="wedding-series-container">
      <div className="wedding-content-wrapper">
        <div className="wedding-text-section">
          <div className="wedding-tag">WEDDING SERIES</div>
          <h1 className="wedding-title">
            <span>KADHALAN</span> <span className="amp">&</span> <span>KADHALI</span>
          </h1>
          <p className="wedding-quote">
            <span className="quote-line">|</span> "Draped in love, woven with dreams"
          </p>
          <div className="wedding-decor">
             <Heart size={32} fill="#a83f39" color="#a83f39" />
          </div>
        </div>
        
        <div className="wedding-slider-section">
          <div className="marquee-container">
            <div className="marquee-content">
              {images.map((img, index) => (
                <div key={index} className="marquee-item">
                  <img src={img} alt={`Wedding Series ${index + 1}`} />
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {images.map((img, index) => (
                <div key={`dup-${index}`} className="marquee-item">
                  <img src={img} alt={`Wedding Series ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingSeries;

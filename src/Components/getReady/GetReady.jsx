import React from 'react';
import re from '../../assets/re.png';
// import re1 from '../../assets/gift-removebg-preview.png';
import re2 from '../../assets/pp0.png';
import './GetReady.css';

const GetReady = () => {
  return (
    <div className='ready1'>
      {/* New Arrivals Tab */}
      {/* <div className="new-arrivals-tab">NEW ARRIVALS</div> */}
      
      {/* Browser-style dots */}
      <div className="browser-dots">
        <span className="dot dot-blue"></span>
        <span className="dot dot-green"></span>
        <span className="dot dot-yellow"></span>
      </div>

      <div className='ready'>
        {/* Animated floating sarees */}
        {/* <div className="floating-saree saree-1">👗</div>
        <div className="floating-saree saree-2">👗</div>
        <div className="floating-saree saree-3">🥻</div>
        <div className="floating-saree saree-4">🥻</div> */}

        {/* Animated hearts */}
        <div className="heart heart-1">💕</div>
        {/* <div className="heart heart-2">💗</div> */}
        <div className="heart heart-3">💖</div>
        {/* <div className="heart heart-4">❤️</div> */}
        <div className="heart heart-5">💝</div>

        {/* Decorative flowers */}
        {/* <div className="flower flower-1">🌺</div>
        <div className="flower flower-2">🌸</div>
        <div className="flower flower-3">🌹</div> */}

        {/* Left badge image with animation */}
        <img src={re} alt="Are You Ready Badge" className='readys' />

        {/* Main heading with elegant styling */}
        <div className="heading-container">
          <h1 className="elegant-heading">
            <span className="heading-word">Elegance Begins with the Perfect Drape</span>
            
          </h1>
          <p className="tagline">"Where sarees meet soulmates - Book Your Appointment"</p>
        </div>

        {/* Right gift image with animation */}
        {/* <img src={re1} alt="Gift" className='check' /> */}

        {/* Couple emoji */}
        {/* <div className="couple-emoji">👰‍♀️🤵‍♂️</div> */}

        {/* Sparkle effects */}
        <div className="sparkle sparkle-1">✨</div>
        <div className="sparkle sparkle-2">✨</div>
        <div className="sparkle sparkle-3">✨</div>
        <div className="sparkle sparkle-4">✨</div>
        <div className="sparkle sparkle-5">✨</div>
        <div className="sparkle sparkle-6">⭐</div>
        <div className="sparkle sparkle-7">⭐</div>
        <div className="sparkle sparkle-8">💫</div>

        {/* Glitter particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="glitter"
            style={{
              left: `${5 + i * 4.5}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + (i % 4)}s`
            }}
          />
        ))}
      <img src={re2} alt="" className='op'/>

      </div>
    </div>
  );
};

export default GetReady;
import React from 'react';
import loveImg from '../../assets/5.png'; // Keeping for fallback if needed, but not primary usage
import bn1 from '../../assets/bn1.webp';
import bn2 from '../../assets/bn2.jpg';
import bn3 from '../../assets/bn3.webp';
import bn4 from '../../assets/bn4.webp';
import bn5 from '../../assets/bn5.jpg';
import bn6 from '../../assets/bn6.webp';
import g1 from '../../assets/g1.webp';
import g4 from '../../assets/g4.jpg';

const Upcoming = () => {
    // Simulated Backend Data
    const bannerData = {
        title1: "Kadhalan",
        title2: "Kadhali",
        subtitle: "Draped in love, woven with dreams",
        tag: "Wedding Series",
    };

    const sliderImages = [bn1, bn2, bn3, bn4, bn5, bn6, g1, g4];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Great+Vibes&family=Montserrat:wght@300;400;600&display=swap');

        .upcoming-section {
          width: 100vw;
          padding: 0;
          margin-top: clamp(40px, 8vh, 100px); /* Added significant top margin */
          background: #fdfbf7;
          display: flex;
          justify-content: center;
          margin-left: calc(-50vw + 50%);  /* Hack to break out of any parent container */
        }

        .upcoming-wrap {
          width: 100%;
          max-width: none;
          position: relative;
        }

        /* Banner Container */
        .bar {
          position: relative;
          width: 100%;
          height: 350px; /* Increased height for better slider visibility */
          background: linear-gradient(135deg, #2d3e3f 0%, #1f2b2c 100%);
          border-radius: 0;
          box-shadow: none;
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
          border: 1px solid rgba(139, 28, 98, 0.3); /* Maroon border */
          padding: 0 0 0 5%; /* Left padding only */
        }

        /* Golden Frame Border - Changed to Maroon/Rose */
        .frame-border {
          position: absolute;
          inset: 10px;
          border: 1px solid rgba(139, 28, 98, 0.3);
          pointer-events: none;
          z-index: 2;
        }

        .frame-border::after {
          content: '';
          position: absolute;
          inset: 4px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Content Left */
        .content-left {
          position: relative;
          z-index: 10;
          flex: 0 0 40%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding-left: 0;
        }

        .collection-tag {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.7rem;
          color: #fff;
          letter-spacing: 3px;
          text-transform: uppercase;
          margin-bottom: 5px;
          background: #8B1C62; /* Maroon Background */
          padding: 4px 8px;
          border: 1px solid #8B1C62;
        }

        .main-title-group {
          display: flex;
          align-items: center;
          flex-wrap: nowrap; /* Prevent wrapping so hearts stay on sides */
          gap: 15px;
          margin: 5px 0;
          width: 100%; /* Ensure it takes available space */
        }

        .title-text {
          font-family: 'Cinzel', serif;
          font-size: 2.2rem; /* Derived from 2.8rem to fit better */
          color: #fff;
          font-weight: 700;
          line-height: 1;
          background: linear-gradient(to bottom, #fff, #f3e5ab); 
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 4px 10px rgba(0,0,0,0.5);
          white-space: nowrap; /* Keep text together */
        }

        .side-heart {
          display: inline-block;
          width: 20px;
          height: 20px;
          background-color: #8B1C62; /* Theme Maroon */
          transform: rotate(45deg);
          animation: heartPulse 1.5s infinite;
          margin: 0 15px;
          position: relative;
          box-shadow: 0 0 10px #8B1C62, 0 0 20px #8B1C62; /* Theme Glow */
        }

        .side-heart::before,
        .side-heart::after {
          content: "";
          width: 20px;
          height: 20px;
          background-color: #8B1C62;
          border-radius: 50%;
          position: absolute;
        }

        .side-heart::before {
          top: -10px;
          left: 0;
        }

        .side-heart::after {
          top: 0;
          left: -10px;
        }

        @keyframes heartPulse {
          0% { transform: rotate(45deg) scale(1); opacity: 0.8; }
          50% { transform: rotate(45deg) scale(1.2); opacity: 1; box-shadow: 0 0 15px #8B1C62, 0 0 30px #8B1C62; }
          100% { transform: rotate(45deg) scale(1); opacity: 0.8; }
        }

        .ampersand {
          font-family: 'Great Vibes', cursive;
          font-size: 3rem;
          color: #8B1C62; /* Maroon */
          margin: 0 8px;
          text-shadow: 0 0 10px rgba(139, 28, 98, 0.4);
        }
        
        .subtitle {
          font-family: 'Montserrat', sans-serif;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.9);
          font-style: italic;
          letter-spacing: 0.5px;
          margin-top: 10px;
          border-left: 3px solid #8B1C62;
          padding-left: 15px;
        }

        /* Image Sider Side (Right) */
        .image-right {
           position: absolute;
           right: 0;
           top: 0;
           height: 100%;
           width: 55%;
           z-index: 1;
           /* Mask for fading edges into the dark background */
           mask-image: linear-gradient(to right, transparent, black 15%, black 100%);
           -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 100%);
           display: flex;
           align-items: center;
           overflow: hidden; 
        }

        .marquee-container {
          width: 100%;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .marquee-content {
          display: flex;
          gap: 15px;
          animation: scrollLeft 25s linear infinite;
          width: max-content;
        }

        /* Pause animation on hover */
        .image-right:hover .marquee-content {
            animation-play-state: paused;
        }

        .marquee-item {
          width: 180px; 
          height: 260px;
          flex-shrink: 0;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(139, 28, 98, 0.3);
          box-shadow: 0 5px 15px rgba(0,0,0,0.5);
          transition: transform 0.3s ease;
          background: #000;
        }

        .marquee-item:hover {
            transform: scale(1.05);
            border-color: #8B1C62;
            z-index: 5;
        }

        .marquee-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }

        /* Animated Love Hearts (CSS Shapes) */
        .hearts-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 0; 
            pointer-events: none;
        }

        /* Central Colorful Decor to Fill Gap */
        .central-mandala {
            position: absolute;
            left: 42%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 500px;
            height: 500px;
            background: radial-gradient(circle, rgba(255,105,180,0.08) 0%, rgba(148,0,211,0.05) 40%, transparent 70%);
            border-radius: 50%;
            z-index: 0;
            animation: pulse-glow 6s infinite alternate;
        }
        
        .central-mandala::before {
            content: '';
            position: absolute;
            inset: 80px;
            border: 2px dashed rgba(255, 215, 0, 0.1);
            border-radius: 50%;
            animation: spin-slow 25s linear infinite;
        }

        @keyframes pulse-glow {
            0% { transform: translate(-50%, -50%) scale(1); opacity: 0.5; }
            100% { transform: translate(-50%, -50%) scale(1.1); opacity: 0.8; }
        }
        
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }

        .floating-heart {
            position: absolute;
            width: 20px;
            height: 20px;
            background: linear-gradient(45deg, #ff6b6b, #feca57); /* Colorful gradient */
            transform: rotate(45deg);
            animation: floatUp 8s linear infinite;
        }
        
        .floating-heart::before, .floating-heart::after {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background: inherit;
            border-radius: 50%;
        }
        .floating-heart::before { top: -10px; left: 0; }
        .floating-heart::after { top: 0; left: -10px; }

        .h1 { left: 10%; bottom: -30px; animation-duration: 7s; width: 30px; height: 30px; opacity: 0.3; }
        .h1::before, .h1::after { width: 30px; height: 30px; }
        .h1::before { top: -15px; } .h1::after { left: -15px; }

        .h2 { left: 40%; bottom: -50px; animation-delay: 2s; width: 15px; height: 15px; opacity: 0.5; background: rgba(255,90,122,0.3); }
        .h2::before, .h2::after { width: 15px; height: 15px; }
        .h2::before { top: -7.5px; } .h2::after { left: -7.5px; }

        .h3 { left: 70%; bottom: -40px; animation-delay: 4s; width: 40px; height: 40px; opacity: 0.2; }
        .h3::before, .h3::after { width: 40px; height: 40px; }
        .h3::before { top: -20px; } .h3::after { left: -20px; }

        .h4 { left: 20%; bottom: -60px; animation-delay: 1.5s; width: 10px; height: 10px; opacity: 0.6; background: #fff;}
        .h4::before, .h4::after { width: 10px; height: 10px; }
        .h4::before { top: -5px; } .h4::after { left: -5px; }

        @keyframes floatUp {
            0% { transform: translateY(0) rotate(45deg); opacity: 0; }
            20% { opacity: 0.6; }
            80% { opacity: 0.6; }
            100% { transform: translateY(-450px) rotate(45deg); opacity: 0; }
        }

        /* Floating Text Effects */
        .floater-text {
            position: absolute;
            font-family: 'Great Vibes', cursive;
            color: rgba(255,255,255,0.1);
            font-size: 2rem;
            animation: driftText 15s linear infinite;
            pointer-events: none;
            z-index: 0;
        }
        .ft-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .ft-2 { bottom: 20%; left: 35%; animation-delay: 5s; font-size: 1.5rem; }
        .ft-3 { top: 15%; right: 45%; animation-delay: 2s; }

        @keyframes driftText {
            0% { transform: translateX(0) translateY(0); opacity: 0; }
            50% { opacity: 0.3; }
            100% { transform: translateX(20px) translateY(-20px); opacity: 0; }
        }

        @media (max-width: 900px) {
           .bar { height: auto; flex-direction: column; padding: 40px 20px; text-align: center; }
           .content-left { align-items: center; max-width: 100%; margin-bottom: 20px; flex: auto; }
           .image-right { 
               position: relative; 
               width: 100%; 
               height: 250px; 
               mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent); 
               -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
               margin-top: 20px;
               overflow: hidden;
           }
           .marquee-item {
               width: 150px;
               height: 220px;
           }
           .subtitle { border-left: none; border-top: 3px solid #d4af37; padding-left: 0; padding-top: 15px; }
           .main-title-group { justify-content: center; }
        }
      `}</style>

      <section className="upcoming-section">
        <div className="upcoming-wrap">
          <div className="bar">
            {/* Golden Frame */}
            <div className="frame-border"></div>

            {/* Central Mandala Decoration */}
            <div className="central-mandala"></div>
            
            {/* Animated Hearts Background */}
            <div className="hearts-container">
                <div className="floating-heart h1"></div>
                <div className="floating-heart h2"></div>
                <div className="floating-heart h3"></div>
                <div className="floating-heart h4"></div>
                <div className="floating-heart h2" style={{left: '25%', animationDelay: '5s'}}></div>
                <div className="floating-heart h1" style={{left: '85%', animationDelay: '1s'}}></div>
                <div className="floating-heart h4" style={{left: '55%', animationDelay: '3s'}}></div>
                
                {/* Floating Love Text */}
                <div className="floater-text ft-1">Love</div>
                <div className="floater-text ft-2">Forever</div>
                <div className="floater-text ft-3">Romance</div>
            </div>

            {/* Left Content */}
            <div className="content-left">
               <div className="collection-tag">{bannerData.tag}</div>
               
                <div className="main-title-group">
                  <div className="side-heart"></div>
                  <h1 className="title-text">{bannerData.title1}</h1>
                  <span className="ampersand">&</span>
                  <h1 className="title-text">{bannerData.title2}</h1>
                  <div className="side-heart"></div>
                </div>
               
               <p className="subtitle">
                 "{bannerData.subtitle}"
               </p>
            </div>

            {/* Right Slider Section */}
            <div className="image-right">
                <div className="marquee-container">
                    <div className="marquee-content">
                        {sliderImages.map((img, index) => (
                            <div key={index} className="marquee-item">
                                <img src={img} alt={`Wedding Collection ${index}`} />
                            </div>
                        ))}
                        {/* Duplicate for infinite loop */}
                        {sliderImages.map((img, index) => (
                            <div key={`dup-${index}`} className="marquee-item">
                                <img src={img} alt={`Wedding Collection ${index}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default Upcoming;

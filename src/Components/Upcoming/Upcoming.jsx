import React from 'react';

const Upcoming = () => {
  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .upcoming-section {
          width: 100%;
          padding: 20px;
    background: linear-gradient(180deg, #E8DCC4 0%, #D4C5A9 100%);
          overflow: hidden;
        }

        .upcoming-wrap {
          max-width: 1400px;
          margin: 0 auto;
          padding: 60px 20px;
        }

        .bar {
          position: relative;
          width: 100%;
          height: 250px;
          border-radius: 16px;
          background: #1f2b2c;
          box-shadow: 0 4px 15px rgba(45,62,63,0.15);
          border: 1px solid rgba(201,169,97,0.25);
          display: flex;
          align-items: center;
          justify-content: space-between;
          overflow: hidden;
        }

        /* Animated Background Lines */
        .animatedLines {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 0;
          overflow: hidden;
        }

        .line {
          position: absolute;
          height: 2px;
          background: linear-gradient(90deg, 
            transparent, 
            rgba(201,169,97,0.4), 
            rgba(255,215,0,0.6), 
            rgba(201,169,97,0.4), 
            transparent
          );
          animation: lineMove 8s linear infinite;
        }

        .line:nth-child(1) {
          top: 15%;
          width: 300px;
          animation-delay: 0s;
        }

        .line:nth-child(2) {
          top: 35%;
          width: 400px;
          animation-delay: 2s;
        }

        .line:nth-child(3) {
          top: 55%;
          width: 350px;
          animation-delay: 4s;
        }

        .line:nth-child(4) {
          top: 75%;
          width: 450px;
          animation-delay: 1s;
        }

        .line:nth-child(5) {
          top: 25%;
          width: 280px;
          animation-delay: 3s;
        }

        .line:nth-child(6) {
          top: 65%;
          width: 320px;
          animation-delay: 5s;
        }

        @keyframes lineMove {
          0% {
            left: -400px;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }

        /* Vertical Lines */
        .verticalLine {
          position: absolute;
          width: 2px;
          height: 200px;
          background: linear-gradient(180deg, 
            transparent, 
            rgba(255,90,122,0.3), 
            rgba(255,215,0,0.5), 
            rgba(255,90,122,0.3), 
            transparent
          );
          animation: verticalMove 10s linear infinite;
        }

        .verticalLine:nth-child(7) {
          left: 20%;
          animation-delay: 1s;
        }

        .verticalLine:nth-child(8) {
          left: 50%;
          animation-delay: 3s;
        }

        .verticalLine:nth-child(9) {
          left: 80%;
          animation-delay: 5s;
        }

        @keyframes verticalMove {
          0% {
            top: -200px;
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        .bar::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(139,28,98,0.15), transparent 60%);
          animation: gradientShift 8s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes gradientShift {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.25; }
        }

        .bar::after {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at 20% 50%, rgba(255,255,255,0.05) 0%, transparent 50%),
                      radial-gradient(circle at 80% 30%, rgba(255,255,255,0.04) 0%, transparent 50%),
                      radial-gradient(circle at 50% 80%, rgba(255,255,255,0.03) 0%, transparent 50%);
          animation: sparkleMove 6s ease-in-out infinite;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes sparkleMove {
          0%, 100% { transform: translateX(0) scale(1); opacity: 0.3; }
          50% { transform: translateX(20px) scale(1.1); opacity: 0.6; }
        }

        /* New Arrivals Badge */
        .newArrivalsBadge {
          position: absolute;
          left: 0;
          top: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .ribbon {
          position: relative;
          background: linear-gradient(135deg, #FFC04E, #FF9F1C, #FFC04E);
          background-size: 200% 200%;
          color: #3d2b1f;
          font-weight: 800;
          font-size: 0.95rem;
          padding: 10px 20px;
          border-radius: 0 0 12px 0;
          border-top-left-radius: 16px;
          transform-origin: top left;
          filter: drop-shadow(0 3px 8px rgba(255,159,28,0.3));
          animation: ribbonIn 0.7s cubic-bezier(0.34,1.56,0.64,1) both, gradientSlide 3s ease infinite;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        @keyframes ribbonIn {
          0% { transform: translate(-100%, -100%) scale(0.8); opacity: 0; }
          100% { transform: translate(0, 0) scale(1); opacity: 1; }
        }

        @keyframes gradientSlide {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .ribbon::before {
          content: '';
          position: absolute;
          right: -10px;
          top: 0;
          width: 0;
          height: 0;
          border-left: 10px solid #FF9F1C;
          border-bottom: 10px solid transparent;
          filter: brightness(0.8);
        }

        .ribbon::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 0;
          width: 0;
          height: 0;
          border-top: 10px solid #FF9F1C;
          border-right: 10px solid transparent;
          filter: brightness(0.8);
        }

        .banimg {
          width: 140px;
          height: 140px;
          object-fit: contain;
          filter: drop-shadow(0 4px 8px rgba(0,0,0,0.2));
          animation: floatA 4.2s ease-in-out infinite;
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          z-index: 2;
        }

        @keyframes floatA {
          0% { transform: translateY(-50%) scale(1) rotate(0deg); }
          50% { transform: translateY(calc(-50% - 10px)) scale(1.05) rotate(2deg); }
          100% { transform: translateY(-50%) scale(1) rotate(0deg); }
        }

        .track {
          position: absolute;
          left: 180px;
          right: 480px;
          top: 50%;
          transform: translateY(-50%);
          height: 72px;
          pointer-events: none;
          z-index: 1;
        }

        .heartItem {
          position: absolute;
          width: 62px;
          height: 72px;
          color: #FF5A7A;
          filter: drop-shadow(0 3px 6px rgba(255,90,122,0.2));
          animation: drift 6s ease-in-out infinite, beatSmall 1.8s ease-in-out infinite;
        }

        .heartItem:nth-child(1) { 
          left: 5%; 
          animation-delay: 0s;
          width: 82px;
          height: 92px; 
        }

        .heartItem:nth-child(2) { 
          left: 35%; 
          animation-delay: 0.6s;
          width: 72px;
          height: 82px; 
        }

        .heartItem:nth-child(3) { 
          left: 65%; 
          animation-delay: 1.2s;
          width: 62px;
          height: 72px; 
        }

        @keyframes drift {
          0% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.9; }
          50% { transform: translateY(-8px) scale(1.08) rotate(5deg); opacity: 1; }
          100% { transform: translateY(0) scale(1) rotate(0deg); opacity: 0.9; }
        }

        @keyframes beatSmall {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }

        /* Right side content */
        .myright {
          position: absolute;
          right: 40px;
          top: 50%;
          transform: translateY(-50%);
          display: flex;
          align-items: center;
          gap: 16px;
          z-index: 2;
        }

        .myright img {
          width: 180px;
          height: 180px;
          object-fit: contain;
          filter: drop-shadow(0 4px 8px rgba(255,90,122,0.15));
          animation: floatB 5.2s ease-in-out infinite, spinSoft 14s linear infinite alternate;
        }

        @keyframes floatB {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-12px) translateX(6px); }
          100% { transform: translateY(0) translateX(0); }
        }

        @keyframes spinSoft {
          0% { transform: rotate(-3deg); }
          100% { transform: rotate(3deg); }
        }

        .titlesWrapper {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .title {
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: 1px;
          color: #FFE7EF;
          text-shadow: 0 2px 8px rgba(0,0,0,0.3);
          font-family: 'Great Vibes', cursive;
          animation: titleRise 1.2s cubic-bezier(0.34,1.56,0.64,1) both;
          margin: 0;
          white-space: nowrap;
        }

        @keyframes titleRise {
          0% { transform: translateY(20px) scale(0.95); opacity: 0; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }

        .titleHeart {
          width: 72px;
          height: 72px;
          color: #FF3B6B;
          filter: drop-shadow(0 4px 8px rgba(255,59,107,0.2));
          animation: pulse 1.6s ease-in-out infinite;
          flex-shrink: 0;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.3); }
        }

        .confetti {
          position: absolute;
          right: 26px;
          top: 20px;
          display: flex;
          gap: 6px;
          z-index: 3;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #2EA6FF;
          animation: floatDot 3.4s ease-in-out infinite, sparkle 2s ease-in-out infinite;
          display: block;
        }

        .dot:nth-child(2) { background: #29D3A0; animation-delay: 0.3s; }
        .dot:nth-child(3) { background: #6EE8FF; animation-delay: 0.6s; }

        @keyframes floatDot {
          0% { transform: translateY(0) scale(1); opacity: 0.9; }
          50% { transform: translateY(-10px) scale(1.3); opacity: 1; }
          100% { transform: translateY(0) scale(1); opacity: 0.9; }
        }

        @keyframes sparkle {
          0%, 100% { box-shadow: 0 0 5px rgba(255,255,255,0.3); }
          50% { box-shadow: 0 0 15px rgba(255,255,255,0.8); }
        }

        .stripes {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          display: flex;
          gap: 2px;
          padding-left: 6px;
          background: linear-gradient(180deg, rgba(201,169,97,0.4), rgba(232,220,196,0.35));
          width: 18px;
          align-items: stretch;
          z-index: 1;
        }

        .stripe { 
          width: 4px;
          height: 100%;
        }
        .stripe.s1 { background: #C9A961; }
        .stripe.s2 { background: #E8DCC4; }
        .stripe.s3 { background: #B8956F; }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(255,255,255,0.8), transparent);
          border-radius: 50%;
          animation: floatParticle 8s ease-in-out infinite;
        }

        .particle:nth-child(1) { left: 10%; top: 20%; animation-delay: 0s; }
        .particle:nth-child(2) { left: 30%; top: 60%; animation-delay: 1s; }
        .particle:nth-child(3) { left: 50%; top: 30%; animation-delay: 2s; }
        .particle:nth-child(4) { left: 70%; top: 70%; animation-delay: 3s; }
        .particle:nth-child(5) { left: 85%; top: 40%; animation-delay: 1.5s; }

        @keyframes floatParticle {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0; }
          25% { opacity: 0.8; }
          50% { transform: translateY(-30px) scale(1.5); opacity: 1; }
          75% { opacity: 0.8; }
        }

        /* Love Quote Overlay */
        .loveQuote {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          text-align: center;
          animation: quoteSlideUp 1.5s ease-out 0.8s both;
        }

        @keyframes quoteSlideUp {
          0% { transform: translateX(-50%) translateY(20px); opacity: 0; }
          100% { transform: translateX(-50%) translateY(0); opacity: 1; }
        }

        .quoteText {
          font-size: 1rem;
          color: #FFE7EF;
          font-style: italic;
          text-shadow: 0 2px 4px rgba(0,0,0,0.3);
          letter-spacing: 0.5px;
          font-family: 'Georgia', serif;
        }

        /* Floating Saree Elements */
        .sareeElements {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1;
        }

        .sareeWave {
          position: absolute;
          font-size: 2rem;
          animation: waveDrift 10s ease-in-out infinite;
          opacity: 0.4;
          filter: drop-shadow(0 2px 4px rgba(255,90,122,0.2));
        }

        .sareeWave:nth-child(1) { left: 15%; top: 15%; animation-delay: 0s; }
        .sareeWave:nth-child(2) { right: 20%; top: 25%; animation-delay: 2s; }
        .sareeWave:nth-child(3) { left: 25%; bottom: 20%; animation-delay: 4s; }

        @keyframes waveDrift {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); opacity: 0.3; }
          50% { transform: translateY(-20px) rotate(10deg) scale(1.1); opacity: 0.5; }
        }

        /* Sparkle Trails */
        .sparkleTrail {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
        }

        .sparkle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: radial-gradient(circle, rgba(255,215,0,0.8), transparent);
          border-radius: 50%;
          animation: sparkleTrailAnim 3s ease-in-out infinite;
          box-shadow: 0 0 6px rgba(255,215,0,0.4);
        }

        .sparkle:nth-child(1) { left: 20%; top: 30%; animation-delay: 0s; }
        .sparkle:nth-child(2) { left: 40%; top: 20%; animation-delay: 0.5s; }
        .sparkle:nth-child(3) { left: 60%; top: 35%; animation-delay: 1s; }
        .sparkle:nth-child(4) { left: 80%; top: 25%; animation-delay: 1.5s; }
        .sparkle:nth-child(5) { left: 50%; bottom: 30%; animation-delay: 2s; }

        @keyframes sparkleTrailAnim {
          0%, 100% { 
            transform: scale(0) translateY(0); 
            opacity: 0; 
          }
          20% { 
            transform: scale(1.5) translateY(-10px); 
            opacity: 1; 
          }
          40% { 
            transform: scale(1) translateY(-20px); 
            opacity: 0.8; 
          }
          60% { 
            transform: scale(0.5) translateY(-30px); 
            opacity: 0.4; 
          }
        }

        /* Rose Petals Falling */
        .rosePetals {
          position: absolute;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 2;
          overflow: hidden;
        }

        .petal {
          position: absolute;
          font-size: 1.2rem;
          animation: petalFall 8s linear infinite;
          opacity: 0.7;
        }

        .petal:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 8s; }
        .petal:nth-child(2) { left: 30%; animation-delay: 2s; animation-duration: 9s; }
        .petal:nth-child(3) { left: 50%; animation-delay: 4s; animation-duration: 7s; }
        .petal:nth-child(4) { left: 70%; animation-delay: 1s; animation-duration: 10s; }
        .petal:nth-child(5) { left: 90%; animation-delay: 3s; animation-duration: 8.5s; }

        @keyframes petalFall {
          0% { 
            transform: translateY(-20px) rotate(0deg); 
            opacity: 0; 
          }
          10% { opacity: 0.7; }
          90% { opacity: 0.7; }
          100% { 
            transform: translateY(280px) rotate(360deg); 
            opacity: 0; 
          }
        }

        @media (max-width: 968px) {
          .bar { height: 220px; }
          .title { font-size: 2.4rem; letter-spacing: 1px; }
          .titleHeart { width: 60px; height: 60px; }
          .banimg { width: 120px; height: 120px; left: 15px; }
          .myright { right: 30px; gap: 12px; }
          .myright img { width: 140px; height: 140px; }
          .heartItem { width: 50px; height: 60px; }
          .track { right: 380px; }
          .ribbon { font-size: 0.85rem; padding: 8px 16px; }
        }

        @media (max-width: 768px) {
          .bar { height: 200px; }
          .title { font-size: 2rem; }
          .titleHeart { width: 50px; height: 50px; }
          .myright { flex-direction: column; gap: 8px; right: 20px; }
          .titlesWrapper { flex-direction: column; gap: 8px; }
          .myright img { width: 100px; height: 100px; }
          .track { left: 140px; right: 200px; }
        }

        @media (max-width: 560px) {
          .upcoming-wrap { padding: 10px 12px; }
          .bar { height: 180px; border-radius: 12px; }
          .title { font-size: 1.6rem; letter-spacing: 0.5px; }
          .titleHeart { width: 40px; height: 40px; }
          .banimg { width: 90px; height: 90px; left: 10px; }
          .myright { right: 15px; }
          .myright img { width: 80px; height: 80px; }
          .heartItem { width: 40px; height: 48px; }
          .track { left: 110px; right: 140px; }
          .ribbon { font-size: 0.75rem; padding: 6px 12px; }
          .quoteText { font-size: 0.7rem; }
          .loveQuote { bottom: 10px; }
          .sareeWave { font-size: 1.2rem; }
          .petal { font-size: 0.9rem; }
        }
      `}</style>

      <section className="upcoming-section">
        <div className="upcoming-wrap">
          <div className="bar">
            {/* Animated Background Lines */}
            <div className="animatedLines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
              <div className="verticalLine"></div>
              <div className="verticalLine"></div>
              <div className="verticalLine"></div>
            </div>

            {/* Floating particles effect */}
            <div className="particles">
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
              <div className="particle"></div>
            </div>

            {/* Rose Petals Falling */}
            <div className="rosePetals">
              <div className="petal">🌹</div>
              <div className="petal">🌸</div>
              <div className="petal">🌹</div>
              <div className="petal">🌺</div>
              <div className="petal">🌸</div>
            </div>

            {/* Sparkle Trails */}
            <div className="sparkleTrail">
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
              <div className="sparkle"></div>
            </div>

            {/* Floating Saree Elements */}
            <div className="sareeElements">
              <div className="sareeWave">🥻</div>
              <div className="sareeWave">💐</div>
              <div className="sareeWave">🥻</div>
            </div>

            {/* New Arrivals Badge - Top Left Corner */}
            <div className="newArrivalsBadge">
              <div className="ribbon">New Arrivals</div>
            </div>

            {/* Left image */}
            <img 
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ctext x='50%25' y='50%25' font-size='60' text-anchor='middle' dominant-baseline='middle'%3E💝%3C/text%3E%3C/svg%3E" 
              alt="Coming Soon" 
              className="banimg" 
            />

            {/* Heart track */}
            <div className="track">
              <svg className="heartItem" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 21C12 21 4 13.5 4 9.5C4 7.0147 6.0147 5 8.5 5C10.1 5 11.56 5.82 12.5 7.05C13.44 5.82 14.9 5 16.5 5C18.9853 5 21 7.0147 21 9.5C21 13.5 12 21 12 21Z"/>
                <path d="M9 8.2c1.3-1.1 3-1.1 4.2 0" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2.4" strokeLinecap="round"/>
              </svg>
              <svg className="heartItem" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 21C12 21 4 13.5 4 9.5C4 7.0147 6.0147 5 8.5 5C10.1 5 11.56 5.82 12.5 7.05C13.44 5.82 14.9 5 16.5 5C18.9853 5 21 7.0147 21 9.5C21 13.5 12 21 12 21Z"/>
                <path d="M9 8.2c1.3-1.1 3-1.1 4.2 0" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2.4" strokeLinecap="round"/>
              </svg>
              <svg className="heartItem" viewBox="0 0 24 24">
                <path fill="currentColor" d="M12 21C12 21 4 13.5 4 9.5C4 7.0147 6.0147 5 8.5 5C10.1 5 11.56 5.82 12.5 7.05C13.44 5.82 14.9 5 16.5 5C18.9853 5 21 7.0147 21 9.5C21 13.5 12 21 12 21Z"/>
                <path d="M9 8.2c1.3-1.1 3-1.1 4.2 0" stroke="#ffffff" strokeOpacity="0.6" strokeWidth="2.4" strokeLinecap="round"/>
              </svg>
            </div>

            {/* Right side content - Titles and Image */}
            <div className="myright">
              <div className="titlesWrapper">
                <h1 className="title">Kadhalan</h1>
                <svg className="titleHeart" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 21C12 21 4 13.5 4 9.5C4 7.0147 6.0147 5 8.5 5C10.1 5 11.56 5.82 12.5 7.05C13.44 5.82 14.9 5 16.5 5C18.9853 5 21 7.0147 21 9.5C21 13.5 12 21 12 21Z"/>
                  <path d="M9 8.2c1.3-1.1 3-1.1 4.2 0" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h1 className="title">Kadhali</h1>
              </div>
              <img 
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Ctext x='50%25' y='50%25' font-size='80' text-anchor='middle' dominant-baseline='middle'%3E💑%3C/text%3E%3C/svg%3E" 
                alt="Couple" 
              />
            </div>

            {/* Confetti dots */}
            <div className="confetti">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>

            {/* Stripes */}
            <div className="stripes">
              <span className="stripe s1"></span>
              <span className="stripe s2"></span>
              <span className="stripe s3"></span>
            </div>

            {/* Love Quote */}
            <div className="loveQuote">
              <p className="quoteText">"Draped in love, woven with dreams - where sarees meet soulmates"</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Upcoming;
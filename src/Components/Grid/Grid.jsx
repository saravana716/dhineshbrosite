import React, { useState } from 'react';
import soft from "../../assets/soft.jpg";
import new1 from "../../assets/io.jpg";
import new2 from "../../assets/q.jpg";
import new3 from "../../assets/q1.jpg";
import new4 from "../../assets/q2.webp";
import new5 from "../../assets/q3.jpg";
import new6 from "../../assets/q7.jpg";
import new7 from "../../assets/g8.avif";
import new8 from "../../assets/g1.webp";

const Grid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const categories = [
    {
      title: "Soft",
      quote: "Soft Embrace",
      image: soft,
      size: "tall-wide"
    },
    {
      title: "New",
      quote: "Just Arrived",
      image: new1,
      size: "small"
    },
    {
      title: "Best",
      quote: "Most Loved",
      image: new2,
      size: "small"
    },
    {
      title: "Love",
      quote: "Made With",
      image: new3,
      size: "small"
    },
    {
      title: "Premium",
      quote: "Royal Touch",
      image: new4,
      size: "wide"
    },
    {
      title: "Cute",
      quote: "Playful Pretty",
      image: new6,
      size: "small"
    },
    {
      title: "Cotton",
      quote: "Cool Comfort",
      image: new7,
      size: "small"
    },
    {
      title: "Traditional",
      quote: "Classic Grace",
      image: new5,
      size: "wide"
    },
    {
      title: "Party",
      quote: "Shine Bright",
      image: new8,
      size: "small"
    }
  ];

  return (
    <section className="categories-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Great+Vibes&family=Quicksand:wght@300..700&family=Sacramento&family=Satisfy&family=Uncial+Antiqua&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
.wer{
width:100vw;
height:100vh;
position:absolute;
left:0;
top:0;
}
/* Corner Ornaments Removed */
        .categories-section {
          width: 100vw;
          min-height: 100vh;
          padding: clamp(20px, 4vh, 60px) clamp(15px, 3vw, 40px);
          background: #021a1b; /* Deep luxury base */
          position: relative;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        /* Satin Silk Pattern Overlay */
        .categories-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: 
            radial-gradient(circle at 10% 20%, rgba(201, 169, 97, 0.3) 0%, transparent 40%),
            radial-gradient(circle at 90% 80%, rgba(20, 80, 85, 0.5) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(13, 50, 53, 0.7) 0%, transparent 80%);
          z-index: 0;
        }

        /* Diagonal Satin Light Sweep */
        .satin-sweep {
          position: absolute;
          width: 200%;
          height: 200%;
          top: -50%;
          left: -50%;
          background: linear-gradient(
            45deg,
            transparent 45%,
            rgba(255, 255, 255, 0.05) 50%,
            transparent 55%
          );
          animation: satinSweep 10s infinite linear;
          pointer-events: none;
          z-index: 1;
        }

        @keyframes satinSweep {
          0% { transform: translate(-30%, -30%) rotate(0deg); }
          100% { transform: translate(30%, 30%) rotate(0deg); }
        }

        /* Luxury Silk Watermark Pattern */
        .silk-pattern {
          position: absolute;
          inset: 0;
          opacity: 0.03;
          background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0l15 30-15 30-15-30z' fill='%23C9A961' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E");
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 1;
        }

        /* Golden Sparkle Dust */
        .sparkle-dust {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }

        .particle {
          position: absolute;
          background: radial-gradient(circle, #C9A961 20%, transparent 70%);
          border-radius: 50%;
          filter: blur(1px);
          opacity: 0;
          animation: particleFloat var(--float-duration, 15s) infinite linear, 
                     twinkle var(--twinkle-duration, 4s) infinite ease-in-out;
          animation-delay: var(--delay, 0s);
          box-shadow: 0 0 15px rgba(201, 169, 97, 0.4);
        }

        @keyframes particleFloat {
          0% { transform: translateY(100%) scale(0.5); opacity: 0; }
          20% { opacity: 0.4; }
          50% { opacity: 0.7; }
          80% { opacity: 0.4; }
          100% { transform: translateY(-100px) scale(1.2); opacity: 0; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: var(--min-opacity, 0.2); }
          50% { opacity: var(--max-opacity, 0.8); }
        }

        /* Ambient Lights */
        .aura-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(100px);
          z-index: 0;
          opacity: 0.4;
          animation: auraFloat 20s infinite alternate ease-in-out;
        }

        .blob-1 {
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, #C9A961 0%, transparent 70%);
          top: -200px;
          right: -100px;
        }

        .blob-2 {
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, #145055 0%, transparent 70%);
          bottom: -100px;
          left: -100px;
          animation-delay: -5s;
        }

        @keyframes auraFloat {
          0% { transform: translate(0, 0) scale(1) rotate(0deg); opacity: 0.4; }
          50% { opacity: 0.6; }
          100% { transform: translate(100px, 100px) scale(1.3) rotate(15deg); opacity: 0.4; }
        }

        /* Prismatic Light Rays */
        .prismatic-ray {
          position: absolute;
          width: 2px;
          height: 200%;
          background: linear-gradient(
            to bottom,
            transparent,
            rgba(255, 255, 255, 0.2),
            rgba(201, 169, 97, 0.3),
            rgba(255, 255, 255, 0.2),
            transparent
          );
          filter: blur(8px);
          transform: rotate(35deg);
          animation: rayScan var(--duration) linear infinite;
          opacity: 0.6;
          z-index: 1;
        }

        @keyframes rayScan {
          0% { transform: translate(-100%, -50%) rotate(35deg); }
          100% { transform: translate(200%, 50%) rotate(35deg); }
        }

        /* Glass Sheen Overlay */
        .glass-sheen {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            125deg,
            rgba(255, 255, 255, 0) 30%,
            rgba(255, 255, 255, 0.05) 50%,
            rgba(255, 255, 255, 0) 70%
          );
          background-size: 200% 200%;
          animation: sheenShift 8s ease infinite;
          pointer-events: none;
          z-index: 2;
        }

        @keyframes sheenShift {
          0% { background-position: -100% -100%; }
          100% { background-position: 100% 100%; }
        }

        /* Glossy Circle Effects */
        .gloss-orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.2) 0%, rgba(201, 169, 97, 0.1) 40%, transparent 70%);
          filter: blur(25px);
          z-index: 1;
          pointer-events: none;
          animation: orbFloat var(--duration) ease-in-out infinite;
          mix-blend-mode: screen;
        }

        @keyframes orbFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.3; }
          50% { transform: translate(var(--move-x), var(--move-y)) scale(1.2); opacity: 0.6; }
        }

        .categories-section::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.1;
          pointer-events: none;
          mix-blend-mode: overlay;
          z-index: 2;
        }

        .categories-container {
          width: 100%;
          height: 100%;
          margin: 0 auto;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          z-index: 3;
          display: flex;
          flex-direction: column;
          border-left: 1px solid rgba(201, 169, 97, 0.3);
          border-right: 1px solid rgba(201, 169, 97, 0.3);
          border-radius: 40px;
          background: rgba(0, 0, 0, 0.1); 
          backdrop-filter: blur(15px);
          padding: clamp(10px, 2vh, 40px);
          box-shadow: 0 20px 80px rgba(0, 0, 0, 0.4);
        }

        .categories-header {
          text-align: center;
          margin-bottom: clamp(20px, 3vh, 40px);
          animation: fadeInDown 1s ease;
          flex-shrink: 0;
        }

        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .categories-main-title {
          font-size: clamp(1.8rem, 5vw, 4.5rem);
          font-weight: 900;
          color: #fdfaf3;
          margin-bottom: 0.5rem;
          letter-spacing: clamp(4px, 0.6vw, 10px);
          text-transform: uppercase;
          position: relative;
          display: inline-block;
          font-family: 'Playfair Display', serif;
          text-shadow: 0 5px 20px rgba(0,0,0,0.5);
          background: linear-gradient(135deg, #fdfaf3 0%, #C9A961 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .categories-main-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: clamp(80px, 15vw, 150px);
          height: 3px;
          background: linear-gradient(90deg, transparent, #C9A961, transparent);
          border-radius: 2px;
          box-shadow: 0 2px 10px rgba(201, 169, 97, 0.3);
        }

        .categories-subtitle {
          font-size: clamp(1.1rem, 2vw, 1.6rem);
          color: #C9A961;
          margin-top: clamp(25px, 4vh, 50px);
          font-weight: 600;
          font-family: 'Playfair Display', serif;
          font-style: italic;
          letter-spacing: 2px;
          text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: minmax(0, 1fr);
          gap: clamp(10px, 1.5vw, 20px);
          animation: fadeInUp 1s ease;
          width: 75%;
          height: 480px;
          margin: 0 auto;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .category-card {
          position: relative;
          border-radius: clamp(12px, 2vw, 20px);
          overflow: hidden;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          border: 1px solid rgba(201, 169, 97, 0.2);
          min-height: 0;
          background: rgba(255, 255, 255, 0.05);
        }

        .category-card.tall-wide {
          grid-column: span 1;
          grid-row: span 2;
        }

        .category-card.small {
          grid-column: span 1;
          grid-row: span 1;
        }

        .category-card.wide {
          grid-column: span 2;
          grid-row: span 1;
        }

        /* Glossy Light Sweep Effect */
        .category-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -150%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: skewX(-20deg);
          transition: 0.8s;
          z-index: 4;
          pointer-events: none;
        }

        .category-card:hover::before {
          left: 150%;
        }

        .category-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 20px rgba(201, 169, 97, 0.3);
          border-color: rgba(201, 169, 97, 0.6);
          z-index: 10;
        }

        .category-bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-size: cover;
          background-position: center;
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          filter: brightness(0.6) saturate(1.1);
        }

        .category-card:hover .category-bg {
          transform: scale(1.2) rotate(2deg);
          filter: brightness(0.4) saturate(1.3);
        }

        .category-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          transition: all 0.6s ease;
        }

        .category-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: clamp(15px, 3vw, 35px);
          color: white;
        }

        .category-title {
          font-size: clamp(1.2rem, 3vw, 2rem);
          font-weight: 900;
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: clamp(1px, 0.2vw, 2px);
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(0);
          text-shadow: 3px 3px 12px rgba(0, 0, 0, 0.6);
          color: #E8DCC4;
          font-family: "Uncial Antiqua", system-ui;
        }

        .category-card:hover .category-title {
          transform: translateY(-5px) scale(1.05);
          text-shadow: 4px 4px 18px rgba(0, 0, 0, 0.8);
          color: #ffffff;
          letter-spacing: clamp(2px, 0.3vw, 3px);
        }

        .category-subtitle {
          font-size: clamp(0.9rem, 1.8vw, 1.1rem);
          font-weight: 600;
          letter-spacing: clamp(0.5px, 0.15vw, 1.5px);
          opacity: 0.9;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
          color: #C9A961;
          font-family: 'Sacramento', cursive;
          font-style: italic;
        }

        .category-card:hover .category-subtitle {
          opacity: 1;
          letter-spacing: clamp(1px, 0.2vw, 2px);
          color: #ffffff;
          transform: translateY(0);
        }

        .category-card::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent 30%,
            rgba(201, 169, 97, 0.3) 50%,
            transparent 70%
          );
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
          transition: transform 0.8s ease;
          z-index: 3;
          pointer-events: none;
        }

        .category-card:hover::before {
          transform: translateX(100%) translateY(100%) rotate(45deg);
        }

        .category-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 0;
          border-bottom: clamp(40px, 6vh, 60px) solid rgba(201, 169, 97, 0.3);
          border-right: clamp(40px, 6vh, 60px) solid transparent;
          transition: all 0.6s ease;
          z-index: 1;
        }

        .category-card:hover::after {
          border-bottom-color: rgba(232, 220, 196, 0.4);
          border-bottom-width: clamp(50px, 8vh, 80px);
          border-right-width: clamp(50px, 8vh, 80px);
        }

        @media (max-width: 1200px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 968px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .category-card.tall-wide,
          .category-card.wide {
            grid-column: span 2;
            grid-row: span 1;
          }
        }

        @media (max-width: 640px) {
          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: clamp(8px, 2vw, 15px);
          }

          .category-card.tall-wide,
          .category-card.wide {
            grid-column: span 2;
            grid-row: span 1;
          }
        }

        @media (max-width: 480px) {
          .categories-section {
            padding: clamp(15px, 3vh, 30px) clamp(10px, 2vw, 20px);
          }

          .bento-grid {
            grid-template-columns: 1fr;
          }

          .category-card.tall-wide,
          .category-card.wide,
          .category-card.small {
            grid-column: span 1;
            grid-row: span 1;
          }
        }

        @media (orientation: landscape) and (max-height: 600px) {
          .categories-header {
            margin-bottom: 2vh;
          }
          
          .categories-main-title {
            font-size: clamp(1.5rem, 4vh, 2.5rem);
          }
          
          .category-title {
            font-size: clamp(1rem, 2.5vh, 1.5rem);
          }
        }
      `}</style>

      <div className="categories-container">
        <div className="silk-pattern" />
        <div className="satin-sweep" />
        <div className="sparkle-dust">
          {[...Array(25)].map((_, i) => {
            const size = Math.random() * 6 + 2;
            const duration = Math.random() * 10 + 15;
            const delay = Math.random() * -20;
            const twinkleDuration = Math.random() * 3 + 3;
            const left = Math.random() * 100;
            
            return (
              <div 
                key={i} 
                className="particle"
                style={{
                  left: `${left}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  '--float-duration': `${duration}s`,
                  '--twinkle-duration': `${twinkleDuration}s`,
                  '--delay': `${delay}s`,
                  '--min-opacity': Math.random() * 0.2 + 0.1,
                  '--max-opacity': Math.random() * 0.5 + 0.4
                }}
              />
            );
          })}
        </div>
        <div className="aura-blob blob-1" />
        <div className="aura-blob blob-2" />
        
        {/* Prismatic Rays */}
        <div className="prismatic-ray" style={{ '--duration': '12s', top: '0', left: '10%' }} />
        <div className="prismatic-ray" style={{ '--duration': '15s', top: '20%', left: '40%' }} />
        <div className="prismatic-ray" style={{ '--duration': '18s', top: '10%', left: '70%' }} />
        
        {/* Glossy Orbs */}
        <div className="gloss-orb" style={{ width: '200px', height: '200px', top: '10%', left: '15%', '--duration': '10s', '--move-x': '30px', '--move-y': '20px' }} />
        <div className="gloss-orb" style={{ width: '350px', height: '350px', bottom: '15%', right: '10%', '--duration': '15s', '--move-x': '-50px', '--move-y': '-30px' }} />
        <div className="gloss-orb" style={{ width: '150px', height: '150px', top: '40%', right: '25%', '--duration': '12s', '--move-x': '40px', '--move-y': '-40px' }} />

        <div className="glass-sheen" />
        
        <div className="categories-header">
          <h2 className="categories-main-title">Shop by Category</h2>
          <p className="categories-subtitle">Discover Your Perfect Saree</p>
        </div>

        <div className="bento-grid">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`category-card ${category.size}`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div 
                className="category-bg"
                style={{
                  backgroundImage: `url(${category.image})`,
                }}
              />
              <div className="category-overlay" />

              <div className="category-content">
                <h3 className="category-title">{category.title}</h3>
                <p className="category-subtitle">{category.quote}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Grid;
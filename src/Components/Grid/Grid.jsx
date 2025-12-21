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
      image:new3,
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
@import url('https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Great+Vibes&family=Quicksand:wght@300..700&family=Sacramento&family=Satisfy&family=Uncial+Antiqua&display=swap');
        .categories-section {
          width: 100%;
          padding: 80px 20px;
    background: linear-gradient(180deg, #E8DCC4 0%, #D4C5A9 100%);
          position: relative;
          overflow: hidden;
        }

        .categories-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            radial-gradient(circle at 15% 25%, rgba(201, 169, 97, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 85% 75%, rgba(184, 149, 111, 0.08) 0%, transparent 50%);
          pointer-events: none;
        }

        .categories-container {
          max-width: 1400px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .categories-header {
          text-align: center;
          margin-bottom: 60px;
          animation: fadeInDown 1s ease;
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
          font-size: 3.5rem;
          font-weight: 700;
          color: #2d3e3f;
          margin-bottom: 1rem;
          letter-spacing: 3px;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
          font-style: italic;
         font-family: 'Playfair Display', serif;

        }

        .categories-main-title::after {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 100px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #C9A961, transparent);
          border-radius: 2px;
        }

        .categories-subtitle {
          font-size: 1rem;
          color: #5a6c6d;
          margin-top: 30px;
          font-weight: 400;
        }

        .bento-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-auto-rows: 280px;
          gap: 20px;
          animation: fadeInUp 1s ease;
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
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 8px 25px rgba(45, 62, 63, 0.15);
          border: 2px solid rgba(201, 169, 97, 0.2);
        }

        /* Bento Grid Sizes - Matching your reference image layout */
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

        .category-card.tall {
          grid-column: span 1;
          grid-row: span 2;
        }

        .category-card:hover {
          transform: translateY(-15px) scale(1.02);
          box-shadow: 0 25px 60px rgba(45, 62, 63, 0.25);
          border-color: #C9A961;
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
        //   background: linear-gradient(135deg, rgba(45, 62, 63, 0.7) 0%, rgba(31, 43, 44, 0.5) 100%);
          transition: all 0.6s ease;
        }

        // .category-card:hover .category-overlay {
        //   background: linear-gradient(135deg, rgba(201, 169, 97, 0.85) 0%, rgba(184, 149, 111, 0.7) 100%);
        // }

        .category-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 35px;
          color: white;
        }

        .category-title {
          font-size: 2rem;
          font-weight: 900;
          margin-bottom: 5px;
          text-transform: uppercase;
          letter-spacing: 2px;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          transform: translateY(0);
          text-shadow: 3px 3px 12px rgba(0, 0, 0, 0.6);
          color: #E8DCC4;
                     font-family: "Uncial Antiqua", system-ui;

        }

        .category-card:hover .category-title {
          transform: translateY(-8px) scale(1.05);
          text-shadow: 4px 4px 18px rgba(0, 0, 0, 0.8);
          color: #ffffff;
          letter-spacing: 3px;
        }

        .category-subtitle {
          font-size: 1.1rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          opacity: 0.9;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.6);
          color: #C9A961;
         font-family: 'Sacramento', cursive;
          font-style: italic;
        }

        .category-card:hover .category-subtitle {
          opacity: 1;
          letter-spacing: 2px;
          color: #ffffff;
          transform: translateY(0);
        }

        /* Shine effect on hover */
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

        /* Badge Icon - Hidden */
        .category-badge {
          display: none;
        }

        /* Decorative corner accent */
        .category-card::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 0;
          border-bottom: 60px solid rgba(201, 169, 97, 0.3);
          border-right: 60px solid transparent;
          transition: all 0.6s ease;
          z-index: 1;
        }

        .category-card:hover::after {
          border-bottom-color: rgba(232, 220, 196, 0.4);
          border-bottom-width: 80px;
          border-right-width: 80px;
        }

        /* Responsive Design */
        @media (max-width: 1200px) {
          .bento-grid {
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 260px;
          }

          .category-card.tall-wide,
          .category-card.tall {
            grid-column: span 1;
            grid-row: span 2;
          }

          .category-card.wide {
            grid-column: span 2;
          }

          .category-card.small {
            grid-column: span 1;
          }
        }

        @media (max-width: 968px) {
          .categories-section {
            padding: 60px 20px;
          }

          .categories-main-title {
            font-size: 2.5rem;
          }

          .bento-grid {
            grid-template-columns: repeat(2, 1fr);
            grid-auto-rows: 240px;
            gap: 15px;
          }

          .category-card.tall-wide,
          .category-card.wide,
          .category-card.tall {
            grid-column: span 2;
            grid-row: span 1;
          }

          .category-card.small {
            grid-column: span 1;
          }

          .category-title {
            font-size: 2.2rem;
          }

          .category-subtitle {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .categories-section {
            padding: 40px 15px;
          }

          .categories-main-title {
            font-size: 2rem;
            letter-spacing: 2px;
          }

          .categories-subtitle {
            font-size: 1rem;
          }

          .bento-grid {
            grid-template-columns: 1fr;
            grid-auto-rows: 220px;
            gap: 15px;
          }

          .category-card.tall-wide,
          .category-card.wide,
          .category-card.tall,
          .category-card.small {
            grid-column: span 1;
            grid-row: span 1;
          }

          .category-content {
            padding: 25px;
          }

          .category-badge {
            width: 45px;
            height: 45px;
            top: 20px;
            right: 20px;
          }

          .badge-icon {
            width: 22px;
            height: 22px;
          }

          .category-title {
            font-size: 1.9rem;
          }

          .category-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="categories-container">
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
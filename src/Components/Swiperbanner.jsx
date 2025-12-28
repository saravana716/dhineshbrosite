import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-creative';
import 'swiper/css/pagination';
import bannerImage from "../assets/bn1.webp";
import bannerImage1 from "../assets/bn2.jpg";
import bannerImage2 from "../assets/bn3.webp";
import bannerImage3 from "../assets/bn5.jpg";
import bannerImage4 from "../assets/bn4.webp";
import bannerImage5 from "../assets/13.jpg";
import bannerImage6 from "../assets/bn6.webp";
import bannerImage7 from "../assets/15.jpg";
import bannerImage8 from "../assets/18.png";
import bannerImage9 from "../assets/19.webp";
import bannerImage10 from "../assets/853179.jpg";
import bannerImage11 from "../assets/ui.avif";

import { Autoplay, EffectCreative, Pagination } from 'swiper/modules';

const Swiperbanner = () => {
  const bannerSlides = [
    {
      image: bannerImage,
      category: "NEW ARRIVALS",
      title: "Exquisite Bridal",
      highlight: "Collection",
      description: "Where tradition meets contemporary elegance",
      btnText: "Explore Now"
    },
    {
      image: bannerImage1,
      category: "HERITAGE",
      title: "Timeless Silk",
      highlight: "Sarees",
      description: "Handwoven masterpieces for your special moments",
      btnText: "Discover More"
    },
    {
      image: bannerImage2,
      category: "DESIGNER",
      title: "Royal Lehengas",
      highlight: "Edition",
      description: "Couture craftsmanship for the modern bride",
      btnText: "Shop Collection"
    },
    {
      image: bannerImage3,
      category: "EXCLUSIVE",
      title: "Premium Drapes",
      highlight: "2024",
      description: "Luxury fabrics adorned with intricate artistry",
      btnText: "View Gallery"
    },
    {
      image: bannerImage4,
      category: "FESTIVE",
      title: "Celebration",
      highlight: "Wear",
      description: "Vibrant colors and elegant designs for every occasion",
      btnText: "Browse Now"
    },
    {
      image: bannerImage5,
      category: "CONTEMPORARY",
      title: "Modern Ethnic",
      highlight: "Fusion",
      description: "Bold designs reimagined for today's woman",
      btnText: "Get Inspired"
    },
    {
      image: bannerImage6,
      category: "WEDDING",
      title: "Bridal Elegance",
      highlight: "Suite",
      description: "Your dream wedding attire awaits",
      btnText: "Find Yours"
    },
    {
      image: bannerImage7,
      category: "LUXURY",
      title: "Regal Statement",
      highlight: "Pieces",
      description: "Opulence redefined in every thread",
      btnText: "Explore Luxe"
    },
    {
      image: bannerImage8,
      category: "TRADITIONAL",
      title: "Classic Grace",
      highlight: "Collection",
      description: "Time-honored designs for the discerning connoisseur",
      btnText: "Shop Tradition"
    },
    {
      image: bannerImage9,
      category: "PREMIUM",
      title: "Majestic Drapes",
      highlight: "Series",
      description: "Where royalty meets modern sophistication",
      btnText: "View More"
    },
    {
      image: bannerImage10,
      category: "CELEBRATION",
      title: "Festive Glamour",
      highlight: "Edit",
      description: "Shine bright at every celebration",
      btnText: "Discover Style"
    },
    {
      image: bannerImage11,
      category: "SIGNATURE",
      title: "Artisan Crafted",
      highlight: "Excellence",
      description: "Handpicked designs from master weavers",
      btnText: "Explore Craft"
    }
  ];

  return (
    <div className="swiper-banner-wrapper">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;600;700&family=Montserrat:wght@300;400;600;700&family=Playfair+Display:wght@400;700;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .swiper-banner-wrapper {
          width: 100vw;
          height: 100vh;
          position: relative;
          overflow: hidden;
          background: #000;
        }

        .creative-banner-swiper {
          width: 100%;
          height: 100%;
        }

        .creative-banner-slide {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        /* Image with parallax and zoom */
        .creative-slide-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transform: scale(1);
          transition: transform 8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .swiper-slide-active .creative-slide-image {
          transform: scale(1.15);
        }

        /* Multi-layer gradient overlay */
        .creative-slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            radial-gradient(circle at 30% 50%, rgba(201, 169, 97, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, rgba(0, 0, 0, 0.7) 0%, rgba(31, 43, 44, 0.5) 50%, rgba(0, 0, 0, 0.8) 100%);
          z-index: 1;
        }

        /* Animated particles overlay */
        .creative-particles-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: 
            radial-gradient(2px 2px at 20% 30%, rgba(201, 169, 97, 0.3), transparent),
            radial-gradient(2px 2px at 60% 70%, rgba(232, 220, 196, 0.3), transparent),
            radial-gradient(1px 1px at 50% 50%, rgba(201, 169, 97, 0.2), transparent),
            radial-gradient(1px 1px at 80% 10%, rgba(232, 220, 196, 0.2), transparent);
          background-size: 200px 200px, 300px 300px, 150px 150px, 250px 250px;
          background-position: 0 0, 40px 60px, 130px 270px, 70px 100px;
          animation: creativeParticlesFloat 20s linear infinite;
          opacity: 0;
          z-index: 2;
        }

        .swiper-slide-active .creative-particles-overlay {
          animation: creativeParticlesFloat 20s linear infinite, creativeParticlesFadeIn 1s ease-out forwards;
        }

        @keyframes creativeParticlesFloat {
          0% { transform: translateY(0); }
          100% { transform: translateY(-100px); }
        }

        @keyframes creativeParticlesFadeIn {
          to { opacity: 1; }
        }

        /* Content container with split layout */
        .creative-slide-content {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          padding: 0 clamp(20px, 8vw, 120px);
        }

        .creative-content-wrapper {
          max-width: 1400px;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(40px, 6vw, 80px);
          align-items: center;
        }

        .creative-content-left {
          text-align: left;
          position: relative;
        }

        /* Category tag with animated border */
        .creative-category-tag {
          display: inline-block;
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(0.75rem, 1.2vw, 0.9rem);
          font-weight: 600;
          letter-spacing: clamp(2px, 0.4vw, 4px);
          color: #C9A961;
          padding: clamp(8px, 1.2vh, 12px) clamp(20px, 2.5vw, 28px);
          border: 2px solid #C9A961;
          border-radius: 50px;
          position: relative;
          overflow: hidden;
          margin-bottom: clamp(20px, 3vh, 30px);
          opacity: 0;
          transform: translateX(-50px);
        }

        .swiper-slide-active .creative-category-tag {
          animation: creativeSlideInLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s forwards;
        }

        .creative-category-tag::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(201, 169, 97, 0.3), transparent);
          animation: creativeShimmer 3s infinite;
        }

        @keyframes creativeShimmer {
          0% { left: -100%; }
          50%, 100% { left: 200%; }
        }

        /* Main title with split animation */
        .creative-main-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3rem, 8vw, 7rem);
          font-weight: 900;
          line-height: 1;
          color: #E8DCC4;
          margin-bottom: clamp(10px, 1.5vh, 15px);
          text-transform: uppercase;
          letter-spacing: clamp(2px, 0.5vw, 4px);
          opacity: 0;
          transform: translateY(80px);
        }

        .swiper-slide-active .creative-main-title {
          animation: creativeTitleRise 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s forwards;
        }

        @keyframes creativeTitleRise {
          0% {
            opacity: 0;
            transform: translateY(80px) scale(0.9);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
          }
        }

        /* Highlight text with gradient */
        .creative-highlight-text {
          font-family: 'Playfair Display', serif;
          font-size: clamp(3.5rem, 9vw, 8rem);
          font-weight: 900;
          line-height: 0.9;
          background: linear-gradient(135deg, #C9A961 0%, #F4D03F 50%, #C9A961 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-transform: uppercase;
          letter-spacing: clamp(2px, 0.5vw, 4px);
          margin-bottom: clamp(20px, 3vh, 30px);
          opacity: 0;
          transform: translateX(-80px) rotateY(-20deg);
          display: block;
        }

        .swiper-slide-active .creative-highlight-text {
          animation: creativeHighlightSlide 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s forwards,
                     creativeGradientShift 3s ease infinite;
        }

        @keyframes creativeHighlightSlide {
          0% {
            opacity: 0;
            transform: translateX(-80px) rotateY(-20deg);
            filter: blur(10px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0);
            filter: blur(0);
          }
        }

        @keyframes creativeGradientShift {
          0%, 100% { background-position: 0% center; }
          50% { background-position: 100% center; }
        }

        /* Description with line reveal */
        .creative-description {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 1.8vw, 1.4rem);
          font-weight: 300;
          line-height: 1.6;
          color: #E8DCC4;
          max-width: 500px;
          margin-bottom: clamp(25px, 4vh, 35px);
          position: relative;
          opacity: 0;
          padding-left: 25px;
        }

        .creative-description::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          width: 3px;
          height: 0;
          background: linear-gradient(180deg, #C9A961, transparent);
        }

        .swiper-slide-active .creative-description {
          animation: creativeDescriptionFadeIn 1s ease 0.8s forwards;
        }

        .swiper-slide-active .creative-description::before {
          animation: creativeLineGrow 1s ease 0.8s forwards;
        }

        @keyframes creativeDescriptionFadeIn {
          to {
            opacity: 1;
          }
        }

        @keyframes creativeLineGrow {
          to {
            height: 100%;
          }
        }

        /* CTA Button with morphing effect */
        .creative-cta-button {
          font-family: 'Montserrat', sans-serif;
          font-size: clamp(0.9rem, 1.3vw, 1.1rem);
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #1f2b2c;
          background: linear-gradient(135deg, #C9A961, #F4D03F);
          border: none;
          padding: clamp(14px, 2vh, 18px) clamp(35px, 4vw, 50px);
          border-radius: 50px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 10px 40px rgba(201, 169, 97, 0.4);
          opacity: 0;
          transform: scale(0.8);
        }

        .swiper-slide-active .creative-cta-button {
          animation: creativeButtonPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 1s forwards,
                     creativeButtonFloat 3s ease-in-out 2s infinite;
        }

        @keyframes creativeButtonPop {
          0% {
            opacity: 0;
            transform: scale(0.8) rotateZ(-5deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateZ(0);
          }
        }

        @keyframes creativeButtonFloat {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .creative-cta-button::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .creative-cta-button:hover::before {
          width: 300px;
          height: 300px;
        }

        .creative-cta-button:hover {
          transform: translateY(-5px) scale(1.05);
          box-shadow: 0 15px 50px rgba(201, 169, 97, 0.6);
        }

        .creative-cta-button span {
          position: relative;
          z-index: 1;
        }

        /* Right side decorative element */
        .creative-content-right {
          position: relative;
          height: clamp(300px, 50vh, 500px);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Animated circle frame */
        .creative-circle-frame {
          width: clamp(250px, 35vw, 450px);
          height: clamp(250px, 35vw, 450px);
          border-radius: 50%;
          border: 3px solid rgba(201, 169, 97, 0.3);
          position: relative;
          opacity: 0;
          transform: scale(0.5) rotate(-45deg);
        }

        .swiper-slide-active .creative-circle-frame {
          animation: creativeCircleExpand 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.5s forwards,
                     creativeCircleRotate 20s linear infinite;
        }

        @keyframes creativeCircleExpand {
          to {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        @keyframes creativeCircleRotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        /* Inner decorative rings */
        .creative-circle-frame::before,
        .creative-circle-frame::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          border: 2px solid rgba(201, 169, 97, 0.2);
        }

        .creative-circle-frame::before {
          width: 80%;
          height: 80%;
          animation: creativePulseRing 3s ease-in-out infinite;
        }

        .creative-circle-frame::after {
          width: 60%;
          height: 60%;
          animation: creativePulseRing 3s ease-in-out 1.5s infinite;
        }

        @keyframes creativePulseRing {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.1);
            opacity: 0.8;
          }
        }

        /* Decorative dots */
        .creative-circle-frame .creative-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          background: #C9A961;
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(201, 169, 97, 0.6);
        }

        .creative-circle-frame .creative-dot:nth-child(1) {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .creative-circle-frame .creative-dot:nth-child(2) {
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }

        .creative-circle-frame .creative-dot:nth-child(3) {
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }

        .creative-circle-frame .creative-dot:nth-child(4) {
          top: 50%;
          right: 0;
          transform: translateY(-50%);
        }

        /* Pagination styling */
        .creative-banner-swiper .swiper-pagination {
          bottom: 40px !important;
        }

        .creative-banner-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(201, 169, 97, 0.3);
          opacity: 1;
          transition: all 0.3s ease;
        }

        .creative-banner-swiper .swiper-pagination-bullet-active {
          width: 40px;
          border-radius: 6px;
          background: linear-gradient(90deg, #C9A961, #F4D03F);
          box-shadow: 0 0 20px rgba(201, 169, 97, 0.6);
        }

        @keyframes creativeSlideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .creative-content-wrapper {
            grid-template-columns: 1fr;
            gap: clamp(20px, 4vh, 40px);
          }

          .creative-content-right {
            height: clamp(200px, 30vh, 300px);
          }

          .creative-circle-frame {
            width: clamp(200px, 30vw, 300px);
            height: clamp(200px, 30vw, 300px);
          }
        }

        @media (max-width: 768px) {
          .creative-content-left {
            text-align: center;
          }

          .creative-description {
            margin-left: auto;
            margin-right: auto;
            padding-left: 0;
          }

          .creative-description::before {
            display: none;
          }

          .creative-content-right {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .swiper-banner-wrapper {
            height: 100vh;
          }

          .creative-slide-content {
            padding: 0 20px;
          }

          .creative-main-title {
            font-size: clamp(2rem, 10vw, 3rem);
          }

          .creative-highlight-text {
            font-size: clamp(2.5rem, 12vw, 4rem);
          }
        }
      `}</style>

      <Swiper
        modules={[Autoplay, EffectCreative, Pagination]}
        effect="creative"
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ['-20%', 0, -1],
            opacity: 0,
          },
          next: {
            translate: ['100%', 0, 0],
            opacity: 0,
          },
        }}
        speed={1200}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        className="creative-banner-swiper"
      >
        {bannerSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="creative-banner-slide">
              <img 
                src={slide.image} 
                alt={slide.title}
                className="creative-slide-image"
              />
              <div className="creative-slide-overlay"></div>
              <div className="creative-particles-overlay"></div>
              
              <div className="creative-slide-content">
                <div className="creative-content-wrapper">
                  <div className="creative-content-left">
                    <span className="creative-category-tag">{slide.category}</span>
                    <h1 className="creative-main-title">{slide.title}</h1>
                    <span className="creative-highlight-text">{slide.highlight}</span>
                    <p className="creative-description">{slide.description}</p>
                    <button className="creative-cta-button">
                      <span>{slide.btnText}</span>
                    </button>
                  </div>
                  
                  <div className="creative-content-right">
                    <div className="creative-circle-frame">
                      <span className="creative-dot"></span>
                      <span className="creative-dot"></span>
                      <span className="creative-dot"></span>
                      <span className="creative-dot"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Swiperbanner;
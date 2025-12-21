import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import "./Banner.css";
import bannerImage from "../../assets/11.webp";
import bannerImage1 from "../../assets/1.webp";
import bannerImage2 from "../../assets/6.webp";
import bannerImage3 from "../../assets/14.jpg";
import bannerImage4 from "../../assets/8.webp";
import bannerImage5 from "../../assets/13.jpg";
import bannerImage6 from "../../assets/10.webp";
import bannerImage7 from "../../assets/15.jpg";
import bannerImage8 from "../../assets/18.png";
import bannerImage9 from "../../assets/19.webp";
import bannerImage10 from "../../assets/853179.jpg";
import bannerImage11 from "../../assets/ui.avif";

// Import required modules
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

const Banner = () => {
  const bannerSlides = [
    {
      image: bannerImage,
      title: "Bridal Collection 2024",
      subtitle: "Elegance Redefined",
      btnText: "Shop The Look"
    },
    {
      image: bannerImage1,
      title: "Traditional Sarees",
      subtitle: "Heritage Meets Fashion",
      btnText: "Discover More"
    },
    {
      image: bannerImage2,
      title: "Designer Lehengas",
      subtitle: "Your Dream Wedding Awaits",
      btnText: "Explore Collection"
    },
    {
      image: bannerImage3,
      title: "Exclusive Bridal Wear",
      subtitle: "Make Your Day Special",
      btnText: "View Trends"
    },
    {
      image: bannerImage4,
      title: "Festive Collections",
      subtitle: "Celebrate in Style",
      btnText: "Shop Now"
    },
    {
      image: bannerImage5,
      title: "Contemporary Fashion",
      subtitle: "Modern Elegance",
      btnText: "Get Inspired"
    },
    {
      image: bannerImage6,
      title: "Wedding Specials",
      subtitle: "Timeless Beauty",
      btnText: "Find Your Style"
    },
    {
      image: bannerImage7,
      title: "Premium Designs",
      subtitle: "Luxury Redefined",
      btnText: "Explore Luxe"
    },
    {
      image: bannerImage8,
      title: "Ethnic Elegance",
      subtitle: "Traditional Charm",
      btnText: "Browse Collection"
    },
    {
      image: bannerImage9,
      title: "Royal Collections",
      subtitle: "Majestic Designs",
      btnText: "Shop Royalty"
    },
    {
      image: bannerImage10,
      title: "Festive Glamour",
      subtitle: "Celebrate with Style",
      btnText: "View Gallery"
    },
    {
      image: bannerImage11,
      title: "Signature Collection",
      subtitle: "Handcrafted Excellence",
      btnText: "Discover Craft"
    }
  ];

  return (
    <div className="banner-container">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Sacramento&display=swap');

        .banner-container {
          width: 100%;
          height: 100vh;
          position: relative;
          overflow: hidden;
          margin-top: 0vh;
        }

        .mySwiper {
          width: 100%;
          height: 100%;
        }

        .slide-content {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .banner-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          animation: kenBurns 10s ease-in-out infinite alternate;
          transition: transform 0.8s ease;
        }

        @keyframes kenBurns {
          0% {
            transform: scale(1) translateX(0);
          }
          50% {
            transform: scale(1.08) translateX(-20px);
          }
          100% {
            transform: scale(1.12) translateX(0);
          }
        }

        .banner-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            135deg,
            rgba(45, 62, 63, 0.75) 0%,
            rgba(31, 43, 44, 0.65) 50%,
            rgba(45, 62, 63, 0.75) 100%
          );
          display: flex;
          align-items: center;
          justify-content: center;
          animation: overlayPulse 4s ease-in-out infinite;
          transition: background 1s ease;
        }

        @keyframes overlayPulse {
          0%, 100% {
            background: linear-gradient(135deg, rgba(45, 62, 63, 0.75) 0%, rgba(31, 43, 44, 0.65) 50%, rgba(45, 62, 63, 0.75) 100%);
          }
          50% {
            background: linear-gradient(135deg, rgba(45, 62, 63, 0.65) 0%, rgba(31, 43, 44, 0.55) 50%, rgba(45, 62, 63, 0.65) 100%);
          }
        }

        .banner-text {
          text-align: center;
          color: white;
          z-index: 2;
          position: relative;
          padding: 0 20px;
        }

        .swiper-slide-active .banner-text {
          animation: textEntrance 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }

        @keyframes textEntrance {
          0% {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .banner-title {
          font-size: 5.5rem;
          font-weight: 400;
          margin-bottom: 0.3rem;
          letter-spacing: 8px;
          font-family: 'Bebas Neue', sans-serif;
          text-transform: uppercase;
          text-shadow: 3px 3px 0px rgba(0, 0, 0, 0.8),
                       6px 6px 0px rgba(0, 0, 0, 0.6),
                       9px 9px 20px rgba(0, 0, 0, 0.9);
          color: #E8DCC4;
          transition: all 0.6s ease;
          position: relative;
          line-height: 1;
        }

        .swiper-slide-active .banner-title {
          animation: titleSlide 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
        }

        @keyframes titleSlide {
          0% {
            opacity: 0;
            transform: translateY(-80px) scale(0.8);
            filter: blur(15px);
            letter-spacing: 25px;
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
            filter: blur(0);
            letter-spacing: 8px;
          }
        }

        .banner-subtitle {
          font-size: 2.8rem;
          margin-bottom: 2.8rem;
          font-weight: 400;
          letter-spacing: 6px;
          font-family: 'Sacramento', cursive;
          text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.9);
          transition: all 0.6s ease;
          color: #C9A961;
          line-height: 1.2;
          position: relative;
        }

        .banner-subtitle::before {
          content: '';
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 2px;
          background: linear-gradient(90deg, transparent, #C9A961, transparent);
        }

        .swiper-slide-active .banner-subtitle {
          animation: subtitleSlide 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s both;
        }

        @keyframes subtitleSlide {
          0% {
            opacity: 0;
            transform: translateX(120px) rotateY(20deg);
            filter: blur(15px);
          }
          100% {
            opacity: 1;
            transform: translateX(0) rotateY(0);
            filter: blur(0);
          }
        }

        .banner-btn {
          padding: 20px 55px;
          font-size: 1.2rem;
          font-weight: 700;
          border: none;
          border-radius: 60px;
          cursor: pointer;
          text-transform: uppercase;
          letter-spacing: 3px;
          position: relative;
          overflow: hidden;
          transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          background: linear-gradient(135deg, #C9A961 0%, #B8956F 50%, #D4AF37 100%);
          color: #1f2b2c;
          box-shadow: 0 10px 30px rgba(201, 169, 97, 0.4);
          transform-style: preserve-3d;
          border: 2px solid rgba(201, 169, 97, 0.3);
        }

        .swiper-slide-active .banner-btn {
          animation: btnEntrance 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s both, 
                     btnFloat 4s ease-in-out 2.5s infinite,
                     btnPulse 2s ease-in-out 2.5s infinite;
        }

        @keyframes btnEntrance {
          0% {
            opacity: 0;
            transform: translateY(100px) scale(0.6) rotateX(-20deg);
          }
          60% {
            transform: translateY(-10px) scale(1.05) rotateX(5deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotateX(0);
          }
        }

        @keyframes btnFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-15px) scale(1.03);
          }
        }

        @keyframes btnPulse {
          0%, 100% {
            box-shadow: 0 10px 30px rgba(201, 169, 97, 0.4);
          }
          50% {
            box-shadow: 0 10px 40px rgba(201, 169, 97, 0.7), 0 0 20px rgba(201, 169, 97, 0.5);
          }
        }

        /* Animated gradient background */
        .banner-btn::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: linear-gradient(
            45deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
          transform: rotate(0deg);
          transition: transform 1s ease;
        }

        .banner-btn:hover::before {
          transform: rotate(360deg);
        }

        /* Shimmer shine effect */
        .banner-btn::after {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.4),
            transparent
          );
          transition: left 0.7s ease;
          transform: skewX(-20deg);
        }

        .banner-btn:hover::after {
          left: 150%;
        }

        .banner-btn:hover {
          transform: translateY(-10px) scale(1.1) rotateZ(1deg);
          box-shadow: 0 20px 50px rgba(201, 169, 97, 0.6), 
                      0 0 30px rgba(201, 169, 97, 0.4),
                      inset 0 0 20px rgba(255, 255, 255, 0.1);
          background: linear-gradient(135deg, #D4AF37 0%, #C9A961 50%, #B8956F 100%);
          border-color: rgba(201, 169, 97, 0.6);
          color: #ffffff;
        }

        .banner-btn:active {
          transform: translateY(-5px) scale(1.05);
          transition: all 0.15s ease;
          box-shadow: 0 10px 30px rgba(201, 169, 97, 0.5);
        }

        /* Glow effect on active slide */
        .swiper-slide-active .banner-btn {
          animation: btnEntrance 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.7s both, 
                     btnFloat 4s ease-in-out 2.5s infinite,
                     btnGlow 3s ease-in-out 2.5s infinite;
        }

        @keyframes btnGlow {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.15);
          }
        }

        /* Navigation Buttons - Matching navbar theme */
        .swiper-button-next,
        .swiper-button-prev {
          color: #E8DCC4;
          background: rgba(201, 169, 97, 0.15);
          backdrop-filter: blur(12px);
          width: 65px;
          height: 65px;
          border-radius: 50%;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 2px solid rgba(201, 169, 97, 0.3);
        }

        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 26px;
          font-weight: bold;
          transition: all 0.3s ease;
          color: #C9A961;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(201, 169, 97, 0.25);
          transform: scale(1.15);
          border-color: #C9A961;
          box-shadow: 0 3px 10px rgba(201, 169, 97, 0.3);
        }

        .swiper-button-next:hover::after,
        .swiper-button-prev:hover::after {
          transform: scale(1.1);
          color: #E8DCC4;
        }

        /* Decorative Elements */
        .banner-text::before {
          content: '';
          position: absolute;
          top: -60px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, transparent, #C9A961, transparent);
          border-radius: 2px;
        }

        .swiper-slide-active .banner-text::before {
          animation: lineExpand 1.2s cubic-bezier(0.4, 0, 0.2, 1) 1s both;
        }

        @keyframes lineExpand {
          0% {
            width: 0;
            opacity: 0;
          }
          100% {
            width: 120px;
            opacity: 1;
          }
        }

        /* Particles effect */
        .banner-text::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(201, 169, 97, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: particleFloat 20s linear infinite;
          pointer-events: none;
        }

        @keyframes particleFloat {
          0% {
            transform: translate(-50%, -50%) translateY(0);
          }
          100% {
            transform: translate(-50%, -50%) translateY(-100px);
          }
        }

        /* Responsive Design */
        @media (max-width: 968px) {
          .banner-title {
            font-size: 4rem;
            letter-spacing: 6px;
          }

          .banner-subtitle {
            font-size: 2.2rem;
            letter-spacing: 4px;
          }

          .banner-btn {
            padding: 16px 45px;
            font-size: 1.05rem;
          }

          .swiper-button-next,
          .swiper-button-prev {
            width: 55px;
            height: 55px;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 22px;
          }
        }

        @media (max-width: 768px) {
          .banner-title {
            font-size: 3rem;
            letter-spacing: 4px;
          }

          .banner-subtitle {
            font-size: 1.8rem;
            letter-spacing: 3px;
          }

          .banner-btn {
            padding: 14px 35px;
            font-size: 0.95rem;
          }

          .swiper-button-next,
          .swiper-button-prev {
            width: 50px;
            height: 50px;
          }

          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 20px;
          }
        }

        @media (max-width: 480px) {
          .banner-title {
            font-size: 2.2rem;
            letter-spacing: 2px;
          }

          .banner-subtitle {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            letter-spacing: 2px;
          }

          .banner-btn {
            padding: 12px 28px;
            font-size: 0.85rem;
            letter-spacing: 1.5px;
          }
        }
      `}</style>

      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        speed={1800}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={false}
        pagination={false}
        effect="fade"
        fadeEffect={{
          crossFade: true
        }}
        loop={true}
        modules={[Autoplay, Navigation, EffectFade]}
        className="mySwiper"
      >
        {bannerSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide-content">
              <img 
                src={slide.image} 
                alt={`Banner ${index + 1}`}
                className="banner-image"
              />
              <div className="banner-overlay">
                <div className="banner-text">
                  <h1 className="banner-title">{slide.title}</h1>
                  <p className="banner-subtitle">{slide.subtitle}</p>
                  <button className="banner-btn">
                    <span style={{position: 'relative', zIndex: 1}}>{slide.btnText}</span>
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
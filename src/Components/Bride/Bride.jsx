import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import img1 from "../../assets/c1.avif";
import img2 from "../../assets/c2.avif";
import img3 from "../../assets/c3.avif";
import img4 from "../../assets/c4.avif";
import img5 from "../../assets/c5.avif";
import img6 from "../../assets/c6.avif";

const Bride = () => {
  const columns = [
    [img1, img2, img3, img4],
    [img5, img6, img2, img1],
    [img3, img4, img5, img6],
  ];

  return (
    <section className="bride-section">
      <style>{`
        .bride-section {
          width: 100%;
          height:100vh;
          background: linear-gradient(180deg, #f5f1e8 0%, #e8dcc4 100%);
              background: linear-gradient(180deg, #E8DCC4 0%, #D4C5A9 100%);
          padding: 80px 20px;
        }

        .bride-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 40px;
          align-items: stretch;
          height:100%;
        }

        .columns {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          min-height: 520px;
        }

        .sliderColumn {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        //   border: 2px solid #6b7280;
          box-shadow: 0 10px 30px rgba(0,0,0,0.2);
          backdrop-filter: blur(2px);
        }

        .bride-slide {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .bride-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: saturate(1.05) contrast(1.02);
          transform: scale(1.02);
          clip-path: none;
        }

        .slide-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(31,43,44,0.0) 0%, rgba(31,43,44,0.15) 100%);
        }

        /* accent strip removed per request */

        .rightContent {
          position: relative;
          border-radius: 20px;
          padding: 40px 32px;
          background: rgba(255,255,255,0.7);
          box-shadow: 0 10px 30px rgba(45,62,63,0.18);
          border: 2px solid rgba(201, 169, 97, 0.3);
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .rightContent::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          border-bottom: 70px solid rgba(201,169,97,0.25);
          border-right: 70px solid transparent;
          width: 0;
          height: 0;
        }

        .tag {
          display:flex;
          background: linear-gradient(90deg, rgba(201,169,97,0.25), rgba(232,220,196,0.4));
          color: var(--text-dark, #1f2b2c);
          font-weight: 600;
          letter-spacing: 3px;
          padding: 6px 12px;
          border-radius: 999px;
          margin-bottom: 14px;
          font-size: 0.85rem;
          width:250px;
          justify-content:center;
          align-items:center;
          text-align:center;
        }

        .titles {
          font-family: 'Playfair Display', serif;
          font-size: 3.6rem;
          letter-spacing: 10px;
          color: var(--text-dark, #1f2b2c);
          margin-bottom: 14px;
        }

        .subtitles {
          font-size: 1rem;
          color: #5a6c6d;
          margin-bottom: 28px;
        }

        .contentText {
          font-size: 1rem;
          color: #2d3e3f;
          line-height: 1.9;
          letter-spacing: 0.2px;
        }

        .ctaRow {
          margin-top: 28px;
          display: flex;
          gap: 12px;
          align-items: center;
        }

        .ctaBtn {
          background: linear-gradient(90deg, #C9A961, #B8956F);
          color: #fff;
          border: none;
          padding: 12px 20px;
          border-radius: 12px;
          font-weight: 700;
          letter-spacing: 0.6px;
          cursor: pointer;
          box-shadow: 0 8px 24px rgba(201,169,97,0.35);
        }

        .signature {
          margin-left: auto;
          font-family: 'Playfair Display', serif;
          color: #2d3e3f;
          opacity: 0.8;
          font-size: 1.2rem;
          letter-spacing: 2px;
        }

        @media (max-width: 1024px) {
          .bride-container {
            grid-template-columns: 1fr;
          }
          .columns {
            min-height: 420px;
          }
          .titles {
            font-size: 3rem;
            letter-spacing: 8px;
          }
        }

        @media (max-width: 560px) {
          .bride-section { padding: 50px 14px; }
          .columns { grid-template-columns: 1fr; min-height: 360px; }
          .rightContent { padding: 24px 18px; }
          .titles { font-size: 2.2rem; letter-spacing: 6px; }
          .subtitles { font-size: 0.95rem; }
        }
      `}</style>

      <div className="bride-container">
        <div className="columns">
          {columns.map((col, i) => (
            <div className="sliderColumn" key={i}>
              <Swiper
                modules={[Autoplay, EffectFade]}
                direction="vertical"
                slidesPerView={1}
                loop
                speed={i === 1 ? 700 : 900}
                autoplay={{
                  delay: i === 1 ? 2000 : 2400,
                  disableOnInteraction: false,
                }}
                effect={i === 1 ? "fade" : undefined}
              >
                {col.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bride-slide">
                      <img src={src} alt="Bridal" className="bride-img" />
                      <div className="slide-overlay" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ))}
        </div>

        <div className="rightContent">
          <span className="tag">Inspired by tradition</span>
          <h2 className="titles">BRIDE</h2>
          <p className="subtitles">
            Elegant silhouettes, timeless craft, curated for your big day.
          </p>
          <p className="contentText">
            An embodiment of regal heritage and modern allure, our sarees are
            designed for women who command elegance with quiet power and
            effortless confidence. Drawing inspiration from royal traditions and
            timeless Indian artistry, each drape is meticulously crafted using
            luxurious fabrics, refined textures, and graceful silhouettes,
            reimagined through a contemporary, fashion-forward lens. Created for
            brides, celebratory moments, and modern muses alike, these sarees
            transcend fleeting trends to become enduring statements of culture,
            sophistication, and couture-level craftsmanship.
          </p>

          <div className="ctaRow">
            <button className="ctaBtn">Explore Bridal Collection</button>
            <span className="signature">ANATA</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Bride;

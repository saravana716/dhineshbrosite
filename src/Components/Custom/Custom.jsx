import React from 'react';

const Custom = () => {
  // const features = [
  //   {
  //     icon: (
  //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2"/>
  //         <path d="M32 12L36 24L48 26L40 34L42 46L32 40L22 46L24 34L16 26L28 24L32 12Z" fill="currentColor"/>
  //       </svg>
  //     ),
  //     title: "Premium Materials",
  //     description: "Finest fabrics carefully selected"
  //   },
  //   {
  //     icon: (
  //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <path d="M20 44L32 52L44 44M32 12V28M32 28L20 36L32 44L44 36L32 28Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  //         <path d="M32 28L44 20L32 12L20 20L32 28Z" fill="currentColor" opacity="0.3"/>
  //       </svg>
  //     ),
  //     title: "Artisan Crafted",
  //     description: "Handmade by skilled weavers"
  //   },
  //   {
  //     icon: (
  //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <rect x="16" y="16" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
  //         <path d="M24 24H40M24 32H40M24 40H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  //         <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
  //       </svg>
  //     ),
  //     title: "Heritage Design",
  //     description: "Inspired by timeless traditions"
  //   },
  //   {
  //     icon: (
  //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <path d="M32 12C32 12 20 18 20 32C20 46 32 52 32 52C32 52 44 46 44 32C44 18 32 12 32 12Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
  //         <path d="M28 32L30 34L36 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  //       </svg>
  //     ),
  //     title: "Handwoven Care",
  //     description: "Woven with love and precision"
  //   },
  //   {
  //     icon: (
  //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2"/>
  //         <path d="M32 22V32L38 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  //         <circle cx="32" cy="32" r="3" fill="currentColor"/>
  //       </svg>
  //     ),
  //     title: "Quality Assured",
  //     description: "Checked at every stage"
  //   },
  //   {
  //     icon: (
  //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <path d="M32 14L38 26H50L40 34L44 46L32 38L20 46L24 34L14 26H26L32 14Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
  //         <circle cx="32" cy="32" r="6" stroke="currentColor" strokeWidth="2"/>
  //       </svg>
  //     ),
  //     title: "Authentic Promise",
  //     description: "100% genuine sarees"
  //   },
  //   {
  //     icon: (
  //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <rect x="18" y="18" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="2"/>
  //         <path d="M26 18V14C26 12.8954 26.8954 12 28 12H36C37.1046 12 38 12.8954 38 14V18" stroke="currentColor" strokeWidth="2"/>
  //         <path d="M26 32L30 36L38 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  //       </svg>
  //     ),
  //     title: "Perfect Finish",
  //     description: "Expert final detailing"
  //   },
  //   {
  //     icon: (
  //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <rect x="16" y="20" width="32" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
  //         <path d="M22 20V16C22 14.8954 22.8954 14 24 14H40C41.1046 14 42 14.8954 42 16V20" stroke="currentColor" strokeWidth="2"/>
  //         <path d="M28 32H36M28 38H34" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  //       </svg>
  //     ),
  //     title: "Safe Packing",
  //     description: "Neatly folded and protected"
  //   },
  //   {
  //     icon: (
  //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <rect x="14" y="22" width="36" height="24" rx="2" stroke="currentColor" strokeWidth="2"/>
  //         <path d="M14 30H50M22 18V22M42 18V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  //         <circle cx="38" cy="36" r="4" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.3"/>
  //       </svg>
  //     ),
  //     title: "Secure Shipping",
  //     description: "Delivered safely on time"
  //   },
  //   {
  //     icon: (
  //       <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <path d="M32 12C32 12 44 18 44 32C44 46 32 52 32 52C32 52 20 46 20 32C20 18 32 12 32 12Z" stroke="currentColor" strokeWidth="2"/>
  //         <path d="M32 22C32 22 38 25 38 32C38 39 32 42 32 42C32 42 26 39 26 32C26 25 32 22 32 22Z" fill="currentColor" opacity="0.3"/>
  //       </svg>
  //     ),
  //     title: "Customer Delight",
  //     description: "Ready to wear and cherish"
  //   }
  // ];
const features = [
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2"/>
          <path d="M32 12L36 24L48 26L40 34L42 46L32 40L22 46L24 34L16 26L28 24L32 12Z" fill="currentColor"/>
        </svg>
      ),
      title: "Premium Materials",
      description: "Finest fabrics carefully selected"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 44L32 52L44 44M32 12V28M32 28L20 36L32 44L44 36L32 28Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 28L44 20L32 12L20 20L32 28Z" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
      title: "Artisan Crafted",
      description: "Handmade by skilled weavers"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="16" y="16" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2"/>
          <path d="M24 24H40M24 32H40M24 40H36" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="12" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
        </svg>
      ),
      title: "Heritage Design",
      description: "Inspired by timeless traditions"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="32" cy="32" r="20" stroke="currentColor" strokeWidth="2"/>
          <path d="M32 22V32L38 38" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          <circle cx="32" cy="32" r="3" fill="currentColor"/>
        </svg>
      ),
      title: "Quality Assured",
      description: "Checked at every stage"
    },
    {
      icon: (
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 12C32 12 44 18 44 32C44 46 32 52 32 52C32 52 20 46 20 32C20 18 32 12 32 12Z" stroke="currentColor" strokeWidth="2"/>
          <path d="M32 22C32 22 38 25 38 32C38 39 32 42 32 42C32 42 26 39 26 32C26 25 32 22 32 22Z" fill="currentColor" opacity="0.3"/>
        </svg>
      ),
      title: "Customer Delight",
      description: "Ready to wear and cherish"
    }
  ];
  return (
    <section className="features-section">
      <style>{`
        .features-section {
          width: 100%;
          padding: 30px 15px;
          background: linear-gradient(180deg, #f5f0e6 0%, #e8dec9 100%);
          position: relative;
          overflow: hidden;
        }

        .features-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(circle at 10% 10%, rgba(201, 169, 97, 0.05) 0%, transparent 40%),
            radial-gradient(circle at 90% 90%, rgba(184, 149, 111, 0.05) 0%, transparent 40%);
          pointer-events: none;
        }

        .features-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .features-header {
          text-align: center;
          margin-bottom: 30px;
          animation: fadeInDown 0.8s ease;
        }

        .features-title {
          font-family: 'Marcellus', serif;
          font-size: clamp(1.8rem, 3vw, 2.8rem);
          font-weight: 400;
          color: #2d3e3f;
          margin-bottom: 0.5rem;
          letter-spacing: 2px;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
        }

        .features-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 2px;
          background: #C9A961;
          border-radius: 1px;
        }

        .features-subtitle {
          font-family: 'Outfit', sans-serif;
          font-size: 0.95rem;
          color: #5a6c6d;
          margin-top: 15px;
          font-weight: 300;
          letter-spacing: 1px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 15px;
          position: relative;
        }

        .feature-item {
          padding: 25px 20px;
          text-align: center;
          background: rgba(255, 255, 255, 0.6);
          border-radius: 12px;
          border: 1px solid rgba(201, 169, 97, 0.15);
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .feature-item:hover {
          background: #ffffff;
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(201, 169, 97, 0.15);
          border-color: #C9A961;
        }

        .feature-icon {
          width: 45px;
          height: 45px;
          margin-bottom: 15px;
          color: #C9A961;
          transition: transform 0.4s ease;
        }

        .feature-item:hover .feature-icon {
          transform: scale(1.1);
        }

        .feature-title {
          font-family: 'Outfit', sans-serif;
          font-size: 1rem;
          font-weight: 600;
          color: #2d3e3f;
          margin-bottom: 8px;
          letter-spacing: 0.5px;
        }

        .feature-description {
          font-family: 'Outfit', sans-serif;
          font-size: 0.85rem;
          color: #5a6c6d;
          line-height: 1.4;
          font-weight: 300;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .features-section {
            padding: 25px 15px;
          }
          
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .features-title {
            font-size: 1.8rem;
          }
        }

        @media (max-width: 480px) {
          .features-grid {
            grid-template-columns: 1fr;
          }

          .feature-item {
            padding: 20px;
          }
        }
      `}</style>

      <div className="features-container">
        <div className="features-header">
          <h2 className="features-title">Our Promise</h2>
          <p className="features-subtitle">The Journey Behind Every Saree</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-item">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Custom;
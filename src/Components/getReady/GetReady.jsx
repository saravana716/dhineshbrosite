import React from 'react';
// import re from '../../assets/re.png'; // Removed
import make1 from '../../assets/make1.png';
import make2 from '../../assets/make2.png';
import make3 from '../../assets/make3.png';
import make4 from '../../assets/make4.png';
import make5 from '../../assets/make5.png';
import make6 from '../../assets/make6.png';
import make7 from '../../assets/make7.png';
import make8 from '../../assets/make8.png';
import make9 from '../../assets/make9.png';
import make10 from '../../assets/make10.png';
import make11 from '../../assets/make11.png';
import make12 from '../../assets/make12.png';
import './GetReady.css';

const GetReady = () => {
  const images = [make1, make2, make3, make4, make5, make6, make7, make8, make9, make10, make11, make12];
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Slower, more elegant transition
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='ready1'>
      <div className='ready'>
        
        {/* Content Section */}
        <div className="content-wrapper">
           {/* Decorative Background Ring */}
           <div className="deco-ring"></div>

           {/* Modern Text Label */}
           <div className="modern-overline">Are You Ready?</div>

           <h1 className="elegant-heading">
             Elegance Begins with the<br/>Perfect Drape
           </h1>
           
           <p className="tagline">"Where sarees meet soulmates — timeless tradition woven for you."</p>
           
           <a href="#appointment" className="cta-button">
             Book Your Appointment
           </a>
        </div>

        {/* Right Side Slider */}
        <div className="slider-container">
          {images.map((img, index) => (
            <img 
              key={index} 
              src={img} 
              alt={`Exquisite Saree Collection ${index + 1}`} 
              className={`zdiv ${index === currentImageIndex ? 'active' : ''}`} 
            />
          ))}
          {/* Slider Overlay Gradient for smooth blending */}
          <div style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', 
            background: 'linear-gradient(to right, rgba(42,36,56,0.8) 0%, transparent 40%)',
            pointerEvents: 'none'
          }}></div>
        </div>



        {/* Minimalist Sparkles - Removed as requested */}

      </div>
    </div>
  );
};

export default GetReady;
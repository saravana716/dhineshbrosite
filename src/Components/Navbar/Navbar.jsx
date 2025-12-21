import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(3);
  const [wishlistCount, setWishlistCount] = useState(5);

  return (
    <>
      <style>{`
        .icon-svg {
          width: 20px;
          height: 20px;
          fill: none;
          stroke: currentColor;
          stroke-width: 2;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .navbar {
          width: 100%;
          background: linear-gradient(135deg, #2d3e3f 0%, #1f2b2c 100%);
          padding: 0;
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(201, 169, 97, 0.1);
        }

        .navbar-inner {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .nav-logo:hover {
          transform: scale(1.03);
        }

        .logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, #C9A961, #B8956F);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(201, 169, 97, 0.2);
          transition: all 0.3s ease;
        }

        .logo-icon:hover {
          box-shadow: 0 3px 10px rgba(201, 169, 97, 0.3);
        }

        .logo-icon svg {
          width: 24px;
          height: 24px;
          fill: none;
          stroke: #1f2b2c;
          stroke-width: 2;
        }

        .nav-content {
          display: flex;
          align-items: center;
          gap: 2.5rem;
          list-style: none;
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }

        .nav-content li {
          position: relative;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          color: #E8DCC4;
          transition: all 0.3s ease;
          padding: 0.5rem 0;
        }

        .nav-content li::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 3px;
          background: linear-gradient(90deg, #C9A961, #D4AF37);
          transition: width 0.3s ease;
          border-radius: 2px;
        }

        .nav-content li:hover {
          color: #C9A961;
          transform: translateY(-2px);
        }

        .nav-content li:hover::after {
          width: 100%;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .search-box {
          display: none;
        }

        .icon-btn {
          position: relative;
          background: rgba(201, 169, 97, 0.06);
          border: 1px solid rgba(201, 169, 97, 0.2);
          padding: 0.65rem;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          color: #E8DCC4;
        }

        .icon-btn:hover {
          background: rgba(201, 169, 97, 0.12);
          border-color: #C9A961;
          transform: translateY(-2px);
          box-shadow: 0 3px 10px rgba(201, 169, 97, 0.2);
          color: #C9A961;
        }

        .icon-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: linear-gradient(135deg, #722f37, #8B3A3A);
          color: white;
          font-size: 0.65rem;
          font-weight: bold;
          padding: 0.15rem 0.35rem;
          border-radius: 10px;
          min-width: 16px;
          text-align: center;
          animation: pulse 2s ease-in-out infinite;
          box-shadow: 0 1px 4px rgba(114, 47, 55, 0.3);
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .cta-btn {
          display: none;
        }

        .mobile-menu-btn {
          display: none;
          background: rgba(201, 169, 97, 0.06);
          border: 1px solid rgba(201, 169, 97, 0.2);
          padding: 0.6rem;
          border-radius: 8px;
          cursor: pointer;
          color: #E8DCC4;
          transition: all 0.3s ease;
        }

        .mobile-menu-btn:hover {
          background: rgba(201, 169, 97, 0.12);
          border-color: #C9A961;
          color: #C9A961;
        }

        @media (max-width: 1024px) {
          .nav-content {
            position: static;
            transform: none;
            gap: 1.5rem;
          }
        }

        @media (max-width: 768px) {
          .navbar-inner {
            padding: 1rem 1.5rem;
          }

          .nav-content {
            display: ${props => props.isMobileMenuOpen ? 'flex' : 'none'};
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #2d3e3f 0%, #1f2b2c 100%);
            flex-direction: column;
            padding: 2rem;
            gap: 1.5rem;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
            animation: slideDown 0.3s ease;
            transform: none;
          }

          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .nav-content li {
            font-size: 1.1rem;
            padding: 0.8rem 0;
            text-align: center;
          }

          .mobile-menu-btn {
            display: flex;
          }

          .nav-actions {
            gap: 0.8rem;
          }

          .logo-icon {
            width: 36px;
            height: 36px;
          }

          .logo-icon svg {
            width: 20px;
            height: 20px;
          }
        }

        @media (max-width: 480px) {
          .navbar-inner {
            padding: 0.8rem 1rem;
          }

          .logo-icon {
            width: 32px;
            height: 32px;
          }

          .logo-icon svg {
            width: 18px;
            height: 18px;
          }

          .icon-btn {
            padding: 0.5rem;
          }

          .nav-actions {
            gap: 0.6rem;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="navbar-inner">
          <div className="nav-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
          </div>

          <ul className="nav-content" style={{ display: isMobileMenuOpen ? 'flex' : undefined }}>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>

          <div className="nav-actions">
            <button className="icon-btn" title="Account">
              <svg className="icon-svg" viewBox="0 0 24 24">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </button>

            <button className="icon-btn" title="Wishlist">
              <svg className="icon-svg" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
              {wishlistCount > 0 && <span className="icon-badge">{wishlistCount}</span>}
            </button>

            <button className="icon-btn" title="Cart">
              <svg className="icon-svg" viewBox="0 0 24 24">
                <circle cx="9" cy="21" r="1"/>
                <circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
              </svg>
              {cartCount > 0 && <span className="icon-badge">{cartCount}</span>}
            </button>

            <button 
              className="mobile-menu-btn" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <svg className="icon-svg" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18"/>
                  <line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              ) : (
                <svg className="icon-svg" style={{width: '24px', height: '24px'}} viewBox="0 0 24 24">
                  <line x1="3" y1="12" x2="21" y2="12"/>
                  <line x1="3" y1="6" x2="21" y2="6"/>
                  <line x1="3" y1="18" x2="21" y2="18"/>
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

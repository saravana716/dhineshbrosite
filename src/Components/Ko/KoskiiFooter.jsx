import React, { useState } from 'react';
import { Mail, MessageCircle, ChevronUp, Instagram, Facebook, Youtube } from 'lucide-react';

const KoskiiFooter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for subscribing!');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const customerServiceLinks = [
    'DOWNLOAD THE APP',
    'SIZE CHART',
    'SHIPPING & DELIVERY',
    'TRACK YOUR ORDER',
    'CUSTOMER REVIEWS',
    'RETURNS',
    'CONTACT US',
    "FAQ's"
  ];

  const aboutKoskiiLinks = [
    'ABOUT US',
    'OUR STORES',
    'CONTACT US',
    'OWN A KOSKII FRANCHISE',
    'BLOG',
    'RETURNS POLICY',
    'PRIVACY POLICY',
    'TERMS & CONDITIONS'
  ];

  const popularSearches = [
    'Bridal Gowns',
    'Ethnic Gowns',
    'Soft Silk Sarees',
    'South Silk Sarees',
    'Mirror Work Lehenga Choli',
    'Sangeet Lehengas',
    'Art Silk Sarees',
    'Satin Sarees',
    'Tissue Sarees',
    'Brocade Sarees',
    'Heavy Sarees',
    'Wine Colour Sarees',
    'Crop Top Lehengas'
  ];

  const trendingArticles = [
    'How To Drape A Saree?',
    'Blouse Designs',
    'Fashion Tips',
    'Types Of Sarees',
    'New Trend Sarees',
    'Saree with Jacket',
    'Types of Lehenga'
  ];

  const paymentMethods = [
    { name: 'PayPal', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg' },
    { name: 'Visa', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' },
    { name: 'Mastercard', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg' },
    { name: 'Maestro', logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg' },
    { name: 'RuPay', logo: 'https://cdn.worldvectorlogo.com/logos/rupay.svg' },
    { name: 'Paytm', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Paytm_Logo_%28standalone%29.svg' }
  ];

  const styles = {
    container: {
      position: 'relative'
    },
    footer: {
      backgroundColor: '#e8d5c4',
      padding: '48px 24px 32px',
      color: '#6b5d52'
    },
    footerContent: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '40px',
      marginBottom: '48px'
    },
    sectionTitle: {
      fontSize: '11px',
      fontWeight: '600',
      letterSpacing: '2.5px',
      textTransform: 'uppercase',
      marginBottom: '24px'
    },
    linkList: {
      listStyle: 'none',
      padding: 0,
      margin: 0
    },
    linkItem: {
      marginBottom: '12px'
    },
    link: {
      fontSize: '14px',
      color: '#6b5d52',
      textDecoration: 'none',
      transition: 'color 0.3s'
    },
    signupText: {
      fontSize: '14px',
      marginBottom: '20px',
      lineHeight: '1.6'
    },
    emailContainer: {
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid #6b5d52',
      paddingBottom: '8px',
      marginBottom: '32px'
    },
    emailInput: {
      flex: 1,
      backgroundColor: 'transparent',
      outline: 'none',
      fontSize: '14px',
      border: 0,
      color: '#6b5d52',
      padding: 0
    },
    sendButton: {
      marginLeft: '8px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      padding: 0,
      display: 'flex',
      alignItems: 'center',
      transition: 'opacity 0.3s'
    },
    socialIcons: {
      display: 'flex',
      gap: '20px',
      marginBottom: '24px'
    },
    socialLink: {
      color: '#6b5d52',
      transition: 'color 0.3s'
    },
    appText: {
      fontSize: '13px',
      fontWeight: '500',
      marginBottom: '16px'
    },
    appButtons: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    appImage: {
      height: '40px',
      cursor: 'pointer',
      transition: 'opacity 0.3s'
    },
    searchSection: {
      paddingTop: '40px',
      paddingBottom: '40px',
      borderTop: '1px solid rgba(107, 93, 82, 0.2)'
    },
    searchTitle: {
      fontSize: '15px',
      fontWeight: '600',
      marginBottom: '20px'
    },
    searchLinks: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      fontSize: '13px'
    },
    searchLink: {
      textDecoration: 'underline',
      color: '#6b5d52',
      transition: 'color 0.3s'
    },
    articleSection: {
      marginBottom: '40px'
    },
    paymentMethods: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      gap: '12px',
      margin: '36px 0'
    },
    paymentCard: {
      backgroundColor: 'white',
      borderRadius: '4px',
      padding: '8px 12px'
    },
    paymentImage: {
      height: '32px',
      objectFit: 'contain'
    },
    footerBottom: {
      textAlign: 'center',
      paddingTop: '24px',
      borderTop: '1px solid rgba(107, 93, 82, 0.2)'
    },
    copyright: {
      fontSize: '13px',
      marginBottom: '8px'
    },
    poweredBy: {
      fontSize: '12px'
    },
    chatButton: {
      position: 'fixed',
      bottom: '32px',
      right: '32px',
      width: '56px',
      height: '56px',
      backgroundColor: '#e89b8c',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      border: 'none',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      transition: 'transform 0.3s',
      zIndex: 50
    },
    scrollButton: {
      position: 'fixed',
      bottom: '96px',
      right: '32px',
      width: '44px',
      height: '44px',
      backgroundColor: 'white',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      border: 'none',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      transition: 'transform 0.3s',
      zIndex: 50
    }
  };

  const mediaQueries = `
    @media (min-width: 640px) {
      .app-buttons {
        flex-direction: row !important;
      }
    }
    @media (min-width: 768px) {
      .footer {
        padding: 64px 48px 32px !important;
      }
      .footer-content {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 64px !important;
      }
    }
    @media (min-width: 1024px) {
      .footer {
        padding: 64px 80px 32px !important;
      }
      .footer-content {
        grid-template-columns: repeat(3, 1fr) !important;
        gap: 80px !important;
      }
    }
  `;

  return (
    <div style={styles.container}>
      <style>{mediaQueries}</style>
      <footer style={styles.footer} className="footer">
        {/* Main Footer Content */}
        <div style={styles.footerContent} className="footer-content">
          {/* Customer Service */}
          <div>
            <h3 style={styles.sectionTitle}>CUSTOMER SERVICE</h3>
            <ul style={styles.linkList}>
              {customerServiceLinks.map((link, index) => (
                <li key={index} style={styles.linkItem}>
                  <a 
                    href="#" 
                    style={styles.link}
                    onMouseEnter={(e) => e.target.style.color = '#4a4038'}
                    onMouseLeave={(e) => e.target.style.color = '#6b5d52'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Koskii */}
          <div>
            <h3 style={styles.sectionTitle}>ABOUT KOSKII</h3>
            <ul style={styles.linkList}>
              {aboutKoskiiLinks.map((link, index) => (
                <li key={index} style={styles.linkItem}>
                  <a 
                    href="#" 
                    style={styles.link}
                    onMouseEnter={(e) => e.target.style.color = '#4a4038'}
                    onMouseLeave={(e) => e.target.style.color = '#6b5d52'}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sign Up and Save */}
          <div>
            <h3 style={styles.sectionTitle}>SIGN UP AND SAVE</h3>
            <p style={styles.signupText}>
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>

            {/* Email Input */}
            <div style={styles.emailContainer}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={styles.emailInput}
              />
              <button 
                onClick={handleSubmit}
                style={styles.sendButton}
                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
              >
                <Mail style={{ width: '20px', height: '20px', color: '#6b5d52' }} />
              </button>
            </div>

            {/* Social Icons */}
            <div style={styles.socialIcons}>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4a4038'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6b5d52'}
              >
                <Instagram style={{ width: '24px', height: '24px' }} />
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4a4038'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6b5d52'}
              >
                <Facebook style={{ width: '24px', height: '24px' }} />
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4a4038'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6b5d52'}
              >
                <Youtube style={{ width: '24px', height: '24px' }} />
              </a>
              <a 
                href="#" 
                style={styles.socialLink}
                onMouseEnter={(e) => e.currentTarget.style.color = '#4a4038'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#6b5d52'}
              >
                <svg style={{ width: '24px', height: '24px', fill: 'currentColor' }} viewBox="0 0 24 24">
                  <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>

            {/* App Download */}
            <p style={styles.appText}>
              Koskii is now at your fingertips. Download the Koskii app
            </p>
            <div style={styles.appButtons} className="app-buttons">
              <a href="#">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play"
                  style={styles.appImage}
                  onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                />
              </a>
              <a href="#">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store"
                  style={styles.appImage}
                  onMouseEnter={(e) => e.target.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.target.style.opacity = '1'}
                />
              </a>
            </div>
          </div>
        </div>

        {/* Popular Searches */}
        <div style={styles.searchSection}>
          <h4 style={styles.searchTitle}>Popular Searches</h4>
          <div style={styles.searchLinks}>
            {popularSearches.map((search, index) => (
              <React.Fragment key={index}>
                <a 
                  href="#" 
                  style={styles.searchLink}
                  onMouseEnter={(e) => e.target.style.color = '#4a4038'}
                  onMouseLeave={(e) => e.target.style.color = '#6b5d52'}
                >
                  {search}
                </a>
                {index < popularSearches.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Trending Articles */}
        <div style={styles.articleSection}>
          <h4 style={styles.searchTitle}>Explore Trending Articles</h4>
          <div style={styles.searchLinks}>
            {trendingArticles.map((article, index) => (
              <React.Fragment key={index}>
                <a 
                  href="#" 
                  style={styles.searchLink}
                  onMouseEnter={(e) => e.target.style.color = '#4a4038'}
                  onMouseLeave={(e) => e.target.style.color = '#6b5d52'}
                >
                  {article}
                </a>
                {index < trendingArticles.length - 1 && <span>|</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div style={styles.paymentMethods}>
          {paymentMethods.map((method, index) => (
            <div key={index} style={styles.paymentCard}>
              <img 
                src={method.logo} 
                alt={method.name}
                style={styles.paymentImage}
              />
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div style={styles.footerBottom}>
          <p style={styles.copyright}>© 2025 Koskii All Rights Reserved.</p>
          <p style={styles.poweredBy}>
            Powered by <a href="#" style={{ color: '#6b5d52', textDecoration: 'underline' }}>Shopify</a>
          </p>
        </div>
      </footer>

      {/* Chat Button */}
      <button 
        style={styles.chatButton}
        aria-label="Chat"
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        <MessageCircle style={{ width: '28px', height: '28px', color: 'white' }} />
      </button>

      {/* Scroll to Top Button */}
      <button 
        onClick={scrollToTop}
        style={styles.scrollButton}
        aria-label="Scroll to top"
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-4px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <ChevronUp style={{ width: '20px', height: '20px', color: '#e89b8c' }} />
      </button>
    </div>
  );
};

export default KoskiiFooter;
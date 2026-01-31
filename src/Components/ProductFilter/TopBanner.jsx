import React from 'react';
import './TopBanner.css';

const TopBanner = ({ title = "Exclusive Collection", breadcrumbs = ["Home", "Collection"] }) => {
  return (
    <div className="filter-top-banner">
      {/* Mesh Gradient Background Layer */}
      <div className="mesh-background"></div>

      {/* Central Glass Card */}
      <div className="glass-card">
        <div className="banner-content">
          <div className="modern-overline">The Royal Series</div>
          <h1 className="filter-title">{title}</h1>
          <div className="filter-breadcrumbs">
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className="breadcrumb-item">{crumb}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;

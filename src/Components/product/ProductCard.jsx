import React, { useState } from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import './product.css';
import c1 from "../../assets/c1.avif"
import c2 from "../../assets/c2.avif"
import c3 from "../../assets/c3.avif"
import c4 from "../../assets/c4.avif"
import c5 from "../../assets/c5.avif"
import c6 from "../../assets/c6.avif"
const ProductCard = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="badges">
        {product.soldOut && <div className="badge badge-danger">SOLD OUT</div>}
        {product.originalPrice && product.salePrice < product.originalPrice && (
          <div className="badge badge-success">
            SAVE {Math.round(((product.originalPrice - product.salePrice) / product.originalPrice) * 100)}%
          </div>
        )}
      </div>

      <button
        onClick={() => setIsLiked(!isLiked)}
        className="heart-button"
        aria-label="Toggle wishlist"
      >
        <Heart className={`heart-icon ${isLiked ? 'liked' : ''}`} />
      </button>

      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        <img
          src={product.secondaryImage || product.image}
          alt={product.name}
          className="product-image-secondary"
        />

        <div className="hover-overlay">
          <button className="add-to-cart-btn">
            <ShoppingCart className="cart-icon" />
            Add to Cart
          </button>
        </div>
      </div>

      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>

        <div className="price-section">
          <span className="sale-price">
            {`Rs. ${product.salePrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
          </span>
          {product.originalPrice && (
            <span className="original-price">
              {`Rs. ${product.originalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

const SareeCollection = () => {
  const products = [
    {
      id: 1,
      name: "Koel Patola Sarees for Weddings",
      image: c1,
      secondaryImage: c2,
      salePrice: 26099,
      originalPrice: 28099,
      onSale: true,
      soldOut: false
    },
    {
      id: 2,
      name: "Kela Patola Saree",
      image: c2,
      secondaryImage: c3,
      salePrice: 24099,
      originalPrice: 27099,
      onSale: true,
      soldOut: true
    },
    {
      id: 3,
      name: "Baby Pink Banarasi Jute & Original Saree",
      image: c3,
      secondaryImage: c4,
      salePrice: 16099,
      originalPrice: 20099,
      onSale: true,
      soldOut: false
    },
    {
      id: 4,
      name: "Baby Pink Designer Kaachi Patola Silk Saree with Blouse Piece",
      image: c4,
      secondaryImage: c5,
      salePrice: 11499,
      originalPrice: 15099,
      onSale: true,
      soldOut: true
    },
    {
      id: 5,
      name: "Biscotti Toast Saree",
      image: c5,
      secondaryImage: c6,
      salePrice: 9099,
      originalPrice: 12099,
      onSale: true,
      soldOut: false
    },
    {
      id: 6,
      name: "Apricot Banarasi Silk Saree with Gold Zari",
      image: c6,
      secondaryImage: c1,
      salePrice: 19099,
      originalPrice: 23099,
      onSale: true,
      soldOut: false
    }
  ];

  return (
    <div className="saree-collection">
      <div className="container">
        <div className="collection-header">
          <h2 className="collection-title">SHOP BY NEW ARRIVAL</h2>
          <p className="collection-subtitle">Where Tradition Meets Modern Elegance</p>
        </div>

        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="load-more-section">
          <button className="load-more-btn">Load More Products</button>
        </div>
      </div>
    </div>
  );
};

export default SareeCollection;

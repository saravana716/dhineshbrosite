import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <style>{`
        .product-card {
          background: #fff;
          border: 1px solid #eee;
          border-radius: 8px;
          overflow: hidden;
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
        }
        .product-card:hover {
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
          transform: translateY(-5px);
          border-color: #d4af37;
        }
        .card-img-wrap {
          width: 100%;
          padding-top: 125%; /* 4:5 Aspect Ratio */
          position: relative;
          background: #f9f9f9;
          overflow: hidden;
        }
        .card-img {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .product-card:hover .card-img {
          transform: scale(1.05);
        }
        .card-info {
          padding: 15px;
          text-align: center;
        }
        .card-title {
          font-family: 'Cinzel', serif;
          font-size: 1rem;
          color: #2c0e15;
          margin-bottom: 5px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .card-price {
          font-family: 'Montserrat', sans-serif;
          font-size: 1.1rem;
          color: #d4af37;
          font-weight: 600;
        }
        .add-btn {
          margin-top: 10px;
          width: 100%;
          padding: 10px;
          background: #2c0e15;
          color: #fff;
          border: none;
          font-family: 'Montserrat', sans-serif;
          text-transform: uppercase;
          font-size: 0.8rem;
          cursor: pointer;
          opacity: 0;
          transform: translateY(10px);
          transition: all 0.3s;
        }
        .product-card:hover .add-btn {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
      
      <div className="card-img-wrap">
        <img src={product.image} alt={product.name} className="card-img" />
      </div>
      
      <div className="card-info">
        <h4 className="card-title">{product.name}</h4>
        <div className="card-price">₹{product.price.toLocaleString()}</div>
        <button className="add-btn">Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;

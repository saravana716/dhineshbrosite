import React from 'react';
import { ProductCard } from '../product/ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid-container">


      {products.length > 0 ? (
        <div className="product-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="no-results">
          No products found matching your filters.
        </div>
      )}
    </div>
  );
};

export default ProductGrid;

import React, { useState, useEffect } from 'react';
import TopBanner from './TopBanner';
import FilterSidebar from './FilterSidebar';
import ProductGrid from './ProductGrid';
import './ProductFilterPage.css';

// Import Local Assets
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
import loveImg from '../../assets/5.png'; // Adding this as well for variety

const productImages = [make1, make2, make3, make4, make5, make6, make7, make8, make9, make10, make11, make12, loveImg];

// Mock Data
const MOCK_PRODUCTS = Array.from({ length: 40 }).map((_, i) => ({
  id: i + 1,
  name: `Premium Wedding Silk ${i + 1}`,
  category: i % 4 === 0 ? "Sarees" : i % 4 === 1 ? "Lehengas" : i % 4 === 2 ? "Kurtas" : "Jewelry",
  material: ["Silk", "Cotton", "Georgette", "Velvet"][i % 4],
  color: ["Red", "Gold", "Pink", "Green", "Blue"][i % 5],
  occasion: ["Wedding", "Reception", "Party", "Casual"][i % 4],
  salePrice: 5000 + Math.floor(Math.random() * 20000),
  originalPrice: 25000 + Math.floor(Math.random() * 5000),
  image: productImages[i % productImages.length], // Use local images cyclically
  secondaryImage: productImages[(i + 1) % productImages.length], // Use next image for hover effect
  onSale: true,
  soldOut: i % 8 === 0
}));

const ProductFilterPage = () => {
  const [products, setProducts] = useState(MOCK_PRODUCTS);
  const [filteredProducts, setFilteredProducts] = useState(MOCK_PRODUCTS);
  const [filters, setFilters] = useState({
    categories: [],
    materials: [],
    colors: [],
    occasions: [],
    minPrice: '',
    maxPrice: ''
  });

  // Filter Logic
  useEffect(() => {
    let result = products;

    // Category Filter
    if (filters.categories && filters.categories.length > 0) {
      result = result.filter(p => filters.categories.includes(p.category));
    }

    // Material Filter
    if (filters.materials && filters.materials.length > 0) {
      result = result.filter(p => filters.materials.includes(p.material));
    }

    // Color Filter
    if (filters.colors && filters.colors.length > 0) {
      result = result.filter(p => filters.colors.includes(p.color));
    }

    // Occasion Filter
    if (filters.occasions && filters.occasions.length > 0) {
      result = result.filter(p => filters.occasions.includes(p.occasion));
    }

    // Price Filter
    if (filters.minPrice) {
      result = result.filter(p => p.salePrice >= Number(filters.minPrice));
    }
    if (filters.maxPrice) {
      result = result.filter(p => p.salePrice <= Number(filters.maxPrice));
    }

    setFilteredProducts(result);
  }, [filters, products]);

  return (
    <div className="product-filter-page">


      {/* 1. Top Banner */}
      <TopBanner title="Wedding Collection" breadcrumbs={["Home", "Wedding Series"]} />

      {/* 2. Main Content Area (Sidebar + Grid) */}
      <div className="filter-content-area">
        {/* Left Side: Filters */}
        <FilterSidebar filters={filters} setFilters={setFilters} />

        {/* Right Side: Product Grid (Scrollable) */}
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductFilterPage;

import React from 'react';
import './FilterSidebar.css';

const FilterSidebar = ({ filters, setFilters }) => {
  // Option Lists
  const categories = ["Sarees", "Lehengas", "Kurtas", "Jewelry", "Accessories"];
  const materials = ["Silk", "Cotton", "Georgette", "Velvet"];
  const occasions = ["Wedding", "Reception", "Party", "Casual"];
  const priceRanges = ["0 - 1000", "1000 - 5000", "5000 - 10000", "10000 - 20000", "20000+"];

  // Generic handler for array-based filters
  const handleFilterChange = (filterType, value) => {
    const currentList = filters[filterType] || [];
    if (currentList.includes(value)) {
      setFilters({ ...filters, [filterType]: currentList.filter(item => item !== value) });
    } else {
      setFilters({ ...filters, [filterType]: [...currentList, value] });
    }
  };

  const handlePriceChange = (e) => {
    const value = e.target.value;
    if (value === "") {
        setFilters({...filters, minPrice: '', maxPrice: ''});
        return;
    }
    
    // Parse range like "1000 - 5000" or "20000+"
    if (value.includes('+')) {
        const min = value.replace('+', '').trim();
        setFilters({...filters, minPrice: min, maxPrice: ''});
    } else {
        const [min, max] = value.split('-').map(str => str.trim());
        setFilters({...filters, minPrice: min, maxPrice: max});
    }
  };

  const renderCheckboxGroup = (title, items, filterType) => (
    <div className="filter-group">
      <h3 className="filter-header">{title}</h3>
      <div className="group-options">
        {items.map(item => (
          <label key={item} className="checkbox-label">
            <input 
              type="checkbox" 
              className="checkbox-input"
              checked={filters[filterType]?.includes(item) || false}
              onChange={() => handleFilterChange(filterType, item)}
            />
            <span className="custom-checkmark"></span>
            <span className="label-text">{item}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="filter-sidebar">
      {renderCheckboxGroup("Category", categories, "categories")}
      {renderCheckboxGroup("Material", materials, "materials")}
      {renderCheckboxGroup("Occasion", occasions, "occasions")}

      <div className="filter-group">
        <h3 className="filter-header">Price Range</h3>
        <div className="price-inputs">
           <select 
             className="price-select"
             onChange={handlePriceChange}
             defaultValue=""
           >
             <option value="">Select Range</option>
             {priceRanges.map(range => (
                 <option key={range} value={range}>{range}</option>
             ))}
           </select>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;

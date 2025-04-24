'use client';

import React from 'react';

const FilterBar = ({
  brands,
  brandFilter,
  setBrandFilter,
  priceFilter,
  setPriceFilter,
  resetFilters
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-end items-right mb-8 gap-4">
      {/* Brand Filter */}
      <select
        onChange={(e) => setBrandFilter(e.target.value)}
        className="bg-[#3b2f2f] px-4 py-2 rounded text-white"
        value={brandFilter}
      >
        <option value="">All Brands</option>
        {brands.map((brand, idx) => (
          <option key={idx} value={brand}>{brand}</option>
        ))}
      </select>

      {/* Price Filter */}
      <select
        onChange={(e) => setPriceFilter(e.target.value)}
        className="bg-[#3b2f2f] px-4 py-2 rounded text-white"
        value={priceFilter}
      >
        <option value="">Sort by Price</option>
        <option value="low">Low to High</option>
        <option value="high">High to Low</option>
      </select>

      {/* Reset Button */}
      <button
        onClick={resetFilters}
        className="bg-[#d2a679] text-black px-4 py-2 rounded"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterBar;

'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import allProducts from '@/data/products/allProducts';
import Link from 'next/link';
import FilterBar from '@/components/shop/FilterBar';

const CategoryPage = () => {
  const { category } = useParams();
  const [filtered, setFiltered] = useState([]);
  const [brandFilter, setBrandFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');

  useEffect(() => {
    const normalizedCategory = decodeURIComponent(category).toLowerCase().replace(/\s+/g, '-');

    let matched = allProducts.filter(
      (product) =>
        product.category.toLowerCase().replace(/\s+/g, '-') === normalizedCategory
    );

    // brand filter
    if (brandFilter) {
      matched = matched.filter((product) => product.brand === brandFilter);
    }

    // price filter
    if (priceFilter === 'low') {
      matched.sort((a, b) => parseInt(a.price.replace(/\D/g, '')) - parseInt(b.price.replace(/\D/g, '')));
    } else if (priceFilter === 'high') {
      matched.sort((a, b) => parseInt(b.price.replace(/\D/g, '')) - parseInt(a.price.replace(/\D/g, '')));
    }

    setFiltered(matched);
  }, [category, brandFilter, priceFilter]);

  const brands = [
    ...new Set(
      allProducts
        .filter(
          (p) =>
            p.category.toLowerCase().replace(/\s+/g, '-') ===
            decodeURIComponent(category).toLowerCase().replace(/\s+/g, '-')
        )
        .map((p) => p.brand)
    ),
  ];

  const resetFilters = () => {
    setBrandFilter('');
    setPriceFilter('');
  };

  return (
    <section className="bg-black text-white px-6 py-24 md:px-12 min-h-screen">
      <h1 className="text-4xl text-center font-bold text-[#d2a679] mb-12 capitalize">
        {decodeURIComponent(category).replace(/-/g, ' ')} Products
      </h1>

      <FilterBar
        brands={brands}
        brandFilter={brandFilter}
        setBrandFilter={setBrandFilter}
        priceFilter={priceFilter}
        setPriceFilter={setPriceFilter}
        resetFilters={resetFilters}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
        {filtered.length > 0 ? (
          filtered.map((product, index) => (
            <Link href={`/shop/product/${product.slug}`} key={index}>
              <motion.div
  className="rounded-xl overflow-hidden shadow hover:scale-105 transition-transform flex flex-col items-center relative bg-[#3b2f2f]"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3, delay: index * 0.1 }}
>
  
  <div className="w-full h-[300px] bg-[#f9f9f9] rounded-t-xl flex items-center justify-center">
    <img
      src={product.colors[0].image}
      alt={product.name}
      className="max-h-[260px] object-contain"
    />
  </div>

  {/* Text container,brown background */}
  <div className="p-4 text-left w-full bg-[#3b2f2f]">
    <h2 className="text-xl font-semibold text-white">{product.name}</h2>
    <p className="text-sm text-gray-300">{product.description}</p>
    <p className="text-sm text-white">{product.brand}</p>

    {/* Price and MRP */}
    <div className="flex gap-2 items-center mt-2">
      {product.mrp && (
        <span className="text-sm text-gray-400 line-through">Rs. {product.mrp}</span>
      )}
      <h2 className="font-semibold text-white">Rs. {product.price}</h2>
    </div>
  </div>
</motion.div>

            </Link>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No {decodeURIComponent(category).replace(/-/g, ' ')} products found.
          </p>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;

'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import allProducts from '@/data/allProducts';
import Link from 'next/link';

const CategoryPage = () => {
  const { category } = useParams();
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const normalizedCategory = decodeURIComponent(category).toLowerCase().replace(/\s+/g, '-');
  
    const matched = allProducts.filter(
      (product) =>
        product.category.toLowerCase().replace(/\s+/g, '-') === normalizedCategory
    );
  
    setFiltered(matched);
  }, [category]);
  

  return (
    <section className="bg-black text-white px-6 py-24 md:px-12 min-h-screen">
      <h1 className="text-4xl text-center font-bold text-[#d2a679] mb-12 capitalize">
  {decodeURIComponent(category).replace(/-/g, ' ')} Products
</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filtered.length > 0 ? (
          filtered.map((product, index) => (
            <Link href={`/shop/product/${product.slug}`} key={index}>
              <motion.div
                className="bg-[#3b2f2f] rounded-2xl overflow-hidden shadow hover:scale-105 transition-transform"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <img src={product.image} alt={product.name} className="w-full h-[220px] object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <h2 className=" font-semibold">{product.price}</h2>
                  <p className="text-sm text-gray-300">{product.description}</p>
                </div>
              </motion.div>
            </Link>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">No {category} products found.</p>
        )}
      </div>
    </section>
  );
};

export default CategoryPage;

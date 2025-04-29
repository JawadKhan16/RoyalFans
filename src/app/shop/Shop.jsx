'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const allProducts = [
  { name: 'Fans', category: 'Fan', image: '/Shop/fans.webp', description: 'Powerful and silent ceiling fan.' },
  { name: 'Lights', category: 'Light', image: '/Shop/Light.webp', description: 'LED, Ceiling, Strip Lights.' },
  { name: 'Coolers', category: 'Cooler', image: '/Shop/cooler.webp', description: 'Energy-efficient air cooler.' },
  { name: 'Washing Machine', category: 'Washing Machine', image: '/Shop/wm.webp', description: 'Smart wash technology.' },
  { name: 'Mixers', category: 'Mixer', image: '/Shop/mixer.jpg', description: 'Durable mixer grinder.' },
  
];

export default function Shop() {
  const searchParams = useSearchParams();
  const search = searchParams.get('search')?.toLowerCase();
  const [filtered, setFiltered] = useState(allProducts);

  useEffect(() => {
    if (search) {
      setFiltered(allProducts.filter(p => p.name.toLowerCase().includes(search)));
    } else {
      setFiltered(allProducts);
    }
  }, [search]);

  return (
    <section className="bg-black text-white px-6 py-24 md:px-12 min-h-screen">
      <h1 className="text-4xl text-center font-bold text-[#d2a679] mb-12">
        {search ? `Results for "${search}"` : 'All Products'}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.length > 0 ? filtered.map((product, index) => (
          <motion.div
            key={index}
            className="bg-[#3b2f2f] rounded-2xl overflow-hidden shadow hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{product.name}</h2>
              <p className="text-sm text-gray-300 mb-4">{product.description}</p>
              <Link
                href={`/shop/category/${product.category.toLowerCase()}`}
                className="inline-block bg-[#d2a679] text-black text-sm font-semibold px-4 py-2 rounded hover:bg-[#c89b5c] transition"
              >
                Explore
              </Link>
            </div>
          </motion.div>
        )) : (
          <p className="text-center text-gray-400 col-span-full">No products found.</p>
        )}
      </div>
    </section>
  );
}

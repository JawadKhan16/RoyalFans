'use client';

import { motion } from 'framer-motion';

const products = [
  {
    name: 'Fan',
    image: '/Home/Products/fan.webp',
    description: 'Powerful and silent ceiling fan to keep your room cool.',
  },
  {
    name: 'Cooler',
    image: '/Home/Products/cooler.webp',
    description: 'Energy-efficient air cooler for long-lasting comfort.',
  },
  {
    name: 'Washing Machine',
    image: '/Home/Products/wm.jpg',
    description: 'Top-load washing machine with smart wash technology.',
  },
  {
    name: 'Mixer',
    image: '/Home/Products/mixer.webp',
    description: 'Durable mixer for smooth blending and grinding.',
  },
];

const ProductShowcase = () => {
  return (
    <section className="bg-black text-white px-6 py-16 md:px-12 min-h-screen">
      <div className="max-w-7xl mx-auto text-center min-h-screen">
        <h2 className="text-4xl font-bold text-[#d2a679] mb-12">Product Categories</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              className="bg-[#3b2f2f] rounded-2xl shadow-md overflow-hidden hover:scale-105 transition-transform cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-sm text-gray-300">{product.description}</p>
                
              </div>
            </motion.div>
          ))}
          
        </div>
        <p className="text-center  font-bold mt-8">RoyalFans Shop offers high-quality home appliances like fans, coolers, washing machines, and more, designed for performance, durability, and style. 
          Upgrade your home with trusted comfort and innovation.</p>
      </div>
    </section>
  );
};

export default ProductShowcase;

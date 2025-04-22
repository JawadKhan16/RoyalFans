'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="mt-18 bg-gradient-to-r from-[#3b2f2f] via-black to-black text-white w-full h-screen overflow-hidden ">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full flex flex-col md:flex-row items-center justify-between gap-12 px-6 md:px-12 max-w-screen-2xl mx-auto">
          
          {/* Text Section */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Discover <span className="text-[#d2a679]">Elegant Comfort</span><br />
              For Every Home
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Premium fans and appliances designed to match your lifestyle and home aesthetic.
            </p>
            <Link href="/shop">
              <button className="bg-[#a9744f] hover:bg-[#8a5c3d] transition px-6 py-3 rounded-full text-white font-semibold">
                Shop Now
              </button>
            </Link>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img
              src="/Home/img.webp"
              alt="Hero Fan"
              className="w-full max-w-md mx-auto drop-shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="mt-10 text-3xl sm:text-4xl md:text-5xl font-bold text-[#d2a679] mb-4 sm:mb-6 leading-tight">
            Let’s Connect with Us
          </h1>
          <p className="text-gray-300 mb-6 text-base sm:text-lg leading-relaxed">
            Have a question, feedback, or a collaboration idea? We’d love to hear from you.
            Our team is always ready to assist and support you!
          </p>
          <Link href="#contact-form">
            <button className="bg-[#d2a679] text-black px-5 py-3 rounded-md hover:bg-[#c89b5c] transition text-sm sm:text-base">
              Send a Message
            </button>
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <Image
            src="/contact.jpg"
            alt="Contact Illustration"
            width={400}
            height={300}
            className="rounded-xl object-contain w-full max-w-xs sm:max-w-sm md:max-w-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

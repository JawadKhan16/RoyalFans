'use client';

import { useParams } from 'next/navigation';
import allProducts from '@/data/allProducts';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    return <p className="text-white text-center mt-20">Product not found</p>;
  }

  return (
    <section className="bg-black text-white px-6 py-24 md:px-12 min-h-screen">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-[300px] object-cover rounded-xl"
        />
        <div>
          <h1 className="text-3xl font-bold text-[#d2a679] mb-4">{product.name}</h1>
          <p className="text-gray-300 mb-4">{product.description}</p>
          <p className="text-lg font-semibold mb-6">{product.price}</p>

          <div className="flex gap-4">
            <button className="bg-[#d2a679] text-black px-6 py-2 rounded hover:bg-[#c89b5c] transition">
              Buy Now
            </button>
            <button className="bg-transparent border border-[#d2a679] text-[#d2a679] px-6 py-2 rounded hover:bg-[#d2a679] hover:text-black transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;

'use client';

import { useParams } from 'next/navigation';
import allProducts from '@/data/allProducts';
import Link from 'next/link';

const ProductDetail = () => {
  const { slug } = useParams();
  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    return <p className="text-white text-center mt-20">Product not found</p>;
  }

  const relatedProducts = allProducts.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );

  return (
    <section className="bg-black text-white px-6 py-24 md:px-12 min-h-screen">
      {/* Product Detail */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-16 items-start">
        <div className="w-full h-full flex justify-center items-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[400px] object-contain rounded-xl"
          />
        </div>
          <div className="text-left">
            <h1 className="text-3xl font-bold text-[#d2a679] mb-4">{product.name}</h1>
            <p className="text-gray-300 mb-4">{product.description}</p>
            <p className="text-sm ">{product.brand}</p>
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


      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-[#d2a679] mb-6 text-center">
            More {product.category} Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedProducts.map((item, index) => (
              <Link key={index} href={`/shop/product/${item.slug}`}>
                <div className="bg-[#3b2f2f] rounded-xl overflow-hidden shadow hover:scale-105 transition-transform p-4 flex flex-col items-center relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-[200px] object-contain"
                  />
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>
                  <p className="text-sm">{item.brand}</p>
                  <p className="font-semibold">{item.price}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetail;

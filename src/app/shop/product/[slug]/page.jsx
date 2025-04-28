'use client';

import { useParams, useRouter } from 'next/navigation';
import allProducts from '@/data/products/allProducts';
import Link from 'next/link';
import { useCart } from '@/components/pages/cart/CartContext';
import { useState } from 'react';

const ProductDetail = () => {
  const { slug } = useParams();
  const router = useRouter();
  const { addToCart } = useCart(); // use context

  const product = allProducts.find((p) => p.slug === slug);

  if (!product) {
    return <p className="text-white text-center mt-20">Product not found</p>;
  }

  // State for the selected color
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);

  const relatedProducts = allProducts.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  );

  const handleAddToCart = () => {
    addToCart({ ...product, selectedColor }); // Add selected color to the cart
    router.push('/cart');
  };

  return (
    <section className="bg-black text-white px-6 py-24 md:px-12 min-h-screen">
      {/* Product Detail */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 mb-16 items-start">
        <div className="w-full h-full flex justify-center items-center">
          {/* Display the selected color image */}
          <img
            src={selectedColor.image} // Show the selected color image
            alt={product.name}
            className="w-full h-auto max-h-[400px] object-contain rounded-xl"
          />
        </div>
        <div className="text-left">
          <h1 className="text-3xl font-bold text-[#d2a679] mb-4">{product.name}</h1>
          <p className="text-gray-300 mb-4">{product.description}</p>

          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div className="mb-4">
              <p className="text-sm mb-2">Color:</p>
              <select
                onChange={(e) => setSelectedColor(product.colors.find(c => c.name === e.target.value))}
                value={selectedColor.name}
                className="bg-black text-white border border-[#d2a679] p-2 rounded"
              >
                {product.colors.map((color) => (
                  <option key={color.name} value={color.name} style={{ backgroundColor: color.name.toLowerCase() }}>
                    {color.name}
                  </option>
                ))}
              </select>
            </div>
          )}

          <p className="text-sm mb-2">Brand: {product.brand}</p>
          {/* Price and MRP */}
          <div className="flex gap-2 items-center">
                    {product.mrp && (
                      <span className="text-sm text-gray-500 line-through">Rs. {product.mrp}</span>
                    )}
                    <h2 className="font-semibold">Rs. {product.price}</h2>
                  </div>

          <div className="flex gap-4">
            <button className="bg-[#d2a679] text-black px-6 py-2 rounded hover:bg-[#c89b5c] transition">
              Buy Now
            </button>
            <button
              onClick={handleAddToCart}
              className="bg-transparent border border-[#d2a679] text-[#d2a679] px-6 py-2 rounded hover:bg-[#d2a679] hover:text-black transition"
            >
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
            {relatedProducts.map((item) => (
              <Link key={item.slug} href={`/shop/product/${item.slug}`}>
                <div className="bg-[#3b2f2f] rounded-xl overflow-hidden shadow hover:scale-105 transition-transform p-4 flex flex-col items-center relative">
                  <img
                    src={item.colors[0].image} // Show the first color's image
                    alt={item.name}
                    className="max-h-[200px] object-contain"
                  />
                  <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
                  <p className="text-sm text-gray-300">{item.description}</p>

                  <p className="text-sm">Brand: {item.brand}</p>
                  <p className="font-semibold">Rs. {item.price}</p>
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

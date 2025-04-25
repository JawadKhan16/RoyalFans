'use client';

import { useCart } from '@/components/pages/cart/CartContext';
import CartItem from '@/components/pages/cart/CartItem';
import CartTotal from '@/components/pages/cart/CartTotal';

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();

  // helper to clean and get price
  const getNumericPrice = (price) => {
    if (typeof price === 'string') {
      return parseFloat(price.replace(/[^0-9.]/g, '')) || 0;
    }
    return price;
  };

  const total = cartItems.reduce((acc, item) => {
    const numericPrice = getNumericPrice(item.price);
    return acc + numericPrice * item.quantity;
  }, 0);

  return (
    <section className="min-h-screen bg-black text-white px-6 py-16 md:px-12">
      <h1 className="text-3xl font-bold text-[#d2a679] mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-300">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item, index) => {
              const numericPrice = getNumericPrice(item.price);
              const itemSubtotal = numericPrice * item.quantity;
              return (
                <CartItem
                  key={index}
                  item={{ ...item, numericPrice, itemSubtotal }}
                  onRemove={removeFromCart}
                />
              );
            })}
          </div>

          <CartTotal total={total} />
        </>
      )}
    </section>
  );
};

export default CartPage;

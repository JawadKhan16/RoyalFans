'use client';
import { useState } from 'react';
import CheckoutForm from './CheckoutForm';

const CartTotal = ({ total }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="text-left mt-8">
      <h2 className="text-xl font-semibold">Total: Rs. {total}</h2>
      <button
        onClick={() => setShowForm(true)}
        className="mt-4 bg-[#d2a679] text-black px-6 py-3 rounded hover:bg-[#c89b5c] transition"
      >
        Proceed to Checkout
      </button>

      {showForm && <CheckoutForm />}
    </div>
  );
};

export default CartTotal;

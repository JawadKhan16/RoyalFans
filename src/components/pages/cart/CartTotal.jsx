'use client';

const CartTotal = ({ total }) => {
  return (
    <div className="text-left mt-8">
      <h2 className="text-xl font-semibold">Total: Rs. {total}</h2>
      <button className="mt-4 bg-[#d2a679] text-black px-6 py-3 rounded hover:bg-[#c89b5c] transition">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default CartTotal;

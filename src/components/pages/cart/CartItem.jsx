'use client';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-[#2c2c2c] p-4 rounded-xl">
      {/* Display the selected color image */}
      <img
        src={item.selectedColor?.image || item.image} // Show selected color image or default image
        alt={item.name}
        className="w-28 h-28 object-contain rounded-lg"
      />
      <div className="flex-1 md:ml-6 text-left mt-4 md:mt-0">
        <h2 className="text-lg font-semibold">{item.name}</h2>
        <p className="text-sm text-gray-400">{item.brand}</p>

        {/* Show the selected color */}
        {item.selectedColor && (
          <p className="text-sm text-gray-300">
            Color: <span className="capitalize">{item.selectedColor.name}</span>
          </p>
        )}

        <p className="text-sm">Quantity: {item.quantity}</p>
        <p className="text-sm font-medium">Price: Rs. {item.price}</p>
        <p className="text-sm font-medium">Subtotal: Rs. {item.price * item.quantity}</p>
      </div>
      <button
        className="mt-4 md:mt-0 bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        onClick={() => onRemove(item.slug)}
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;

'use client';
import { useCart } from '@/components/pages/cart/CartContext';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const CheckoutForm = () => {
  const { cartItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getOrderDetails = () => {
    return cartItems.map(item => (
      `${item.name} (${item.quantity} x Rs.${item.price})`
    )).join('\n');
  };

  const validatePhoneNumber = (phone) => {
    // A simple validation for phone number format (adjust as necessary)
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validatePhoneNumber(formData.mobile)) {
      setError('Please enter a valid mobile number.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      mobile: formData.mobile,
      address: formData.address,
      order_details: getOrderDetails(),
      to_email: formData.email, // Send the email to the user's email
    };

    try {
      await emailjs.send(
        'service_h64hu6s',
        'template_dxv3zfa',
        templateParams,
        'yOKWd-njBzEr0mRqP'
      );

      alert('Order placed! A confirmation email has been sent.');
      clearCart();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Failed to send email. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 grid gap-4 bg-[#1c1c1c] p-6 rounded-xl max-w-md text-white">
      <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Full Name" className="p-3 rounded" />
      <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Email" className="p-3 rounded" />
      <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} required placeholder="Mobile Number" className="p-3 rounded" />
      {error && <div className="text-red-500 text-sm">{error}</div>}
      <textarea name="address" value={formData.address} onChange={handleChange} required placeholder="Address" className="p-3 rounded" />
      <button 
        type="submit" 
        disabled={isSubmitting} 
        className={`bg-[#d2a679] px-4 py-2 rounded ${isSubmitting ? 'cursor-not-allowed opacity-50' : 'hover:bg-[#c89b5c]'}`}
      >
        {isSubmitting ? 'Placing Order...' : 'Place Order'}
      </button>
    </form>
  );
};

export default CheckoutForm;

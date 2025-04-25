'use client';

import Link from 'next/link';
import { FiShoppingCart } from 'react-icons/fi'; 
import Logo from './Logo';
import SearchBar from './SearchBar';
import MobileMenu from './MobileMenu';
import { useCart } from '@/components/pages/cart/CartContext'; 

const Navbar = () => {
  const { cartCount } = useCart(); // get live cart count

  return (
    <header className="bg-black text-white w-full fixed top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="hover:text-[#d2a679] transition-colors">Home</a>
          <a href="/shop" className="hover:text-[#d2a679] transition-colors">Shop</a>
          <a href="/contact" className="hover:text-[#d2a679] transition-colors">Contact</a>
          
          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <FiShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Search */}
          <SearchBar />
        </nav>

        {/* Mobile Menu and Search Icon */}
        <div className="md:hidden flex items-center gap-3">
          {/* Cart Icon */}
          <Link href="/cart" className="relative">
            <FiShoppingCart size={24} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-xs text-white rounded-full h-5 w-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          <SearchBar />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
